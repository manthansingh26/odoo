const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const email = 'admin@rentflow.com';
  
  const user = await prisma.user.findUnique({ where: { email } });
  
  if (!user) {
    console.log(`User ${email} does not exist in the database.`);
    return;
  }

  // Safely delete dependent records first to avoid foreign key constraints
  await prisma.cartItem.deleteMany({ where: { cart: { userId: user.id } } }).catch(() => {});
  await prisma.cart.deleteMany({ where: { userId: user.id } }).catch(() => {});
  await prisma.couponUsage.deleteMany({ where: { userId: user.id } }).catch(() => {});
  await prisma.orderItem.deleteMany({ where: { order: { userId: user.id } } }).catch(() => {});
  await prisma.invoice.deleteMany({ where: { order: { userId: user.id } } }).catch(() => {});
  await prisma.order.deleteMany({ where: { userId: user.id } }).catch(() => {});
  
  // Delete the user
  await prisma.user.delete({ where: { email } });
  console.log(`✅ Successfully deleted user: ${email}`);
}

main()
  .catch((e) => {
    console.error('❌ Failed to delete user:', e.message);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
