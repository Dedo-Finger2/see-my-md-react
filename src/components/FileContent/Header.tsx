import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import { HiOutlineBookOpen } from "react-icons/hi";

function Header() {
  return (
    <>
      {/* Top bar */}
      <div className="sticky top-0 z-10 px-8 py-1 w-full flex flex-row items-center justify-between bg-neutral-900">
        {/* Next and Preivous */}
        <div className="flex gap-2 text-neutral-400">
          <div className="py-0.5 px-1 rounded-sm transition-colors ease-in-out hover:bg-neutral-700/50">
            <GrFormPreviousLink size={20} />
          </div>
          <div className="py-0.5 px-1 rounded-sm transition-colors ease-in-out hover:bg-neutral-700/50">
            <GrFormNextLink size={20} />
          </div>
        </div>
        {/* File Name */}
        <div>
          <span className="text-xs text-neutral-300 font-semibold">
            Welcome
          </span>
        </div>
        {/* Reading or Edit view */}
        <div className="text-neutral-400">
          <div className="p-1.5 rounded-sm transition-colors ease-in-out hover:bg-neutral-700/50">
            <HiOutlineBookOpen />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
