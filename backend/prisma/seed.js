import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const seed = async () => {

    await prisma.record.deleteMany();

    await prisma.record.create({
        data:{
            time: "00:01:02"
        }
    })
    
    await prisma.record.create({
        data:{
            time: "00:11:23"
        }
    })
}

seed()

export default seed;