import express from "express";
import clientsRoutes from './routes/client.routes.js'

const app = express()

//middlewares 
app.use(express.json())
app.use(clientsRoutes)

export default app;