import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const ip = getRequestIP(event) || 'unknown'
  await prisma.visitLog.create({ data: { ip } })
  const total = await prisma.visitLog.count()
  return { visits: total }
})
