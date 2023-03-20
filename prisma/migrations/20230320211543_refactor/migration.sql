/*
  Warnings:

  - You are about to drop the column `duration` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `teamSize` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "duration",
DROP COLUMN "teamSize",
DROP COLUMN "type",
DROP COLUMN "year",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "source" TEXT,
ALTER COLUMN "image" DROP NOT NULL,
ALTER COLUMN "image" DROP DEFAULT,
ALTER COLUMN "url" DROP NOT NULL,
ALTER COLUMN "url" DROP DEFAULT;

-- DropEnum
DROP TYPE "Type";

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProjectToTag" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_ProjectToTag_AB_unique" ON "_ProjectToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_ProjectToTag_B_index" ON "_ProjectToTag"("B");

-- AddForeignKey
ALTER TABLE "_ProjectToTag" ADD CONSTRAINT "_ProjectToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToTag" ADD CONSTRAINT "_ProjectToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
