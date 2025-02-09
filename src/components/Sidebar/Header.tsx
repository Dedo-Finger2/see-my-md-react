import { BsFillMarkdownFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";

function Header() {
  return (
    <div className="p-4 text-center font-bold text-xl border-b-[0.1px] border-b-neutral-700">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex gap-4 items-center justify-center">
          <FaEye className="rotate-[-12deg]" />
          <BsFillMarkdownFill className="rotate-12 text-purple-500" />
        </div>
        <div className="flex flex-col gap-0.5">
          <span>See My</span>
          <span className="text-purple-500 font-extrabold text-2xl">MD</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
