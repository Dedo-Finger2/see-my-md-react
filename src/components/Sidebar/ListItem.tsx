import { RepoFile } from "../../api/repository/get-all-repo-files";

type SidebarFileListItemProps = {
  file: RepoFile;
  selected?: boolean;
  setSelectedFile: React.Dispatch<React.SetStateAction<RepoFile>>;
};

function ListItem({
  file,
  selected,
  setSelectedFile,
}: SidebarFileListItemProps) {
  return (
    <div
      onClick={() => setSelectedFile(file)}
      className={`${
        selected ? "bg-neutral-700/80 text-neutral-200" : "text-neutral-400"
      } select-none font-medium overflow-hidden w-full flex items-center px-6 py-0.5 rounded-xs hover:bg-neutral-700/80 hover:text-neutral-200 transition-colors linear`}
    >
      <span className="truncate">{file.shortName}</span>
    </div>
  );
}

export default ListItem;
