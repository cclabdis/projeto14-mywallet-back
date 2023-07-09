import { ObjectId } from "mongodb";
import { db } from "../database/database.connection.js";
import bcrypt from "bcrypt";
import dayjs from "dayjs";
import { v4 as uuid } from "uuid";


export async function signUp(req, res) {
    const { name, email, password } = req.body

    try {
        const user = await db.collection("users").findOne({ email })
        if (user) return res.status(409).send("E-mail já foi usado!")

        const hash = bcrypt.hashSync(password, 2)

        await db.collection("users").insertOne({ name, email, password: hash })
        res.status(201).send("Usuário criado")

    } catch (err) {
        res.status(500).send(err.message)
    }
}


//db

