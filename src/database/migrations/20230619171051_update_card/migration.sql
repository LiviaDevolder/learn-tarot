/*
  Warnings:

  - You are about to drop the column `dificulty` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `elements` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `firstAnalysis` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `healthMeaning` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `loveMeaning` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `meaning` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `memory` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `upsideDown` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `workMeaning` on the `Card` table. All the data in the column will be lost.
  - Made the column `image` on table `Card` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `Card` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Card` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Card" DROP COLUMN "dificulty",
DROP COLUMN "elements",
DROP COLUMN "firstAnalysis",
DROP COLUMN "healthMeaning",
DROP COLUMN "loveMeaning",
DROP COLUMN "meaning",
DROP COLUMN "memory",
DROP COLUMN "upsideDown",
DROP COLUMN "workMeaning",
ALTER COLUMN "image" SET NOT NULL,
ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL;
