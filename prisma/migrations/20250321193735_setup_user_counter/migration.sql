-- CreateTable
CREATE TABLE "Visitor" (
    "ip" TEXT NOT NULL,
    "lastSeen" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Visitor_pkey" PRIMARY KEY ("ip")
);
