import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CreateMenu from "./Pages/CreateMenu/CreateMenu.jsx";
import MenuPage from "./Pages/MenuPage/MenuPage.jsx";
import QRPage from "./Pages/QRPage/QRPage.jsx";
import Navbar from "./Components/Navbar.jsx";
import MenuContext from "./Context/MenuContext.jsx";

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
