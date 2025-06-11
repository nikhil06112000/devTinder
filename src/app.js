const express = require("express");
const app = express();


app.use((req,res) =>{
    res.send("Hii from the server")
});
app.listen(5000, () =>{
    console.log(" is successfully running on port");
});
