import {
  require_db
} from "/build/_shared/chunk-3X5KVYE2.js";
import {
  Link,
  React,
  __toModule,
  import_react_router_dom,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-6KVGI7IX.js";

// browser-route-module:C:\Users\laris\Conduit\app\routes\profile\$username.tsx?browser
init_react();

// app/routes/profile/$username.tsx
init_react();
var import_db = __toModule(require_db());
function UserProfileRoute() {
  const data = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Link, {
    to: "."
  }, data.user.userName, " "));
}
function ErrorBoundary() {
  const { userName } = (0, import_react_router_dom.useParams)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, `There was an error loading by the id ${userName}. Sorry.`);
}
export {
  ErrorBoundary,
  UserProfileRoute as default
};
//# sourceMappingURL=/build/routes/profile/$username-RQNC566C.js.map
