import { Client } from "../models/Client.js"

export const getClients =  async (req, res) => {
    try {
        const clients = await Client.findAll()
        return res.json(clients)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const addClient =  async (req, res) => {
    const { name, lastname, email, online } = req.body
    try {
        const newClient = await Client.create({
            name,
            lastname,
            email,
            online
        })
        return res.json(newClient)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const updateClient =  async (req, res) => {
    const {id} = req.params
    const {name, lastname, email, online} = req.body
    try {
        const client = await Client.findByPk(id)
        client.name = name
        client.lastname = lastname
        client.email = email
        client.online = online
        await client.save()
        return res.json(client)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const deleteClient =  async (req, res) => {
    const {id} = req.params
    try {
        const client = await Client.findByPk(id)
        await client.destroy()
        res.json({message: "borrado correctamente"})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}