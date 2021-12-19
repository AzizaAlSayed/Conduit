import { PrismaClient } from "@prisma/client";
const PrismaDb = new PrismaClient();

async function seed() {
  await Promise.all(
    getUsers().map((user) => {
      return PrismaDb.user.create({ data: user });
    })
  );
}

seed();

function getUsers() {
  return [
    {
      userid: "jndsn",
      userName: "Mohammad Salem",
    },
    {
      userid: "jnassddsn",
      userName: "Sana Mohammad",
    },
    {
      userid: "uhuhhu",
      userName: "Remas Samer",
    },
  ];
}

function getArticles() {
  return [{}];
}
