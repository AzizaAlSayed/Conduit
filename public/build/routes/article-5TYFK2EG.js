import {
  require_db
} from "/build/_shared/chunk-SMZ7NZN3.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-3CHGJXKY.js";
import {
  React,
  __toModule,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:C:\Users\laris\Conduit\app\routes\article.tsx?browser
init_react();

// app/routes/article.tsx
init_react();
var import_db = __toModule(require_db());
function Article() {
  const data = useLoaderData();
  const users = data.userListItems.map((user) => /* @__PURE__ */ React.createElement("div", {
    className: "card",
    key: user.id
  }, /* @__PURE__ */ React.createElement("div", {
    className: "card-block"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "card-text"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: user.id
  }, user.comment))), /* @__PURE__ */ React.createElement("div", {
    className: "card-footer"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "",
    className: "comment-author"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://i.redd.it/a6g2v0xi0pe41.png",
    className: "comment-author-img"
  })), "\xA0", /* @__PURE__ */ React.createElement("a", {
    href: "",
    className: "comment-author"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: user.id
  }, user.userName)))));
  return /* @__PURE__ */ React.createElement("div", {
    className: "article-page"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "banner"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h1", null, "Create a new implementation"), /* @__PURE__ */ React.createElement("div", {
    className: "article-meta"
  }, /* @__PURE__ */ React.createElement("a", {
    href: ""
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://i.redd.it/a6g2v0xi0pe41.png"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "info"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "",
    className: "author"
  }))))), /* @__PURE__ */ React.createElement("div", {
    className: "container page"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-xs-12 col-md-8 offset-md-2"
  }, /* @__PURE__ */ React.createElement("form", {
    className: "card comment-form",
    method: "post"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "card-block"
  }, /* @__PURE__ */ React.createElement("textarea", {
    className: "form-control",
    placeholder: "Write a comment...",
    name: "comment"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "card-footer"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://i.redd.it/a6g2v0xi0pe41.png",
    className: "comment-author-img"
  }), /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-sm btn-primary",
    type: "submit"
  }, "Post Comment"))), users))));
}
export {
  Article as default
};
//# sourceMappingURL=/build/routes/article-5TYFK2EG.js.map
