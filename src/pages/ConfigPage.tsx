import { useState } from "react";

import { Link } from "react-router";
import { FaGitlab } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { FaHouseChimney } from "react-icons/fa6";

import PlatformSidebar from "../components/Config/PlatformSidebar";
import ComingSoonPlatforms from "../components/Config/ComingSoonPlatforms";
import SuportedPlatforms from "../components/Config/SuportedPlatforms";

function ConfigPage() {
	const [isVisible, setIsVisible] = useState(true)

	return (
		<div className="flex items-center justify-between w-full h-full lg:h-screen">
			{/* Center box */}
			<div className="flex items-center justify-center w-full ">
				<div className="flex flex-col gap-8 border border-neutral-700 p-12 m-12 rounded-xl text-neutral-200">
					<div className="flex flex-col items-center gap-2 md:flex-row md:items-center md:gap-2">
						<Link
							className="relative group flex w-max hover:bg-neutral-600/50 rounded-sm p-1 cursor-default"
							to="/"
						>
							<FaHouseChimney size={20} />
							<div className="hidden select-none absolute left-0 w-max bottom-8 px-2 bg-neutral-700 text-xs p-1 rounded-sm group-hover:block">
								Home
							</div>
						</Link>
						{/* Title */}
						<div className="text-center lg:text-left select-none font-bold text-2xl">
							<span>Configure your</span>{" "}
							<span className="text-purple-500 underline underline-offset-8">
								favorite
							</span>{" "}
							<span>platform</span>
						</div>
					</div>
					{/* Platforms */}
					<SuportedPlatforms />
					{/* Coming Soon */}
					<ComingSoonPlatforms />
				</div>
			</div>
			{/* Sidebar */}
			<div className="p-1 rounded-md absolute z-10 text-neutral-300 top-8 right-10 hover:bg-neutral-500/30" onClick={() => setIsVisible(prev => !prev)}>
				<IoMdMenu size={20} />
			</div>
			<PlatformSidebar isVisible={isVisible} icon={<FaGitlab />} name="Gitlab" />
		</div>
	);
}

export default ConfigPage;
