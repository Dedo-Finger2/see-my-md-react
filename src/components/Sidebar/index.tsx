import ListItem from "./ListItem";
import Header from "./Header";
import Footer from "./Footer";
import SearchBar from "./SearchBar";
import { RepoFile } from "../../api/repository/get-all-repo-files";
import { useEffect, useState } from "react";

type SidebarProps = {
	files: RepoFile[];
	selectedFile: RepoFile;
	setSelectedFile: React.Dispatch<React.SetStateAction<RepoFile>>;
};

function Sidebar({ files, selectedFile, setSelectedFile }: SidebarProps) {
	const [searchValue, setSearchValue] = useState("")
	const [filteredFiles, setFilteredFiles] = useState<RepoFile[]>(files)

	useEffect(() => {
		const filtered = files.filter(file => file.shortName.toUpperCase().includes(searchValue.toUpperCase()))
		setFilteredFiles(filtered)
	}, [files, searchValue])

	return (
		// Wrapper
		<div className="flex flex-col justify-between text-neutral-100 w-full border-x border-neutral-700 h-full">
			<div className="h-full overflow-y-auto">
				{/* Header */}
				<Header />
				<SearchBar setSearchValue={setSearchValue} />
				{/* Item list */}
				<div className="relative p-4 flex flex-col gap-1 items-center text-xs py-6">
					{filteredFiles.map((file) => (
						<ListItem
							setSelectedFile={setSelectedFile}
							key={file.id}
							file={file}
							selected={selectedFile.id === file.id}
						/>
					))}
				</div>
			</div>
			{/* Bottom Menu */}
			<Footer />
		</div>
	);
}

export default Sidebar;
