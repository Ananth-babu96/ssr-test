import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./homepage";
import Aboutpage from "./Aboutpage";
import Navbar from "./Navbar";

const Layout = () => {
   const [hydrated, setHydrated] = useState(false);
   useEffect(() => {
      setHydrated(true);
   });
   if (!hydrated) {
      return null;
   }
   return (
      <>
         <Homepage />
         <Aboutpage />
      </>
   );
};

export default Layout;
