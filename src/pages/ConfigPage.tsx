import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router";
import { FaGitlab } from "react-icons/fa6";

import PlatformSidebar from "../components/Config/PlatformSidebar";
import ComingSoonPlatforms from "../components/Config/ComingSoonPlatforms";
import SuportedPlatforms from "../components/Config/SuportedPlatforms";

function ConfigPage() {
  return (
    <div className="flex items-center justify-between w-full h-screen">
      {/* Center box */}
      <div className="flex items-center justify-center w-full">
        <div className="flex flex-col gap-8 border border-neutral-700 p-12 m-12 rounded-xl text-neutral-200">
          <Link
            className="flex w-max hover:bg-neutral-600/50 rounded-sm p-1 cursor-default"
            to="/"
          >
            <IoArrowBack size={20} />
          </Link>
          {/* Title */}
          <div className="font-bold text-2xl">
            <span>Configure your</span>{" "}
            <span className="text-purple-500 underline underline-offset-8">
              favorite
            </span>{" "}
            <span>platform</span>
          </div>
          {/* Platforms */}
          <SuportedPlatforms />
          {/* Coming Soon */}
          <ComingSoonPlatforms />
        </div>
      </div>
      {/* Sidebar */}
      <PlatformSidebar icon={<FaGitlab />} name="Gitlab" />
    </div>
  );
}

export default ConfigPage;
