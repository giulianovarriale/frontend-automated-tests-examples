import { PrismaClient } from "@/app/generated/prisma";

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  // @ts-expect-error ignore error
  if (!global.prisma) {
    // @ts-expect-error ignore error
    global.prisma = new PrismaClient();
  }

  // @ts-expect-error ignore error
  prisma = global.prisma;
}

export default prisma;
