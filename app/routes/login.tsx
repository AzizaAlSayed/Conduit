import { ActionFunction, LinksFunction, redirect } from "remix";
import { useActionData, json, Link, Form, useSearchParams } from "remix";
import { db } from "~/utils/db.server";
import stylesUrl from "../styles/login.css";

function validateEmailAndPassword(content: string) {
  if (content.length < 4) {
    return `This is too short`;
  }
}

type ActionData = {
  formError?: string;
  fieldErrors?: {
    email: string | undefined;
    password: string | undefined;
  };
  fields?: {
    email: string;
    password: string;
  };
};

const badRequest = (data: ActionData) => json(data, { status: 400 });

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const email = form.get("email");
  const password = form.get("password");
  if (typeof email !== "string" || typeof password !== "string") {
    return badRequest({
      formError: `the email or the password are not correctly.`,
    });
  }

  const fieldErrors = {
    email: validateEmailAndPassword(email),
    password: validateEmailAndPassword(password),
  };
  const fields = { email, password };
  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({ fieldErrors, fields });
  }

  const user = await db.user.create({ data: { username: "", ...fields } });
  return redirect(`/home/${user.userid}`);
};

export default function Login() {
  const actionData = useActionData<ActionData>();

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>
            <Form method="post">
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  name="email"
                  defaultValue={actionData?.fields?.email}
                  aria-invalid={Boolean(actionData?.fieldErrors?.email)}
                  aria-describedby={
                    actionData?.fieldErrors?.email ? "email-error" : undefined
                  }
                />
                {actionData?.fieldErrors?.email ? (
                  <p className="error-messages" role="alert" id="email-error">
                    {actionData?.fieldErrors.email}
                  </p>
                ) : null}
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  name="password"
                  aria-invalid={
                    Boolean(actionData?.fieldErrors?.password) || undefined
                  }
                  aria-describedby={
                    actionData?.fieldErrors?.password
                      ? "password-error"
                      : undefined
                  }
                />
                {actionData?.fieldErrors?.password ? (
                  <p
                    className="error-messages"
                    role="alert"
                    id="password-error"
                  >
                    {actionData?.fieldErrors.password}
                  </p>
                ) : null}
              </fieldset>

              <div id="form-error-message">
                {actionData?.formError ? (
                  <p className="form-validation-error" role="alert">
                    {actionData?.formError}
                  </p>
                ) : null}
              </div>
              <button
                className="btn btn-lg btn-primary pull-xs-right"
                type="submit"
              >
                Sign in
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
