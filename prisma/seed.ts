import { PrismaClient } from "@prisma/client";
const prismaDB = new PrismaClient();

async function seed() {
  await Promise.all(
  getUsers().map(user => {
    return prismaDB.user.create({ data: user });
    })
  );
}



seed();

function getUsers() {
  return [
    {
      id: "jndsn",
      userName: "Mohammad Salem",
      title: "Remix Framework",
      bio: "talala",
      description:
        "Remix is a full stack web framework that lets you focus on the user interface and work back through web fundamentals to deliver a fast, slick, and resilient user experience. People are gonna love using your stuff.",
      tags: "Programming",
    },
    {
      id: "jnassddsn",
      userName: "Sana Mohammad",
      title: "Remix",
      bio: "trammmmm",
      description:
        "Remix is a full stack web framework that lets you focus on the user interface and work back through web fundamentals to deliver a fast, slick, and resilient user experience. People are gonna love using your stuff.",
      tags: "Programming",
    },
    {
      id: "uhuhhu",
      userName: "Remas Samer",
      title: "Framework",
      bio: "tarara",
      description:
        "Remix is a full stack web framework that lets you focus on the user interface and work back through web fundamentals to deliver a fast, slick, and resilient user experience. People are gonna love using your stuff.",
      tags: "Programming",
    },
  ];
}
