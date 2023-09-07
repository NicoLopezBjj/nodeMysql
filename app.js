const express = require ('express')
const mysql = require ('mysql')
const path = require ('path')
const session = require ('express-session')
require ('dotenv').config()

const app = express()

const dbConfig={
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'database'
}

const conexion = mysql.createConnection(dbConfig)



app.get('/',(res,req)=>{
    res.send('<h1>Hola mundo</h1>')
})

app.listen(3009,()=>{
    console.log ('el servidor se esta ejecutando')
})