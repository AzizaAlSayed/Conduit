import {
  require_db
} from "/build/_shared/chunk-SMZ7NZN3.js";
import {
  React,
  __toModule,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:C:\Users\laris\Conduit\app\routes\newArticle.tsx?browser
init_react();

// app/routes/newArticle.tsx
init_react();
var import_db = __toModule(require_db());
function NewArticleRoute() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "editor-page"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container page"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-md-10 offset-md-1 col-xs-12"
  }, /* @__PURE__ */ React.createElement("form", {
    method: "post"
  }, /* @__PURE__ */ React.createElement("fieldset", null, /* @__PURE__ */ React.createElement("fieldset", {
    className: "form-group"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    className: "form-control form-control-lg",
    placeholder: "Article Title",
    name: "title"
  })), /* @__PURE__ */ React.createElement("fieldset", {
    className: "form-group"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "What's this article about?",
    name: "bio"
  })), /* @__PURE__ */ React.createElement("fieldset", {
    className: "form-group"
  }, /* @__PURE__ */ React.createElement("textarea", {
    className: "form-control",
    placeholder: "Write your article (in markdown)",
    name: "description"
  })), /* @__PURE__ */ React.createElement("fieldset", {
    className: "form-group"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Enter tags",
    name: "tags"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "tag-list"
  })), /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-lg pull-xs-right btn-primary",
    type: "submit"
  }, "Publish Article")))))));
}
function ErrorBoundary() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, "Something unexpected went wrong. Sorry about that.");
}
export {
  ErrorBoundary,
  NewArticleRoute as default
};
//# sourceMappingURL=/build/routes/newArticle-F4YK62YX.js.map
