import { FaGitlab } from "react-icons/fa6";
import PlatformCard from "./PlatformCard";

function SuportedPlatforms() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {/* Single Platform */}
      <PlatformCard
        icon={<FaGitlab />}
        title="Gitlab"
        isDisabled={false}
        description="Lorem ipsum dolor sit amet."
        isSelected={false}
      />
    </div>
  );
}

export default SuportedPlatforms;
