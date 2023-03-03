/*
  Warnings:

  - You are about to drop the column `yearId` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the `Year` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `year` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_yearId_fkey";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "yearId",
ADD COLUMN     "year" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Year";
