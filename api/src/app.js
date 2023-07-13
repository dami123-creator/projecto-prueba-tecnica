import express from "express";
import clientsRoutes from './routes/client.routes.js'
import cors from 'cors'

const app = express()

//middlewares 
app.use(cors())
app.use(express.json())
app.use(clientsRoutes)

export default app;