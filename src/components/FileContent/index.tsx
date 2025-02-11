import { RepoFile } from "../../api/repository/get-all-repo-files";
import Body from "./Body";

type FileContentProps = {
	file: RepoFile;
};

function FileContent({ file }: FileContentProps) {
	return (
		<div className="relative text-neutral-50 flex flex-col gap-12 max-h-[200px] max-w-screen">
			{/* Body */}
			<Body file={file} />
		</div>
	);
}

export default FileContent;
