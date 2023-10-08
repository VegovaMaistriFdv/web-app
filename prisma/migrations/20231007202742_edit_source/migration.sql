-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Fire" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "source" TEXT,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "latitude" INTEGER NOT NULL,
    "longitude" INTEGER NOT NULL
);
INSERT INTO "new_Fire" ("id", "latitude", "longitude", "source", "timestamp") SELECT "id", "latitude", "longitude", "source", "timestamp" FROM "Fire";
DROP TABLE "Fire";
ALTER TABLE "new_Fire" RENAME TO "Fire";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
