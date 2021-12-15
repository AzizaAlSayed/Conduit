import { LoaderFunction, useCatch, useParams } from "remix";
import { useLoaderData } from "remix";
import type { User } from "@prisma/client";
import { db } from "~/utils/db.server";
import Profile from "../profile";

type LoaderData = { user: User };

export const loader: LoaderFunction = async ({ params }) => {
  const user = await db.user.findUnique({
    where: { userName: params.userName },
  });
  console.log(user?.userName);
  if (!user) {
    throw new Response("user not found", {
      status: 404,
    });
  }
  const data: LoaderData = { user };
  return data;
};

export default function UserProfileRoute() {
  const data = useLoaderData<LoaderData>();
  return <h4>{data.user.userName}</h4>;
}

export function CatchBoundary() {
  const caught = useCatch();
  const params = useParams();
  if (caught.status === 404) {
    return (
      <div className="error-container">
        Huh? What the heck is "{params.userName}"?
      </div>
    );
  }
  throw new Error(`Unhandled error: ${caught.status}`);
}

export function ErrorBoundary() {
  return (
    <div className="error-container">{`There was an error loading by this username. Sorry.`}</div>
  );
}
