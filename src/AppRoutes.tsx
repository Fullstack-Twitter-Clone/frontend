import React from 'react';
import { Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <div className="App">
      <Routes>
        {/* HOME on load */}
        <Route path="/*" element={<h1>Home</h1>} />
        
        {/* PROFILE */}
        
        
      </Routes>
    </div>
  );
}

export default AppRoutes;
