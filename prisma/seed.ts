import { PrismaClient } from "@prisma/client";
const PrismaDb = new PrismaClient();

async function seed() {
  const kody = await PrismaDb.user.create({
    data: {
      username: "kody",
      password: "$2b$10$K7L1OJ45/4Y2nIvhRVpCe.FSmhDdWoXehVzJptJ/op0lSsvqNu/1u",
      email: "kody@gmail.com",
    },
  });
  await Promise.all(
    getArticles().map((article) => {
      const data = { writerid: kody.userid, ...article };
      return PrismaDb.article.create({ data });
    })
  );
}
seed();

function getArticles() {
  return [
    {
      title: "First Tilte",
      bio: "this is a bio",
    },
    { title: "Second Tilte", bio: "this is a bio" },
    {
      title: "Third Tilte",
      bio: "this is a bio",
    },
  ];
}
