-- CreateTable
CREATE TABLE "record" (
    "id" SERIAL NOT NULL,
    "time" TEXT NOT NULL,

    CONSTRAINT "record_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "use" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lastname" TEXT,

    CONSTRAINT "use_pkey" PRIMARY KEY ("id")
);
