import SidebarFileListItem from "../SidebarFileListItem";
import { BsFillMarkdownFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { RiExpandUpDownLine } from "react-icons/ri";
import { HiOutlineCog8Tooth } from "react-icons/hi2";
import { AiOutlineQuestionCircle } from "react-icons/ai";

function Sidebar() {
  return (
    // Wrapper
    <div className="flex flex-col justify-between text-neutral-100 w-full border-x border-neutral-700 h-full">
      <div>
        {/* Header */}
        <div className="p-4 text-center font-bold text-xl border-b-[0.1px] border-b-neutral-700">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex gap-4 items-center justify-center">
              <FaEye className="rotate-[-12deg]" />
              <BsFillMarkdownFill className="rotate-12 text-purple-500" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span>See My</span>
              <span className="text-purple-500 font-extrabold text-2xl">
                MD
              </span>
            </div>
          </div>
        </div>
        {/* Item list */}
        <div className="relative p-4 flex flex-col gap-1 items-center text-xs py-6">
          <SidebarFileListItem fileName="Welcome" selected={true} />
          <SidebarFileListItem fileName="Como Tailwind revolucionou a indústria do front-end" />
          <SidebarFileListItem fileName="Minha opinião sobre sexo antes de um relacionamento" />
          <SidebarFileListItem fileName="Segredos de Portugal" />
        </div>
      </div>
      {/* Bottom Menu */}
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
    </div>
  );
}

export default Sidebar;
