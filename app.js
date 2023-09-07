const express = require ('express')
const mysql = require ('mysql')
const path = require ('path')
const session = require ('express-session')
require ('dotenv').config()

const app = express()

const dbConfig={
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
}

const conexion = mysql.createConnection(dbConfig)

conexion.connect((error)=>{
    if(error){
        console.log('error al conectar' + error)
    } else{
        console.log('conexion exitosa')
    }
})

app.get('/',(res,req)=>{
    res.send('<h1>Hola mundo</h1>')
})

app.listen(3009,()=>{
    console.log ('el servidor se esta ejecutando')
})