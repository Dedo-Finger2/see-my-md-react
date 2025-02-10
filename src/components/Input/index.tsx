type InputProps = {
  labelContent?: string;
  type:
    | "text"
    | "password"
    | "colors"
    | "button"
    | "checkbox"
    | "email"
    | "submit";
  placeholder?: string;
  descriptionContent?: string;
};

function Input({
  labelContent,
  type,
  descriptionContent,
  placeholder,
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      {labelContent ? (
        <label htmlFor="teste" className="text-sm font-semibold">
          {labelContent}
        </label>
      ) : (
        ""
      )}
      <input
        type={type}
        placeholder={placeholder}
        className="w-full outline-1 outline-neutral-400 rounded-xs p-1 text-xs selection:bg-violet-600 selection:text-violet-50"
      />
      {descriptionContent ? (
        <span className="text-xs text-neutral-400 font-medium">
          {descriptionContent}
        </span>
      ) : (
        ""
      )}
    </div>
  );
}

export default Input;
