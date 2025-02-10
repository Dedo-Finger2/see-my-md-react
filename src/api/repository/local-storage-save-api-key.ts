function localStorageSaveApiKey(apiKey: string): [null, Error | null] {
  localStorage.setItem("apiKey", apiKey);
  const savedData = localStorage.getItem("apiKey");
  if (!savedData) return [null, new Error("failed to save api key")];
  return [null, null];
}

export default localStorageSaveApiKey;
