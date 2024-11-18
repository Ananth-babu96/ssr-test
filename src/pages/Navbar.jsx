import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
   return (
      <div>
         <ul style={{ listStyle: "none", display: "flex", gap: "20px" }}>
            <Link to="/">
               <li>home</li>
            </Link>
            <Link to="/about">
               <li>about</li>
            </Link>
         </ul>
      </div>
   );
};

export default Navbar;
