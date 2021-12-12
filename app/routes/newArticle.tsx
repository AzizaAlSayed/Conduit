import type { ActionFunction } from "remix";
import { redirect } from "remix";
import { db } from "~/utils/db.server";
import { useActionData, json } from "remix";

function validateInputs(inputContent: string, numberOfChar: number) {
  if (inputContent.length < numberOfChar) {
    return `This is too short`;
  }
}

type ActionData = {
  formError?: string;
  fieldErrors?: {
    title: string | undefined;
    tag: string | undefined;
    bio: string | undefined;
    description: string | undefined;
  };
  fields?: {
    title: string | undefined;
    tag: string | undefined;
    bio: string | undefined;
    description: string | undefined;
  };
};

const badRequest = (data: ActionData) => json(data, { status: 400 });

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const title = form.get("title");
  const bio = form.get("bio");
  const description = form.get("description");
  const tags = form.get("tags");

  if (
    typeof title !== "string" ||
    typeof bio !== "string" ||
    typeof description !== "string" ||
    typeof tags !== "string"
  ) {
    return badRequest({
      formError: `Form not submitted correctly.`,
    });
  }

  const fieldErrors = {
    title: validateInputs(title, 10),
    tag: validateInputs(tags, 3),
    bio: validateInputs(bio, 20),
    description: validateInputs(description, 400),
  };

  const fields = { title, bio, description, tags };

  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({ fieldErrors, ...fields });
  }

  const userInfo = await db.user.create({
    data: { userName: "larissa", ...fields },
  });
  return redirect(`/home/${userInfo.id}`);
};

export default function NewArticleRoute() {
  const actionData = useActionData<ActionData>();

  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <form method="post">
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    defaultValue={actionData?.fields?.title}
                    className="form-control form-control-lg"
                    placeholder="Article Title"
                    name="title"
                    aria-invalid={
                      Boolean(actionData?.fieldErrors?.title) || undefined
                    }
                    aria-describedby={
                      actionData?.fieldErrors?.title ? "name-error" : undefined
                    }
                  />
                  {actionData?.fieldErrors?.title ? (
                    <p className="error-messages" role="alert" id="name-error">
                      {actionData.fieldErrors.title}
                    </p>
                  ) : null}
                </fieldset>

                <fieldset className="form-group">
                  <input
                    type="text"
                    defaultValue={actionData?.fields?.bio}
                    className="form-control"
                    placeholder="What's this article about?"
                    name="bio"
                    aria-invalid={
                      Boolean(actionData?.fieldErrors?.bio) || undefined
                    }
                    aria-describedby={
                      actionData?.fieldErrors?.bio ? "content-error" : undefined
                    }
                  />
                  {actionData?.fieldErrors?.bio ? (
                    <p
                      className="error-messages"
                      role="alert"
                      id="content-error"
                    >
                      {actionData.fieldErrors.bio}
                    </p>
                  ) : null}
                </fieldset>

                <fieldset className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="Write your article (in markdown)"
                    name="description"
                    defaultValue={actionData?.fields?.description}
                    aria-invalid={
                      Boolean(actionData?.fieldErrors?.description) || undefined
                    }
                    aria-describedby={
                      actionData?.fieldErrors?.description
                        ? "content-error"
                        : undefined
                    }
                  ></textarea>
                  {actionData?.fieldErrors?.description ? (
                    <p
                      className="error-messages"
                      role="alert"
                      id="content-error"
                    >
                      {actionData.fieldErrors.description}
                    </p>
                  ) : null}
                </fieldset>

                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter tags"
                    name="tags"
                    defaultValue={actionData?.fields?.tag}
                    aria-invalid={
                      Boolean(actionData?.fieldErrors?.tag) || undefined
                    }
                    aria-describedby={
                      actionData?.fieldErrors?.tag ? "content-error" : undefined
                    }
                  />
                  <div className="tag-list"></div>
                  {actionData?.fieldErrors?.tag ? (
                    <p
                      className="error-messages"
                      role="alert"
                      id="content-error"
                    >
                      {actionData.fieldErrors.tag}
                    </p>
                  ) : null}
                </fieldset>

                <button
                  className="btn btn-lg pull-xs-right btn-primary"
                  type="submit"
                >
                  Publish Article
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
