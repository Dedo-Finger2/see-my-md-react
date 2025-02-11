import { FaGithub, FaGoogleDrive, FaDropbox } from "react-icons/fa";
import { GrOnedrive } from "react-icons/gr";
import { RiTelegram2Fill } from "react-icons/ri";
import PlatformCard from "./PlatformCard";

function ComingSoonPlatforms() {
	return (
		<div className="flex flex-col items-center justify-center gap-6 border-t-1 border-t-neutral-700 pt-6">
			<h1 className="text-center text-2xl text-neutral-400 italic">
				COMING SOON...
			</h1>
			<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 content-center gap-4">
				<PlatformCard
					icon={<FaGithub />}
					title="Github"
					isDisabled={true}
					description="Lorem ipsum dolor sit amet."
					isSelected={false}
				/>
				<PlatformCard
					icon={<FaGoogleDrive />}
					title="Google Drive"
					isDisabled={true}
					description="Lorem ipsum dolor sit amet."
					isSelected={false}
				/>
				<PlatformCard
					icon={<RiTelegram2Fill />}
					title="Telegram"
					isDisabled={true}
					description="Lorem ipsum dolor sit amet."
					isSelected={false}
				/>
				<PlatformCard
					icon={<GrOnedrive />}
					title="One Drive"
					isDisabled={true}
					description="Lorem ipsum dolor sit amet."
					isSelected={false}
				/>
				<PlatformCard
					icon={<FaDropbox />}
					title="Dropbox"
					isDisabled={true}
					description="Lorem ipsum dolor sit amet."
					isSelected={false}
				/>
			</div>
		</div>
	);
}

export default ComingSoonPlatforms;
