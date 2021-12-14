var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
  ErrorBoundary: () => ErrorBoundary,
  default: () => App
});
var import_remix2 = __toModule(require("remix"));
function Document({
  children,
  title = `Conduit`
}) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("title", null, "Conduit"), /* @__PURE__ */ React.createElement("link", {
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
  }, "Sign up"))))), children, process.env.NODE_ENV === "development" ? /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null) : null));
}
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null));
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ React.createElement(Document, {
    title: "Uh-oh!"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, /* @__PURE__ */ React.createElement("h1", null, "App Error"), /* @__PURE__ */ React.createElement("pre", null, error.message)));
}

// route-module:C:\Users\laris\Conduit\app\routes\profile.tsx
var profile_exports = {};
__export(profile_exports, {
  ErrorBoundary: () => ErrorBoundary2,
  default: () => Profile,
  loader: () => loader
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

// route-module:C:\Users\laris\Conduit\app\routes\profile.tsx
var loader = async () => {
  const data = {
    userListItems: await db.user.findMany()
  };
  return data;
};
function Profile() {
  const data = (0, import_remix3.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "profile-page"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "user-info"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-xs-12 col-md-10 offset-md-1"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://i.redd.it/a6g2v0xi0pe41.png",
    className: "user-img"
  }), /* @__PURE__ */ React.createElement("h4", null, "Eric Simons"))))), /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-xs-12 col-md-10 offset-md-1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "articles-toggle"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "nav nav-pills outline-active"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "nav-item"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "nav-link active",
    href: ""
  }, "My Articles")))), /* @__PURE__ */ React.createElement("div", {
    className: "article-preview"
  }, /* @__PURE__ */ React.createElement("div", {
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
  }, "Eric Simons"))), /* @__PURE__ */ React.createElement("a", {
    href: "",
    className: "preview-link"
  }, /* @__PURE__ */ React.createElement("h1", null, "How to build webapps that scale"), /* @__PURE__ */ React.createElement("p", null, "This is the description for the post."), /* @__PURE__ */ React.createElement("span", null, "Read more...")))))));
}
function ErrorBoundary2() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, "I did a whoopsies.");
}

// route-module:C:\Users\laris\Conduit\app\routes\profile\$userName.tsx
var userName_exports = {};
__export(userName_exports, {
  ErrorBoundary: () => ErrorBoundary3,
  default: () => UserProfileRoute,
  loader: () => loader2
});
var import_remix4 = __toModule(require("remix"));
var import_remix5 = __toModule(require("remix"));
var loader2 = async ({ params }) => {
  const user = await db.user.findUnique({
    where: { id: params.userName }
  });
  if (!user)
    throw new Error("user not found");
  const data = { user };
  return data;
};
function UserProfileRoute() {
  const data = (0, import_remix5.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "."
  }, data.user.userName, " "));
}
function ErrorBoundary3() {
  const { userName } = (0, import_remix4.useParams)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, `There was an error loading by the id ${userName}. Sorry.`);
}

// route-module:C:\Users\laris\Conduit\app\routes\home.tsx
var home_exports = {};
__export(home_exports, {
  default: () => HomeRoute,
  loader: () => loader3
});
var import_remix6 = __toModule(require("remix"));
var loader3 = async () => {
  const data = {
    userListItems: await db.user.findMany()
  };
  return data;
};
function HomeRoute() {
  const data = (0, import_remix6.useLoaderData)();
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
  }, /* @__PURE__ */ React.createElement(import_remix6.Link, {
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
  "routes/profile": {
    id: "routes/profile",
    parentId: "root",
    path: "profile",
    index: void 0,
    caseSensitive: void 0,
    module: profile_exports
  },
  "routes/profile/$userName": {
    id: "routes/profile/$userName",
    parentId: "routes/profile",
    path: ":userName",
    index: void 0,
    caseSensitive: void 0,
    module: userName_exports
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: "home",
    index: void 0,
    caseSensitive: void 0,
    module: home_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=/build/index.js.map
