import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import localStorageSaveConfigData, {
  ConfigData,
} from "../../api/repository/local-storage-save-config-data";
import localStorageSaveApiKey from "../../api/repository/local-storage-save-api-key";
import localStorageGetConfigData from "../../api/repository/local-storage-get-config-data";
import localStorageGetApiKey from "../../api/repository/local-storage-get-api-key";

function GitlabForm() {
  const [configData] = localStorageGetConfigData();
  const [configApikey] = localStorageGetApiKey();
  const secretApiKey = "*".repeat(configApikey?.length ?? 0);

  const [repoName, setRepoName] = useState(configData?.repoName ?? "");
  const [username, setUsername] = useState(configData?.username ?? "");
  const [email, setEmail] = useState(configData?.email ?? "");
  const [branchName, setBranchName] = useState(configData?.branchName ?? "");
  const [apiKey, setApiKey] = useState(secretApiKey ?? "");

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data: ConfigData = {
      platform: "gitlab",
      username,
      email,
      repoName,
      branchName,
    };
    const [_, err] = localStorageSaveConfigData(data);
    if (err != null) {
      alert(err.message);
      return;
    }
    alert("saved");
  }

  function handleSaveApiKey() {
    if (apiKey.length <= 0 || (apiKey.endsWith("*") && apiKey.startsWith("*")))
      return;
    const [_, err] = localStorageSaveApiKey(apiKey);
    if (err != null) {
      alert(err.message);
      return;
    }
    alert("saved api key");
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 border-b border-b-neutral-600 pb-6">
        <Input
          value={apiKey}
          setValue={setApiKey}
          type={"password"}
          isRequired={true}
          placeholder="API Key..."
          labelContent="API Key"
          descriptionContent="Your Gitlab API Key"
        />
        <Button
          onClick={handleSaveApiKey}
          content={"Update API Key"}
          type={"button"}
        />
      </div>
      <form
        onSubmit={(e) => handleFormSubmit(e)}
        className="flex flex-col gap-4"
      >
        <Input
          value={username}
          setValue={setUsername}
          type={"text"}
          placeholder="Username..."
          labelContent="Username"
          descriptionContent="Your Gitlab username"
        />
        <Input
          setValue={setEmail}
          value={email}
          type={"email"}
          placeholder="Email..."
          labelContent="Email"
          descriptionContent="Your Gitlab email"
        />
        <Input
          value={repoName}
          setValue={setRepoName}
          type={"text"}
          isRequired={true}
          placeholder="Repository Name..."
          labelContent="Repository Name"
          descriptionContent="Your Gitlab repository name"
        />
        <Input
          value={branchName}
          setValue={setBranchName}
          isRequired={true}
          type={"text"}
          placeholder="Branch Name..."
          labelContent="Branch Name"
          descriptionContent="Your Gitlab main branch name"
        />
        <Button content={"Submit"} type={"submit"} />
      </form>
    </div>
  );
}

export default GitlabForm;
