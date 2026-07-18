const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

async function main() {
  const email = 'aryansondharva25@gmail.com';
  const password = 'admin123';
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.upsert({
    where: { email },
    update: { role: 'ADMIN', password: hashedPassword },
    create: {
      name: 'Aryan Sondharva',
      email,
      password: hashedPassword,
      role: 'ADMIN',
      companyName: 'RentFlow HQ'
    }
  });

  console.log('✅ Admin user ready!');
  console.log('   Email   :', user.email);
  console.log('   Role    :', user.role);
  console.log('   Password: admin123');
}

main()
  .catch((e) => { console.error('❌ Error:', e.message); process.exit(1); })
  .finally(() => prisma.$disconnect());
