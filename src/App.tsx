import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import FirstPage from "./component/FirstPage";
import { Routes, Route } from "react-router-dom";
import Secoundpage from "./component/Secoundpage";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/secound" element={<Secoundpage />} />
      </Routes>
    </div>
  );
};

export default App;
