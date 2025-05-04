import React, { createContext, useContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, useLocation } from "react-router-dom";
import QRCode from "react-qr-code";

const MenuPage = () => {
    const { menu } = useContext(MenuContext);
    const navigate = useNavigate();
  
    return (
      <div className="p-6">
        <h2 className="text-2xl mb-4">Menu</h2>
        <div className="grid gap-4">
          {menu.length > 0 ? (
            menu.map((item, index) => (
              <div key={index} className="p-4 border rounded">
                <h3 className="text-xl">{item.name}</h3>
                <p className="text-gray-700">{item.details}</p>
                <p className="font-bold">${item.price}</p>
                <button className="bg-green-500 text-white px-4 py-2 mt-2">Add to Cart</button>
              </div>
            ))
          ) : (
            <p>No items added yet.</p>
          )}
        </div>
        <button onClick={() => navigate("/qr")} className="bg-purple-500 text-white px-4 py-2 mt-4">Share via QR</button>
      </div>
    );
  };