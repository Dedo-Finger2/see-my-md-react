import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import { HiOutlineBookOpen } from "react-icons/hi";
import { RepoFile } from "../../api/repository/get-all-repo-files";

type HeaderProps = {
	file: RepoFile
}

function Header({ file }: HeaderProps) {
	return (
		<>
			{/* Top bar */}
			<div className="sticky top-0 z-10 px-8 py-1 w-full flex flex-row items-center justify-between bg-neutral-900">
				{/* Next and Preivous */}
				<div className="flex gap-2 text-neutral-400">
					<div className="group relative py-0.5 px-1 rounded-sm transition-colors ease-in-out hover:bg-neutral-700/50">
						<GrFormPreviousLink size={20} />
						<div className="hidden select-none absolute left-8 w-max top-8 px-2 bg-neutral-700 text-xs p-1 rounded-sm group-hover:block">
							Previous note
						</div>
					</div>
					<div className="relative group py-0.5 px-1 rounded-sm transition-colors ease-in-out hover:bg-neutral-700/50">
						<GrFormNextLink size={20} />
						<div className="hidden select-none absolute left-8 w-max top-8 px-2 bg-neutral-700 text-xs p-1 rounded-sm group-hover:block">
							Next note
						</div>
					</div>
				</div>
				{/* File Name */}
				<div>
					<span className="text-xs text-neutral-300 font-semibold select-none">
						{file.shortName}
					</span>
				</div>
				{/* Reading or Edit view */}
				<div className="text-neutral-400 relative">
					<div className="group p-1.5 rounded-sm transition-colors ease-in-out hover:bg-neutral-700/50">
						<HiOutlineBookOpen />
						<div className="hidden select-none absolute right-8 w-max top-8 px-2 uppercase bg-neutral-700 text-xs p-1 rounded-sm group-hover:block">
							Coming Soon...
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Header;
