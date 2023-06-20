import { PrismaClient } from '@prisma/client';
import { decks } from './decks';

const prisma = new PrismaClient();

async function main() {
  await prisma.deck.createMany({
    data: decks(),
    skipDuplicates: true,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());
