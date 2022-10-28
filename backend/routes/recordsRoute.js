import { Router } from "express";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


const route = Router();

//Get records
route.get("/", (req, res) => {

    prisma.record.findMany({
        select: {
            id: true,
            time: true
        }
    })
    .then(times => res.json(times))
})

//Post record
route.post("/", (req, res) => {

    prisma.record.create({
        data: {
            time: req.body.time
        }
    })
    .then(data => res.json(data))
})

//Delete record
route.delete("/:id", async (req, res) => {

    await prisma.record.delete({
        where:{
            id: parseInt(req.params.id)
        }
    })
    res.sendStatus(204)
})

export default route;