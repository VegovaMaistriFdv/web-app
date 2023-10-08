/*
  Warnings:

  - Made the column `source` on table `Fire` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Fire" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "source" TEXT NOT NULL,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL
);
INSERT INTO "new_Fire" ("id", "latitude", "longitude", "source", "timestamp") SELECT "id", "latitude", "longitude", "source", "timestamp" FROM "Fire";
DROP TABLE "Fire";
ALTER TABLE "new_Fire" RENAME TO "Fire";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
