import { useEffect, useState } from "react";
import { RepoFile } from "../../api/repository/get-all-repo-files";

import getFileContent from "../../api/repository/get-file-content";
import localStorageGetApiKey from "../../api/repository/local-storage-get-api-key";
import localStorageGetConfigData from "../../api/repository/local-storage-get-config-data";

type BodyProps = {
	file: RepoFile;
};

function Body({ file }: BodyProps) {
	const [fileContent, setFileContent] = useState("Loading...");

	useEffect(() => {
		setFileContent("Loading...")
		async function fetchData() {
			const [configData] = localStorageGetConfigData();
			const [apiKey] = localStorageGetApiKey();
			const fileContent = await getFileContent({
				apiKey: apiKey ?? "",
				branchName: configData?.branchName ?? "",
				repoName: configData?.repoName ?? "",
				username: configData?.username ?? "",
				filePath: file.path,
			});
			setFileContent(fileContent.content);
		}
		fetchData();
	}, [file]);



	return (
		<div className="mt-24 flex flex-col gap-4 px-8 lg:px-36 2xl:px-96 text-neutral-200 max-h-screen">
			{/* Title */}
			<h1 className="text-3xl font-bold">{file.shortName ?? "Loading..."}
			</h1>
			{/* Content */}
			<div
				className="text-base/7 pb-132"
				dangerouslySetInnerHTML={{ __html: fileContent ?? "Loading..." }}
			></div>
		</div>
	);
}

export default Body;
