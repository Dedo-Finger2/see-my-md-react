import Input from "../Input";

type SearchBarProps = {
	setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

function SearchBar({ setSearchValue }: SearchBarProps) {
	return (
		<div className="w-full px-12 py-4 border-b border-b-neutral-700">
			<Input setValue={setSearchValue} type="text" placeholder="Search notes..." />
		</div>
	);
}

export default SearchBar;
