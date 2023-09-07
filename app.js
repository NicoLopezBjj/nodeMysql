const express = require ('express')
const mysql = require ('mysql')
const path = require ('path')
const session = require ('express-session')
require ('dotenv').config()

const app = express()

app.listen(3009,()=>{
    console.log ('el servidor se esta ejecutando')
})