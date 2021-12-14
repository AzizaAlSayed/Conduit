import {
  LiveReload,
  import_react_router_dom
} from "/build/_shared/chunk-CHH7JKYF.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:C:\Users\laris\Conduit\app\routes\home\root.tsx?browser
init_react();

// app/routes/home/root.tsx
init_react();
var links = () => {
  return [{ rel: "stylesheet", href: "//demo.productionready.io/main.css" }];
};
function Document({
  children,
  title = `Remix: So great, it's funny!`
}) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("title", null, "Remix: So great, it's funny!"), /* @__PURE__ */ React.createElement("link", {
    rel: "stylesheet",
    href: "//demo.productionready.io/main.css"
  })), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement("nav", {
    className: "navbar navbar-light"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "navbar-brand",
    href: "index.html"
  }, "conduit"), /* @__PURE__ */ React.createElement("ul", {
    className: "nav navbar-nav pull-xs-right"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "nav-item"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "nav-link active",
    href: ""
  }, "Home")), /* @__PURE__ */ React.createElement("li", {
    className: "nav-item"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "nav-link",
    href: ""
  }, "Sign in")), /* @__PURE__ */ React.createElement("li", {
    className: "nav-item"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "nav-link",
    href: ""
  }, "Sign up"))))), children, true ? /* @__PURE__ */ React.createElement(LiveReload, null) : null));
}
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(import_react_router_dom.Outlet, null));
}
export {
  App as default,
  links
};
//# sourceMappingURL=/build/routes/home/root-NX6UXPZD.js.map
