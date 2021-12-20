import { LoaderFunction, useParams } from "remix";
import { Link, useLoaderData } from "remix";
import type { Article } from "@prisma/client";
import { db } from "~/utils/db.server";

type LoaderData = { article: Article };

export const loader: LoaderFunction = async ({ params }) => {
  const article = await db.article.findUnique({
    where: { articleid: params.articleId },
  });
  if (!article) throw new Error("article not found");
  const data: LoaderData = { article };
  return data;
};

export default function ArticleRoute() {
  const data = useLoaderData<LoaderData>();
  return (
    <div>
      <Link to=".">{data.article.comment} </Link>
    </div>
  );
}

export function ErrorBoundary() {
  const { articleId } = useParams();
  return (
    <div className="error-container">{`There was an error loading by the id ${articleId}. Sorry.`}</div>
  );
}
