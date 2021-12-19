import { ActionFunction, LinksFunction, redirect } from "remix";
import { useActionData, json, Link, Form, useSearchParams } from "remix";
import { db } from "~/utils/db.server";
import stylesUrl from "../styles/login.css";

function validateUsernameAndPassword(content: string) {
  if (content.length < 4) {
    return `This is too short`;
  }
}

type ActionData = {
  formError?: string;
  fieldErrors?: {
    username: string | undefined;
    password: string | undefined;
  };
  fields?: {
    username: string;
    password: string;
  };
};

const badRequest = (data: ActionData) => json(data, { status: 400 });

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const username = form.get("username");
  const password = form.get("password");
  if (typeof username !== "string" || typeof password !== "string") {
    return badRequest({
      formError: `the username or the password are not correctly.`,
    });
  }

  const fieldErrors = {
    username: validateUsernameAndPassword(username),
    password: validateUsernameAndPassword(password),
  };
  const fields = { username, password };
  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({ fieldErrors, fields });
  }

  const user = await db.user.create({ data: { email: "", ...fields } });
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
                  name="username"
                  defaultValue={actionData?.fields?.username}
                  aria-invalid={Boolean(actionData?.fieldErrors?.username)}
                  aria-describedby={
                    actionData?.fieldErrors?.username
                      ? "username-error"
                      : undefined
                  }
                />
                {actionData?.fieldErrors?.username ? (
                  <p
                    className="form-validation-error"
                    role="alert"
                    id="username-error"
                  >
                    {actionData?.fieldErrors.username}
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
                    className="form-validation-error"
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
