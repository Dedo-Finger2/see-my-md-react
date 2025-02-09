type SidebarFileListItemProps = {
  fileName: string;
  selected?: boolean;
};

function ListItem({ fileName, selected }: SidebarFileListItemProps) {
  return (
    <div
      className={`${
        selected ? "bg-neutral-700/80 text-neutral-200" : "text-neutral-400"
      } select-none font-medium overflow-hidden w-full flex items-center px-6 py-0.5 rounded-xs hover:bg-neutral-700/80 hover:text-neutral-200 transition-colors linear`}
    >
      <span className="truncate">{fileName}</span>
    </div>
  );
}

export default ListItem;
