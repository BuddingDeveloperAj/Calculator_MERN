const express = require("express")
const app = express()

app.get("/home", (req, res) => {
    return res.send("yes this is working")
})

const port = 8000

app.listen(port, console.log("app is running")) 