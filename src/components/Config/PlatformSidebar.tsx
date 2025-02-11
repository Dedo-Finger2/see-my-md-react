import { useEffect } from "react";
import GitlabForm from "../PlatformForms/Gitlab";

type PlatformSidebarProps = {
	icon: React.ReactNode;
	name: string;
	isVisible: boolean;
};

function PlatformSidebar({ icon, name, isVisible }: PlatformSidebarProps) {

	useEffect(() => {
		console.log(isVisible)
	}, [isVisible])

	return (
		<div className={`${!isVisible ? "hidden" : ""} transition-transform ease-in-out relative text-neutral-300 h-full w-100 bg-neutral-800 border-l border-l-neutral-700 py-4`}>
			<div className="p-6">
				<div className="flex flex-col items-center gap-2">
					{icon}
					<h1 className="text-xl font-semibold">{name}</h1>
				</div>
			</div>
			{/* Form */}
			<div className="flex flex-col px-14 w-full">
				{/* <PlatformForm /> */}
				<GitlabForm />
			</div>
		</div>
	);
}

export default PlatformSidebar;
