-- CreateTable
CREATE TABLE "Roster" (
    "id" TEXT NOT NULL,
    "weekNum" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "assignedRooms" INTEGER[],
    "DutyRooms" INTEGER[],

    CONSTRAINT "Roster_pkey" PRIMARY KEY ("id")
);
