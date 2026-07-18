ALTER TABLE "Order"
ADD COLUMN "lockedTotalAmount" DECIMAL(10,2),
ADD COLUMN "priceLockedAt" TIMESTAMP(3),
ADD COLUMN "renterAcceptedAt" TIMESTAMP(3);
