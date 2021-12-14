import {
  Links,
  LiveReload,
  Meta,
  import_react_router_dom,
  useCatch
} from "/build/_shared/chunk-R6TOIQ4O.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:C:\Users\laris\Conduit\app\root.tsx?browser
init_react();

// app/root.tsx
init_react();
var links = () => {
  return [{ rel: "stylesheet", href: "//demo.productionready.io/main.css" }];
};
function Document({
  children,
  title = `Conduit`
}) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("title", null, "Conduit"), /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement("nav", {
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
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ React.createElement(Document, {
    title: "Unexpected Error"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "error-messages"
  }, /* @__PURE__ */ React.createElement("h1", null, "App Error"), /* @__PURE__ */ React.createElement("pre", null, error.message)));
}
function CatchBoundary() {
  const caught = useCatch();
  return /* @__PURE__ */ React.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, /* @__PURE__ */ React.createElement("h1", null, caught.status, " ", caught.statusText)));
}
export {
  CatchBoundary,
  ErrorBoundary,
  App as default,
  links
};
//# sourceMappingURL=/build/root-MANFSMXX.js.map
