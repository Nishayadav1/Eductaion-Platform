import React from "react";
import Navbar from "./Pages/Navbar";
import Dashboard from "./Pages/Dashboard";


function App() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen flex justify-center items-center p-4">
        <div className="flex flex-row w-full p-4 mt-2 gap-4">
          <div className="w-2/3 flex flex-col">
            <Dashboard />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
