import localStorageGetApiKey from "../repository/local-storage-get-api-key";

function checkApiKey(): Error | null {
  const [apiKey] = localStorageGetApiKey();
  if (!apiKey) return new Error("no data found");
  return null;
}

export default checkApiKey;
