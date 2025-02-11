import localStorageGetConfigData from "../repository/local-storage-get-config-data";

function checkConfigData(): Error | null {
  const [configData] = localStorageGetConfigData();
  if (!configData) return new Error("no data found");
  return null;
}

export default checkConfigData;
