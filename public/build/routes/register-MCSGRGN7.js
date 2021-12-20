import {
  require_db
} from "/build/_shared/chunk-SMZ7NZN3.js";
import {
  React,
  __toModule,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:C:\Users\laris\Conduit\app\routes\register.tsx?browser
init_react();

// app/routes/register.tsx
init_react();
var import_db = __toModule(require_db());
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
export {
  RegisterRoute as default
};
//# sourceMappingURL=/build/routes/register-MCSGRGN7.js.map
