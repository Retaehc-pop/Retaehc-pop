/*
  Warnings:

  - You are about to drop the `Position` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Position" DROP CONSTRAINT "Position_technologyId_fkey";

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "projdesc" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "projgoal" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "projpers" TEXT NOT NULL DEFAULT '';

-- DropTable
DROP TABLE "Position";
