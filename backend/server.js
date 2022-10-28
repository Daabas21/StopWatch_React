import express from 'express';
import recordsRoute from './routes/recordsRoute.js'
import cors from 'cors'

const server = express();
const PORT = 5000;

server.use(express.json())

const corsConfig= {
    origin: "http://localhost:3000"
}

server.use(cors(corsConfig))

server.use('/api/records', recordsRoute)

server.use('/', (req, res) => res.json({message: "Server under const"}))

server.listen(PORT, () => console.log(`server started on posrt ${PORT}`))