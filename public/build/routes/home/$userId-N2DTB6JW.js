import {
  Link,
  import_react_router_dom,
  useLoaderData
} from "/build/_shared/chunk-3CHGJXKY.js";
import {
  require_db
} from "/build/_shared/chunk-SMZ7NZN3.js";
import {
  React,
  __toModule,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:C:\Users\laris\Conduit\app\routes\home\$userId.tsx?browser
init_react();

// app/routes/home/$userId.tsx
init_react();
var import_db = __toModule(require_db());
function UserRoute() {
  const data = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Link, {
    to: "."
  }, data.user.userName, " "));
}
function ErrorBoundary() {
  const { userId } = (0, import_react_router_dom.useParams)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, `There was an error loading by the id ${userId}. Sorry.`);
}
export {
  ErrorBoundary,
  UserRoute as default
};
//# sourceMappingURL=/build/routes/home/$userId-N2DTB6JW.js.map
