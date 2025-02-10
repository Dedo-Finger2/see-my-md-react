type PlatformCardProps = {
  icon: React.ReactNode;
  title: string;
  description?: string;
  isDisabled: boolean;
  isSelected: boolean;
};

function PlatformCard({
  title,
  description,
  icon,
  isDisabled,
  isSelected,
}: PlatformCardProps) {
  return (
    <div
      className={`${
        isDisabled
          ? "text-neutral-400 flex items-start border border-neutral-600 w-max p-4 rounded-xl hover:cursor-not-allowed select-none"
          : "flex items-start border border-neutral-500 w-max p-4 rounded-xl hover:border-purple-500 transition-all ease-in-out select-none"
      } ${isSelected ? "border-purple-500" : ""}`}
    >
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {icon}
            <h1 className="text-base font-bold ">{title}</h1>
          </div>
          {isDisabled ? (
            ""
          ) : (
            <input
              checked={isSelected}
              type="checkbox"
              id="use-this-platform"
              className="accent-purple-500"
            />
          )}
        </div>
        {description ? (
          <span className="text-xs text-neutral-400 font-semibold">
            {description}
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default PlatformCard;
