import "./index.css";
import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter, HashRouter } from "react-router-dom";
import Homepage from "./pages/homepage";

hydrateRoot(
   document.getElementById("root"),
   <StrictMode>
      <HashRouter>
         <App />
      </HashRouter>
   </StrictMode>
);
