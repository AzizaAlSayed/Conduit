import {
  LiveReload,
  Outlet,
  Scripts,
  LinksFunction,
  Meta,
  Links,
  useCatch,
} from "remix";
export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: "//demo.productionready.io/main.css" }];
};

function Document({
  children,
  title = `Conduit`,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Conduit</title>
        <Meta />
        <Links />
      </head>
      <body>
        <nav className="navbar navbar-light">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              conduit
            </a>
            <ul className="nav navbar-nav pull-xs-right">
              <li className="nav-item">
                <a className="nav-link active" href="">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  Sign in
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {children}
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document title="Unexpected Error">
      <div className="error-messages">
        <h1>App Error</h1>
        <pre>{error.message}</pre>
      </div>
    </Document>
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <div className="error-container">
        <h1>
          {caught.status} {caught.statusText}
        </h1>
      </div>
    </Document>
  );
}
