import {
  require_db
} from "/build/_shared/chunk-RTG7YD6B.js";
import {
  React,
  __toModule,
  init_react,
  useActionData
} from "/build/_shared/chunk-PJZ6G5FL.js";

// browser-route-module:C:\Users\laris\Conduit\app\routes\newArticle.tsx?browser
init_react();

// app/routes/newArticle.tsx
init_react();
var import_db = __toModule(require_db());
function NewArticleRoute() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
  const actionData = useActionData();
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
    defaultValue: (_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.title,
    className: "form-control form-control-lg",
    placeholder: "Article Title",
    name: "title",
    "aria-invalid": Boolean((_b = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _b.title) || void 0,
    "aria-describedby": ((_c = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _c.title) ? "name-error" : void 0
  }), ((_d = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _d.title) ? /* @__PURE__ */ React.createElement("p", {
    className: "error-messages",
    role: "alert",
    id: "name-error"
  }, actionData.fieldErrors.title) : null), /* @__PURE__ */ React.createElement("fieldset", {
    className: "form-group"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    defaultValue: (_e = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _e.bio,
    className: "form-control",
    placeholder: "What's this article about?",
    name: "bio",
    "aria-invalid": Boolean((_f = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _f.bio) || void 0,
    "aria-describedby": ((_g = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _g.bio) ? "content-error" : void 0
  }), ((_h = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _h.bio) ? /* @__PURE__ */ React.createElement("p", {
    className: "error-messages",
    role: "alert",
    id: "content-error"
  }, actionData.fieldErrors.bio) : null), /* @__PURE__ */ React.createElement("fieldset", {
    className: "form-group"
  }, /* @__PURE__ */ React.createElement("textarea", {
    className: "form-control",
    placeholder: "Write your article (in markdown)",
    name: "description",
    defaultValue: (_i = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _i.description,
    "aria-invalid": Boolean((_j = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _j.description) || void 0,
    "aria-describedby": ((_k = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _k.description) ? "content-error" : void 0
  }), ((_l = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _l.description) ? /* @__PURE__ */ React.createElement("p", {
    className: "error-messages",
    role: "alert",
    id: "content-error"
  }, actionData.fieldErrors.description) : null), /* @__PURE__ */ React.createElement("fieldset", {
    className: "form-group"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Enter tags",
    name: "tags",
    defaultValue: (_m = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _m.tag,
    "aria-invalid": Boolean((_n = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _n.tag) || void 0,
    "aria-describedby": ((_o = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _o.tag) ? "content-error" : void 0
  }), /* @__PURE__ */ React.createElement("div", {
    className: "tag-list"
  }), ((_p = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _p.tag) ? /* @__PURE__ */ React.createElement("p", {
    className: "error-messages",
    role: "alert",
    id: "content-error"
  }, actionData.fieldErrors.tag) : null), /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-lg pull-xs-right btn-primary",
    type: "submit"
  }, "Publish Article")))))));
}
export {
  NewArticleRoute as default
};
//# sourceMappingURL=/build/routes/newArticle-BVQ2WPJL.js.map
