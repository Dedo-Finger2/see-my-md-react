import { AiOutlineQuestionCircle } from "react-icons/ai";
import { HiOutlineCog8Tooth } from "react-icons/hi2";
import { RiExpandUpDownLine } from "react-icons/ri";
import { Link } from "react-router";

function Footer() {
  return (
    <div className="flex justify-between items-center py-2 px-3 border-t-1 border-t-neutral-700">
      <div className="flex flex-row gap-2 items-center">
        <RiExpandUpDownLine className="text-neutral-400" size={20} />
        <div className="flex items-center font-semibold overflow-hidden w-full text-sm text-neutral-300">
          <span className="line-clamp-1">ZettleGarden 01</span>
        </div>
      </div>
      <div className="flex gap-2 text-neutral-400">
        <span className="group relative p-1 rounded-sm transition-colors linear hover:bg-neutral-600/50">
          <AiOutlineQuestionCircle size={20} />
          <div className="hidden select-none uppercase absolute left-0 w-max bottom-8 px-2 bg-neutral-700 text-xs p-1 rounded-sm group-hover:block">
            Coming Soon...
          </div>
        </span>
        <Link
          className="group relative p-1 cursor-default rounded-sm transition-colors linear hover:bg-neutral-600/50"
          to="/config"
        >
          <HiOutlineCog8Tooth size={20} />
          <div className="hidden select-none absolute left-0 w-max bottom-8 px-2 bg-neutral-700 text-xs p-1 rounded-sm group-hover:block">
            Config
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
