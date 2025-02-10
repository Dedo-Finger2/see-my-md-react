type ButtonProps = {
  content: string;
  type: "button" | "submit";
  onClick?: () => void;
};

function Button({ content, type, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className="bg-violet-500 text-violet-50 font-medium text-sm rounded-sm py-1 hover:bg-violet-400"
    >
      {content}
    </button>
  );
}

export default Button;
