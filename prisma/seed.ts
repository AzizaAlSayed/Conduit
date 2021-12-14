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
      id:"jndsn",
      userName: "Mohammad Salem",
      comment:"it is me"
    },
    {
      id:"jnassddsn",
      userName: "Sana Mohammad",
      comment:"it is me"
    },
    {
      id:"uhuhhu",
      userName: "Remas Samer",
      comment:"it is me"
    },
  ];
}
