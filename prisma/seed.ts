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
      userName: "Mohammad77",
      email: "mohammad@gmail.com",
      password: "lll",
    },
    {
      userName: "Sana99",
      email: "sana@gmail.com",
      password: "lll",
    },
    {
      userName: "Roua88",
      email: "roua@gmail.com",
      password: "lll",
    },
  ];
}
