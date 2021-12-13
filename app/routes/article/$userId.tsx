import type { LoaderFunction } from "remix";
import { Link, useLoaderData } from "remix";
import type { User } from "@prisma/client";
import { db } from "~/utils/db.server";

type LoaderData = { user: User };

export const loader: LoaderFunction = async ({ params }) => {
  const user = await db.user.findUnique({
    where: { id: params.userId },
  });
  if (!user) throw new Error("Joke not found");
  const data: LoaderData = { user };
  return data;
};

export default function JokeRoute() {
  const data = useLoaderData<LoaderData>();

  return (
    <div>
      <Link to=".">{data.user.userName}</Link>
    </div>
  );
}
