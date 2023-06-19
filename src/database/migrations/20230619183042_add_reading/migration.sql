-- CreateTable
CREATE TABLE "Reading" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "meanings" JSONB NOT NULL,
    "deck_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Reading_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Reading" ADD CONSTRAINT "Reading_deck_id_fkey" FOREIGN KEY ("deck_id") REFERENCES "Deck"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reading" ADD CONSTRAINT "Reading_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
