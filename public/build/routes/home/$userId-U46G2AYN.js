import {
  require_db
} from "/build/_shared/chunk-GVPAGIB4.js";
import {
  Link,
  React,
  __toModule,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-AXECN2XH.js";

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
export {
  UserRoute as default
};
//# sourceMappingURL=/build/routes/home/$userId-U46G2AYN.js.map
