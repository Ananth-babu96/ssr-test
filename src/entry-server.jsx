import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";
import { StaticRouter } from "react-router-dom/server";
import Homepage from "./pages/homepage";
export function render({ url }) {
   console.log("rendering app...");
   const context = {};
   const html = renderToString(
      <StrictMode>
         <StaticRouter location={url} context={context}>
            <App />
         </StaticRouter>
      </StrictMode>
   );
   console.log("renderedhtml is : ", html);
   return { html };
}
