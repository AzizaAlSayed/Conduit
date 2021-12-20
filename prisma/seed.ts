import { PrismaClient } from "@prisma/client";
const PrismaDb = new PrismaClient();

async function seed() {
  const kody = await PrismaDb.user.create({
    data: {
      username: "kody",
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
      comment: "this is first comment",
    },
    {
      comment: "this is second comment",
    },
    {
      comment: "this is third comment",
    },
  ];
}
