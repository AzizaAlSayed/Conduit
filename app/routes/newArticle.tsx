import { ActionFunction, json, useActionData } from "remix";
import { redirect } from "remix";
import { db } from "~/utils/db.server";

function validateInputArticle(Input: string, NumOfChars: number) {
  if (Input.length < NumOfChars) {
    return `This is too short`;
  }
}

type ActionData = {
  formError?: string;
  fieldErrors?: {
    title: string | undefined;
    bio: string | undefined;
    description: string | undefined;
    tags: string | undefined;
  };
  fields?: {
    title: string;
    bio: string;
    description: string;
    tags: string;
  };
};

const badRequest = (data: ActionData) => json(data, { status: 422 });

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
    title: validateInputArticle(title, 5),
    bio: validateInputArticle(bio, 15),
    description: validateInputArticle(title, 400),
    tags: validateInputArticle(tags, 3),
  };
  const fields = { title, bio, description, tags };

  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({ fieldErrors, fields });
  }
  const userInfo = await db.user.create({
    data: { id: "asdasasd", userName: "larissa", ...fields },
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
                      actionData?.fieldErrors?.title ? "title-error" : undefined
                    }
                  />
                  {actionData?.fieldErrors?.title ? (
                    <p className="error-messages" role="alert" id="title-error">
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
                      actionData?.fieldErrors?.bio ? "bio-error" : undefined
                    }
                  />
                  {actionData?.fieldErrors?.bio ? (
                    <p className="error-messages" role="alert" id="bio-error">
                      {actionData.fieldErrors.bio}
                    </p>
                  ) : null}
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    className="form-control"
                    defaultValue={actionData?.fields?.description}
                    placeholder="Write your article (in markdown)"
                    name="description"
                    aria-invalid={
                      Boolean(actionData?.fieldErrors?.description) || undefined
                    }
                    aria-describedby={
                      actionData?.fieldErrors?.description
                        ? "description-error"
                        : undefined
                    }
                  ></textarea>
                  {actionData?.fieldErrors?.description ? (
                    <p
                      className="error-messages"
                      role="alert"
                      id="description-error"
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
                    defaultValue={actionData?.fields?.tags}
                    name="tags"
                    aria-invalid={
                      Boolean(actionData?.fieldErrors?.tags) || undefined
                    }
                    aria-describedby={
                      actionData?.fieldErrors?.tags ? "tags-error" : undefined
                    }
                  />
                  <div className="tag-list"></div>
                </fieldset>
                {actionData?.fieldErrors?.tags ? (
                  <p className="error-messages" role="alert" id="tags-error">
                    {actionData.fieldErrors.tags}
                  </p>
                ) : null}
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

export function ErrorBoundary() {
  return (
    <div className="error-container">
      Something unexpected went wrong. Sorry about that.
    </div>
  );
}
