var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toModule(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require("remix"));
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:C:\Users\laris\Conduit\app\root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links
});
var import_remix2 = __toModule(require("remix"));
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
  }), /* @__PURE__ */ React.createElement("title", null, "Conduit"), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement("nav", {
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
  }, "Sign up"))))), children, process.env.NODE_ENV === "development" ? /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null) : null));
}
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null));
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ React.createElement(Document, {
    title: "Uh-oh!"
  }, /* @__PURE__ */ React.createElement("h1", null, "App Error"), /* @__PURE__ */ React.createElement("pre", null, error.message));
}
function CatchBoundary() {
  const caught = (0, import_remix2.useCatch)();
  return /* @__PURE__ */ React.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, /* @__PURE__ */ React.createElement("h1", null, caught.status, " ", caught.statusText)));
}

// route-module:C:\Users\laris\Conduit\app\routes\register.tsx
var register_exports = {};
__export(register_exports, {
  action: () => action,
  default: () => RegisterRoute
});
var import_remix3 = __toModule(require("remix"));

// app/utils/db.server.ts
var import_client = __toModule(require("@prisma/client"));
var db;
if (process.env.NODE_ENV === "production") {
  db = new import_client.PrismaClient();
  db.$connect();
} else {
  if (!global.__db) {
    global.__db = new import_client.PrismaClient();
    global.__db.$connect();
  }
  db = global.__db;
}

// route-module:C:\Users\laris\Conduit\app\routes\register.tsx
var action = async ({ request }) => {
  const form = await request.formData();
  const userName = form.get("userName");
  const password = form.get("password");
  const email = form.get("email");
  if (typeof userName !== "string" || typeof password !== "string" || typeof email !== "string") {
    throw new Error(`Form not submitted correctly.`);
  }
  const fields = { userName, password, email };
  const userInfo = await db.user.create({
    data: fields
  });
  return (0, import_remix3.redirect)(`/home/${userInfo.userid}`);
};
function RegisterRoute() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "auth-page"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container page"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-md-6 offset-md-3 col-xs-12"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-xs-center"
  }, "Sign up"), /* @__PURE__ */ React.createElement("form", {
    method: "post"
  }, /* @__PURE__ */ React.createElement("fieldset", {
    className: "form-group"
  }, /* @__PURE__ */ React.createElement("input", {
    className: "form-control form-control-lg",
    type: "text",
    placeholder: "Your Name",
    name: "userName"
  })), /* @__PURE__ */ React.createElement("fieldset", {
    className: "form-group"
  }, /* @__PURE__ */ React.createElement("input", {
    className: "form-control form-control-lg",
    type: "text",
    placeholder: "Email",
    name: "email"
  })), /* @__PURE__ */ React.createElement("fieldset", {
    className: "form-group"
  }, /* @__PURE__ */ React.createElement("input", {
    className: "form-control form-control-lg",
    type: "password",
    placeholder: "Password",
    name: "password"
  })), /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-lg btn-primary pull-xs-right",
    type: "submit"
  }, "Sign up"))))));
}

// route-module:C:\Users\laris\Conduit\app\routes\$userId.tsx
var userId_exports = {};
__export(userId_exports, {
  ErrorBoundary: () => ErrorBoundary2,
  default: () => UserRoute,
  loader: () => loader
});
var import_remix4 = __toModule(require("remix"));
var import_remix5 = __toModule(require("remix"));
var loader = async ({ params }) => {
  const user = await db.user.findUnique({
    where: { userid: params.userId }
  });
  if (!user)
    throw new Error("user not found");
  const data = { user };
  return data;
};
function UserRoute() {
  const data = (0, import_remix5.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "."
  }, data.user.userName, " "));
}
function ErrorBoundary2() {
  const { userId } = (0, import_remix4.useParams)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, `There was an error loading by the id ${userId}. Sorry.`);
}

// route-module:C:\Users\laris\Conduit\app\routes\article.tsx
var article_exports = {};
__export(article_exports, {
  ErrorBoundary: () => ErrorBoundary3,
  action: () => action2,
  default: () => Article,
  loader: () => loader2
});
var import_remix6 = __toModule(require("remix"));
var import_remix7 = __toModule(require("remix"));
var action2 = async ({ request }) => {
  const form = await request.formData();
  const comment = form.get("comment");
  if (typeof comment !== "string") {
    throw new Error(`Form not submitted correctly.`);
  }
  const fields = { comment };
  const userInfo = await db.user.create({
    data: __spreadValues({ userName: "laraa" }, fields)
  });
  return (0, import_remix7.redirect)(`/article/${userInfo.id}`);
};
var loader2 = async () => {
  const data = {
    userListItems: await db.user.findMany()
  };
  return data;
};
function Article() {
  const data = (0, import_remix6.useLoaderData)();
  const users = data.userListItems.map((user) => /* @__PURE__ */ React.createElement("div", {
    className: "card",
    key: user.id
  }, /* @__PURE__ */ React.createElement("div", {
    className: "card-block"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "card-text"
  }, /* @__PURE__ */ React.createElement(import_remix6.Link, {
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
  }, /* @__PURE__ */ React.createElement(import_remix6.Link, {
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
function ErrorBoundary3() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, "Something unexpected went wrong. Sorry about that.");
}

// route-module:C:\Users\laris\Conduit\app\routes\home.tsx
var home_exports = {};
__export(home_exports, {
  default: () => HomeRoute,
  loader: () => loader3
});
var import_remix8 = __toModule(require("remix"));
var loader3 = async () => {
  const data = {
    userListItems: await db.user.findMany()
  };
  return data;
};
function HomeRoute() {
  const data = (0, import_remix8.useLoaderData)();
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
  }, /* @__PURE__ */ React.createElement(import_remix8.Link, {
    to: user.id
  }, user.userName)))))), /* @__PURE__ */ React.createElement("a", {
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

// route-module:C:\Users\laris\Conduit\app\routes\home\$userId.tsx
var userId_exports2 = {};
__export(userId_exports2, {
  default: () => UserRoute2
});
function UserRoute2() {
  return /* @__PURE__ */ React.createElement("div", null);
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/register": {
    id: "routes/register",
    parentId: "root",
    path: "register",
    index: void 0,
    caseSensitive: void 0,
    module: register_exports
  },
  "routes/$userId": {
    id: "routes/$userId",
    parentId: "root",
    path: ":userId",
    index: void 0,
    caseSensitive: void 0,
    module: userId_exports
  },
  "routes/article": {
    id: "routes/article",
    parentId: "root",
    path: "article",
    index: void 0,
    caseSensitive: void 0,
    module: article_exports
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: "home",
    index: void 0,
    caseSensitive: void 0,
    module: home_exports
  },
  "routes/home/$userId": {
    id: "routes/home/$userId",
    parentId: "routes/home",
    path: ":userId",
    index: void 0,
    caseSensitive: void 0,
    module: userId_exports2
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=/build/index.js.map
