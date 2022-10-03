/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Community` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Community_name_key";

-- CreateIndex
CREATE UNIQUE INDEX "Community_slug_key" ON "Community"("slug");
