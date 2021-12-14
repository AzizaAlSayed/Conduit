import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-CHH7JKYF.js";
import {
  require_db
} from "/build/_shared/chunk-SMZ7NZN3.js";
import {
  React,
  __toModule,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:C:\Users\laris\Conduit\app\routes\home.tsx?browser
init_react();

// app/routes/home.tsx
init_react();
var import_db = __toModule(require_db());
function HomeRoute() {
  const data = useLoaderData();
  const users = data.userListItems.map((user) => /* @__PURE__ */ React.createElement("div", {
    key: user.id,
    className: "article-preview"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "article-meta"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "profile.html"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://i.redd.it/a6g2v0xi0pe41.png"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "info"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "",
    className: "author"
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("a", {
    href: "",
    className: "author"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: user.id
  }, user.userName))))), /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-outline-primary btn-sm pull-xs-right"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "ion-heart"
  }), " 29")), /* @__PURE__ */ React.createElement("a", {
    href: "",
    className: "preview-link"
  }, /* @__PURE__ */ React.createElement("h1", null, "How to build webapps that scale"), /* @__PURE__ */ React.createElement("p", null, "This is the description for the post."), /* @__PURE__ */ React.createElement("span", null, "Read more..."))));
  return /* @__PURE__ */ React.createElement("div", {
    className: "home-page"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "banner"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "logo-font"
  }, "conduit"), /* @__PURE__ */ React.createElement("p", null, "A place to share your knowledge."))), /* @__PURE__ */ React.createElement("div", {
    className: "container page"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-md-9"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "feed-toggle"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "nav nav-pills outline-active"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "nav-item"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "nav-link active",
    href: ""
  }, "Global Feed")))), users))));
}
export {
  HomeRoute as default
};
//# sourceMappingURL=/build/routes/home-VX5JYV3M.js.map
