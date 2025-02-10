export type ConfigData = {
  platform: "gitlab";
  username: string;
  email: string;
  repoName: string;
  branchName: string;
};

type Return = [ConfigData | null, Error | null];

function localStorageGetConfigData(): Return {
  const savedData = localStorage.getItem("configData");
  if (!savedData) return [null, null];
  const data: ConfigData = JSON.parse(savedData);
  return [data, null];
}

export default localStorageGetConfigData;
