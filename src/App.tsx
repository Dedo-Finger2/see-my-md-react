import Sidebar from "./components/Sidebar";

function App() {
  return (
    // Wrapper
    <div className="grid grid-cols-[300px_1fr]">
      {/* Sidebar */}
      <div className="bg-neutral-800 h-screen">
        <Sidebar />
      </div>
      {/* Content */}
      <div className="h-screen"></div>
    </div>
  );
}

export default App;
