import FileContent from "./../components/FileContent";
import Sidebar from "./../components/Sidebar";
import Header from "./../components/FileContent/Header";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import checkConfigData from "../api/middlewares/check-config-data";
import checkApiKey from "../api/middlewares/check-api-key";
import getAllRepoFiles, {
  RepoFile,
} from "../api/repository/get-all-repo-files";
import localStorageGetConfigData from "../api/repository/local-storage-get-config-data";
import localStorageGetApiKey from "../api/repository/local-storage-get-api-key";

function Home() {
  const [files, setFiles] = useState<RepoFile[]>([]);
  const [selectedFile, setSelectedFile] = useState<RepoFile>({
    id: "",
    path: "",
    shortName: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const [configData] = localStorageGetConfigData();
      const [apiKey] = localStorageGetApiKey();
      const repoFiles = await getAllRepoFiles({
        apiKey: apiKey ?? "",
        branchName: configData?.branchName ?? "",
        repoName: configData?.repoName ?? "",
        username: configData?.username ?? "",
      });
      setFiles(repoFiles);
      setSelectedFile(repoFiles[0]);
    }
    fetchData();
  }, []);

  useEffect(() => {
    let err;
    err = checkApiKey();
    if (err) navigate("/config");
    err = checkConfigData();
    if (err) navigate("/config");
  }, []);

  return (
    // Wrapper
    <div className="grid grid-cols-[300px_1fr]">
      {/* Sidebar */}
      <div className="bg-neutral-800 h-screen">
        <Sidebar
          setSelectedFile={setSelectedFile}
          selectedFile={selectedFile}
          files={files}
        />
      </div>
      {/* Content */}
      <div className="h-screen overflow-y-auto">
        <Header />
        <FileContent file={selectedFile} />
      </div>
    </div>
  );
}

export default Home;
