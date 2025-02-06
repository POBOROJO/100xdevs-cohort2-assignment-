import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({
    data: {
      email: 'parijat@gmail.com',
      name: 'parijat',
    },
  })
  console.log(user)
}

async function testConnection() {
  try {
    await prisma.$connect()
    console.log('Successfully connected to the database')
    await prisma.$disconnect()
  } catch (error) {
    console.error('Failed to connect:', error)
    await prisma.$disconnect()
    process.exit(1)
  }
}

testConnection()


main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })