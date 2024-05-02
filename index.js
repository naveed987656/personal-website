const express = require("express")
const dataBase = require("./config/dbcont")
const userModel = require ("./config/usermodel")
dataBaseConnection()

const app = express()
app.use(express.json())

app.post("./register", async(req, res)=>{
    let data = new userModel(req.body)
    let result = await data.save()
    res.send(result)
})
let PORT = 8080

app.listen(PORT , (req, res)=>{
    console.log(`server is running at the port ${PORT}`)
})



