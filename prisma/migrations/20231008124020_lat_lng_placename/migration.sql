/*
  Warnings:

  - You are about to drop the column `latitude` on the `Fire` table. All the data in the column will be lost.
  - You are about to drop the column `longitude` on the `Fire` table. All the data in the column will be lost.
  - Added the required column `lat` to the `Fire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lng` to the `Fire` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Fire" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "source" TEXT NOT NULL,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lat" TEXT NOT NULL,
    "lng" TEXT NOT NULL,
    "placeName" TEXT
);
INSERT INTO "new_Fire" ("id", "source", "timestamp") SELECT "id", "source", "timestamp" FROM "Fire";
DROP TABLE "Fire";
ALTER TABLE "new_Fire" RENAME TO "Fire";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
