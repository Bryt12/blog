/*
  Warnings:

  - Added the required column `posted` to the `Piece` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Piece" ADD COLUMN     "posted" TIMESTAMP(3) NOT NULL;
