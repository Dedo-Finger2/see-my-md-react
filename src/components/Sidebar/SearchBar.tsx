import Input from "../Input";

function SearchBar() {
  return (
    <div className="w-full px-12 py-4 border-b border-b-neutral-700">
      <Input type="text" placeholder="Search notes..." />
    </div>
  );
}

export default SearchBar;
