-- CreateEnum
CREATE TYPE "Type" AS ENUM ('Competition', 'Personal', 'Research');

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "type" "Type" NOT NULL DEFAULT 'Personal';
