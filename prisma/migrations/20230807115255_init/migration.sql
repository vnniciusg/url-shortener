-- CreateTable
CREATE TABLE "UrlShorter" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "urlShorter" TEXT NOT NULL,

    CONSTRAINT "UrlShorter_pkey" PRIMARY KEY ("id")
);
