// prevents multiple unecessary connections
//only in dev mode

import { PrismaClient } from '../app/generated/prisma'

const prismaClientSingleton = () => {
    return new PrismaClient()
}

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma