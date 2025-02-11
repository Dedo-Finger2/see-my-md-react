import FileContent from "./../components/FileContent";
import Sidebar from "./../components/Sidebar";
import Header from "./../components/FileContent/Header";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import checkConfigData from "../api/middlewares/check-config-data";
import checkApiKey from "../api/middlewares/check-api-key";
import getAllRepoFiles, {
	RepoFile,
} from "../api/repository/get-all-repo-files";
import localStorageGetConfigData from "../api/repository/local-storage-get-config-data";
import localStorageGetApiKey from "../api/repository/local-storage-get-api-key";
import { IoMdMenu } from "react-icons/io";

function Home() {
	const [files, setFiles] = useState<RepoFile[]>([]);
	const [selectedFile, setSelectedFile] = useState<RepoFile>({
		id: "loading...",
		path: "loading...",
		shortName: "loading...",
	});
	const [isVisible, setIsVisible] = useState(true)

	const navigate = useNavigate();

	useEffect(() => {
		async function fetchData() {
			const [configData] = localStorageGetConfigData();
			const [apiKey] = localStorageGetApiKey();
			const repoFiles = await getAllRepoFiles({
				apiKey: apiKey ?? "",
				branchName: configData?.branchName ?? "",
				repoName: configData?.repoName ?? "",
				username: configData?.username ?? "",
			});
			setFiles(repoFiles);
			setSelectedFile(repoFiles[0]);
		}
		fetchData();
	}, []);

	useEffect(() => {
		let err;
		err = checkApiKey();
		if (err) navigate("/config");
		err = checkConfigData();
		if (err) navigate("/config");
	}, [navigate]);

	return (
		// Wrapper
		<div className={` ${!isVisible ? "" : "grid grid-cols-[300px_1fr]"}`}>
			<div className="p-1 rounded-md absolute z-10 text-neutral-300 top-12 left-6 hover:bg-neutral-500/30" onClick={() => setIsVisible(prev => !prev)}>
				<IoMdMenu size={20} />
			</div>
			{/* Sidebar */}
			<div className={` ${!isVisible ? "hidden" : "relative bg-neutral-800 h-screen"} `}>
				<Sidebar
					isVisible={isVisible}
					setSelectedFile={setSelectedFile}
					selectedFile={selectedFile}
					files={files}
				/>
			</div>
			{/* Content */}
			<div className="h-screen overflow-y-auto">
				<Header file={selectedFile} />
				<FileContent file={selectedFile} />
			</div>
		</div>
	);
}

export default Home;
