/*
  Warnings:

  - You are about to drop the column `userId` on the `Card` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Card" DROP CONSTRAINT "Card_userId_fkey";

-- AlterTable
ALTER TABLE "Card" DROP COLUMN "userId";

-- CreateTable
CREATE TABLE "Notes" (
    "id" TEXT NOT NULL,
    "first_analysis" TEXT,
    "element_meaning" TEXT,
    "card_meaning" TEXT,
    "love_meaning" TEXT,
    "work_meaning" TEXT,
    "health_meaning" TEXT,
    "specific_relation" TEXT,
    "percentage" INTEGER NOT NULL DEFAULT 0,
    "card_id" TEXT NOT NULL,

    CONSTRAINT "Notes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Notes" ADD CONSTRAINT "Notes_card_id_fkey" FOREIGN KEY ("card_id") REFERENCES "Card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
