import express, { json } from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import joi from 'joi';
dotenv.config();




const server = express();
server.use(cors());
server.use(json());npm 

const mongoClient = new MongoClient(process.env.DATABASE_URL);
let db;


try {
    await mongoClient.connect()
    db = mongoClient.db()
} catch (error) {
    console.error(error)
    console.log('nao conseguiu se conectar ao servidor')

}



//endpoints

server.post('/', async (req, res) => {
    
});

server.get('/', async (req, res) => {
   

});

server.post('/', async (req, res) => {
    

});

server.get('/', async (req, res) => {


});

server.post('/', async (req, res) => {

});



const PORT = 5000

server.listen(PORT, () => {
    console.log("Rodando")
});

  //fuser -k 4000/tcp//