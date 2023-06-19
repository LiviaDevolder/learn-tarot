/*
  Warnings:

  - You are about to drop the `_CardToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `deck_id` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_CardToUser" DROP CONSTRAINT "_CardToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_CardToUser" DROP CONSTRAINT "_CardToUser_B_fkey";

-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "deck_id" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT;

-- DropTable
DROP TABLE "_CardToUser";

-- CreateTable
CREATE TABLE "Deck" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Deck_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_deck_id_fkey" FOREIGN KEY ("deck_id") REFERENCES "Deck"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
