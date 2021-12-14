import { LoaderFunction, useParams } from "remix";
import { Link, useLoaderData } from "remix";
import type { User } from "@prisma/client";
import { db } from "~/utils/db.server";
import Profile from "../profile";

type LoaderData = { user: User };

export const loader: LoaderFunction = async ({ params }) => {
  const user = await db.user.findUnique({
    where: { userName: params.userUserName },
  });
  if (!user) throw new Error("user not found");
  const data: LoaderData = { user };
  return data;
};

export default function UserProfileRoute() {
  const data = useLoaderData<LoaderData>();
  return (
    <Profile>
      <h4>{data.user.userName}</h4>
    </Profile>
  );
}

export function ErrorBoundary() {
  const { userUserName } = useParams();
  return (
    <div className="error-container">{`There was an error loading by the id ${userUserName}. Sorry.`}</div>
  );
}
