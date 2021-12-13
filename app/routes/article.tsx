import {
  ActionFunction,
  Link,
  LoaderFunction,
  Outlet,
  useLoaderData,
} from "remix";
import { redirect } from "remix";
import { db } from "~/utils/db.server";

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const comment = form.get("comment");

  if (typeof comment !== "string") {
    throw new Error(`Form not submitted correctly.`);
  }

  const fields = { comment };

  const userInfo = await db.user.create({
    data: { userName: "laraa", ...fields },
  });
  return redirect(`/article/${userInfo.id}`);
};

type LoaderData = {
  userListItems: Array<{ id: string; userName: string; comment: string }>;
};

export const loader: LoaderFunction = async () => {
  const data: LoaderData = {
    userListItems: await db.user.findMany(),
  };
  return data;
};

export default function Article() {
  const data = useLoaderData<LoaderData>();

  const users = data.userListItems.map((user) => (
    <div className="card" key={user.id}>
      <div className="card-block">
        <p className="card-text">
          <Link to={user.id}>{user.comment}</Link>
        </p>
      </div>
      <div className="card-footer">
        <a href="" className="comment-author">
          <img
            src="https://i.redd.it/a6g2v0xi0pe41.png"
            className="comment-author-img"
          />
        </a>
        &nbsp;
        <a href="" className="comment-author">
          <Link to={user.id}>{user.userName}</Link>
        </a>
      </div>
    </div>
  ));
  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>Create a new implementation</h1>
          <div className="article-meta">
            <a href="">
              <img src="https://i.redd.it/a6g2v0xi0pe41.png" />
            </a>
            <div className="info">
              <a href="" className="author"></a>
            </div>
          </div>
        </div>
      </div>
      <div className="container page">
        <div className="row">
          <div className="col-xs-12 col-md-8 offset-md-2">
            <form className="card comment-form" method="post">
              <div className="card-block">
                <textarea
                  className="form-control"
                  placeholder="Write a comment..."
                  name="comment"
                ></textarea>
              </div>
              <div className="card-footer">
                <img
                  src="https://i.redd.it/a6g2v0xi0pe41.png"
                  className="comment-author-img"
                />
                <button className="btn btn-sm btn-primary" type="submit">
                  Post Comment
                </button>
              </div>
            </form>
            {users}
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
