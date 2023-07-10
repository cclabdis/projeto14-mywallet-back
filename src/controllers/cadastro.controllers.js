import { ObjectId } from "mongodb";
import { db } from "../database/database.connection.js";
import bcrypt from "bcrypt";

import { v4 as uuid } from "uuid";


export async function signUp(req, res) {
    const { name, email, password } = req.body

    try {
        const userLogin = await db.collection("users").findOne({ email })
        if (userLogin) return res.status(409).send("Unauthorized =>  E-mail já foi usado!")

        const hash = bcrypt.hashSync(password, 2)

        await db.collection("users").insertOne({ name, email, password: hash })
        res.status(201).send("ok => Usuário criado")

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function login(req, res) {
    const { email, password } = req.body

    try {

        //verificar se valida o email e a senha
        const useremail = await db.collection("users").findOne({ email })
        if (!useremail) return res.status(404).send("Unauthorized =>  E-mail não cadastrado")

        const passwordCorrect = bcrypt.compareSync(password, useremail.password)
        if (!passwordCorrect) return res.status(401).send("Unauthorized => Senha incorreta")

        const token = uuid()
        await db.collection("sessions").insertOne({ token, userId: useremail._id })
        res.send({ token, userName: useremail.name })
    } catch (err) {
        res.status(500).send(err.message)
    }
}



//db

