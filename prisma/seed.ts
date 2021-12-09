import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getUsers().map((user) => {
      return db.user.create({ data: user });
    })
  );
}

seed();

function getUsers() {
  return [
    {
      id :"jndsn",
      userName: "Mohammad Salem",
    },
    {
      id :"jnassddsn",
      userName: "Sana Mohammad",
    },
    {
      id :"uhuhhu",
      userName: "Remas Samer",
    },
  ];
}
