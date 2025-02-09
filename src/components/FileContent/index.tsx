import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";
import { HiOutlineBookOpen } from "react-icons/hi";

function FileContent() {
  return (
    <div className="text-neutral-50 flex p-3">
      {/* Top bar */}
      <div className="px-4 flex w-full flex-row items-center justify-between">
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
      {/* Body */}
      <div>
        {/* Title */}
        <h1></h1>
        {/* Content */}
        <p></p>
      </div>
    </div>
  );
}

export default FileContent;
