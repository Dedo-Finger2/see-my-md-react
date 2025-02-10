type Return = [string | null, Error | null];

function localStorageGetApiKey(): Return {
  const apiKey = localStorage.getItem("apiKey");
  if (!apiKey) return [null, null];
  return [apiKey, null];
}

export default localStorageGetApiKey;
