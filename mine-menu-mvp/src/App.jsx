import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CreateMenu from "./pages/CreateMenu/CreateMenu";
import MenuPage from "./pages/MenuPage/MenuPage";
import QRPage from "./Pages/QRPage/QRPage";
import Navbar from "./components/Navbar";
import MenuContext from "./context/MenuContext";

const App = () => {
  const [menu, setMenu] = useState([]);

  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<CreateMenu />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/qr" element={<QRPage />} />
        </Routes>
      </Router>
    </MenuContext.Provider>
  );
};

export default App;
