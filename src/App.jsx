import { useEffect, useState } from "react";
import "./App.css";
import Aboutpage from "./pages/Aboutpage";
import Homepage from "./pages/homepage";
import Navbar from "./pages/Navbar";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
function App() {
   if (typeof window === undefined) {
      return null;
   }
   return (
      <div>
         <Navbar />
         <Layout />
      </div>
   );
}

export default App;
