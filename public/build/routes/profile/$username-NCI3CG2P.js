import {
  require_db
} from "/build/_shared/chunk-SMZ7NZN3.js";
import {
  Link,
  import_react_router_dom,
  useLoaderData
} from "/build/_shared/chunk-3CHGJXKY.js";
import {
  React,
  __toModule,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:C:\Users\laris\Conduit\app\routes\profile\$username.tsx?browser
init_react();

// app/routes/profile/$username.tsx
init_react();
var import_db = __toModule(require_db());
function UserProfileRoute() {
  lolo();
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
//# sourceMappingURL=/build/routes/profile/$username-NCI3CG2P.js.map
