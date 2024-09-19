const http = require("http")
const express = require("express")
const app = express()

const dados = require("./db/faker")

const server = http.createServer(app)

app.use(express.json())

app.get("/", (req, res)=> {
  console.log(req.body)
  res.send("Olá mundo!")
})

server.listen(4000, ()=> { 
  console.log('Teste: ', dados.users)
  console.log("Olá mundo!")
})
  