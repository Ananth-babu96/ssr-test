import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect, StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { Link } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server.mjs";
const Aboutpage = () => {
  return /* @__PURE__ */ jsx("div", { children: "aboutpage" });
};
const Homepage = () => {
  return /* @__PURE__ */ jsx("div", { children: "homepage" });
};
const Navbar = () => {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("ul", { style: { listStyle: "none", display: "flex", gap: "20px" }, children: [
    /* @__PURE__ */ jsx(Link, { to: "/", children: /* @__PURE__ */ jsx("li", { children: "home" }) }),
    /* @__PURE__ */ jsx(Link, { to: "/about", children: /* @__PURE__ */ jsx("li", { children: "about" }) })
  ] }) });
};
const Layout = () => {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  });
  if (!hydrated) {
    return null;
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Homepage, {}),
    /* @__PURE__ */ jsx(Aboutpage, {})
  ] });
};
function App() {
  if (typeof window === void 0) {
    return null;
  }
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(Layout, {})
  ] });
}
function render({ url }) {
  console.log("rendering app...");
  const context = {};
  const html = renderToString(
    /* @__PURE__ */ jsx(StrictMode, { children: /* @__PURE__ */ jsx(StaticRouter, { location: url, context, children: /* @__PURE__ */ jsx(App, {}) }) })
  );
  console.log("renderedhtml is : ", html);
  return { html };
}
export {
  render
};
