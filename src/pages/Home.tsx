import FileContent from "./../components/FileContent";
import Sidebar from "./../components/Sidebar";
import Header from "./../components/FileContent/Header";

import { useEffect } from "react";
import { useNavigate } from "react-router";

import checkConfigData from "../api/middlewares/check-config-data";
import checkApiKey from "../api/middlewares/check-api-key";

function Home() {
  const navigate = useNavigate();

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
        <Sidebar />
      </div>
      {/* Content */}
      <div className="h-screen overflow-y-auto">
        <Header />
        <FileContent />
      </div>
    </div>
  );
}

export default Home;
