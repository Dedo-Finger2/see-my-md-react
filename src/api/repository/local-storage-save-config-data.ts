export type ConfigData = {
  platform: "gitlab";
  username: string;
  email: string;
  repoName: string;
  branchName: string;
};

function localStorageSaveConfigData(data: ConfigData): [null, Error | null] {
  localStorage.setItem("configData", JSON.stringify(data));
  const savedData = localStorage.getItem("configData");
  if (!savedData)
    return [null, new Error("failed to save data in localStorage")];
  return [null, null];
}

export default localStorageSaveConfigData;
