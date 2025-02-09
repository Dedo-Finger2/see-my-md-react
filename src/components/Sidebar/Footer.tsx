import { AiOutlineQuestionCircle } from "react-icons/ai";
import { HiOutlineCog8Tooth } from "react-icons/hi2";
import { RiExpandUpDownLine } from "react-icons/ri";

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
        <span className="p-1 rounded-sm transition-colors linear hover:bg-neutral-600/50">
          <AiOutlineQuestionCircle size={20} />
        </span>
        <span className="p-1 rounded-sm transition-colors linear hover:bg-neutral-600/50">
          <HiOutlineCog8Tooth size={20} />
        </span>
      </div>
    </div>
  );
}

export default Footer;
