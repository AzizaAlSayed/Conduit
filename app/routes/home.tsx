import { Link, useLoaderData } from "remix";
import { LoaderFunction } from "remix";
import { db } from "~/utils/db.server";

type LoaderData = {
  userListItems: Array<{ id: string; userName: string }>;
};


export const loader: LoaderFunction = async () => {
  const data: LoaderData = {
    userListItems: await db.user.findMany()
  };
  return data;
};

export default function HomeRoute() {
  const data = useLoaderData<LoaderData>();

  const users = data.userListItems.map((user) => (
    <div key={user.id} className="article-preview">
      <div className="article-meta">
        <a href="profile.html">
          <img src="https://i.redd.it/a6g2v0xi0pe41.png" />
        </a>
        <div className="info">
          <a href="" className="author">
            <p>
              <a href="" className="author">
                <Link to={user.id}>{user.userName}</Link>
              </a>
            </p>
          </a>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart"></i> 29
        </button>
      </div>
      <a href="" className="preview-link">
        <h1>How to build webapps that scale</h1>
        <p>This is the description for the post.</p>
        <span>Read more...</span>
      </a>
    </div>
  ));

  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <a className="nav-link active" href="">
                    Global Feed
                  </a>
                </li>
              </ul>
            </div>
            {users}
          </div>
        </div>
      </div>
    </div>
  );
}
