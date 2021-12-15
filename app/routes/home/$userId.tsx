import { LoaderFunction, useParams } from "remix";
import { Link, useLoaderData } from "remix";
import type { User } from "@prisma/client";
import { db } from "~/utils/db.server";

type LoaderData = { user: User };

export const loader: LoaderFunction = async ({ params }) => {
  const user = await db.user.findUnique({
    where: { id: params.userId },
  });
  if (!user) throw new Response("user not found", { status: 404 });
  const data: LoaderData = { user };
  return data;
};

export default function UserRoute() {
  const data = useLoaderData<LoaderData>();
  return (
    <div>
      <Link to=".">{data.user.userName} </Link>
    </div>
  );
}

export function ErrorBoundary() {
  const { userId } = useParams();
  return (
    <div className="error-container">{`There was an error loading by the id ${userId}. Sorry.`}</div>
  );
}
