type ButtonProps = {
  content: string;
};

function Button({ content }: ButtonProps) {
  return (
    <button className="bg-violet-500 text-violet-50 font-medium text-sm rounded-sm py-1 hover:bg-violet-400">
      {content}
    </button>
  );
}

export default Button;
