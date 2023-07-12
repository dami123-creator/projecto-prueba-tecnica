import { Router } from "express";
import { getClients, addClient, updateClient, deleteClient } from "../controllers/client.controllers.js";
const router = Router();

router.get('/clients', getClients)
router.post('/clients', addClient)
router.put('/clients/:id', updateClient)
router.delete('/clients/:id', deleteClient)

export default router