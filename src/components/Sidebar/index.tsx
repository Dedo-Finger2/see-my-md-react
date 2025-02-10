import ListItem from "./ListItem";
import Header from "./Header";
import Footer from "./Footer";
import SearchBar from "./SearchBar";
import { RepoFile } from "../../api/repository/get-all-repo-files";

type SidebarProps = {
  files: RepoFile[];
  selectedFile: RepoFile;
  setSelectedFile: React.Dispatch<React.SetStateAction<RepoFile>>;
};

function Sidebar({ files, selectedFile, setSelectedFile }: SidebarProps) {
  return (
    // Wrapper
    <div className="flex flex-col justify-between text-neutral-100 w-full border-x border-neutral-700 h-full">
      <div className="h-full overflow-y-auto">
        {/* Header */}
        <Header />
        <SearchBar />
        {/* Item list */}
        <div className="relative p-4 flex flex-col gap-1 items-center text-xs py-6">
          {files.map((file, idx) => (
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
