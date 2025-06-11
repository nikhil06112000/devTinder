const express = require("express");
const app = express();


app.get("/user",(req,res) =>{
    res.send({firstName:'nikhil', lastName:"yadav"})
})

app.post("/user",(req,res) =>{
    res.send("Data is succesfully saved to the database");
})

app.use("/hello", (req,res) =>{
     res.send("hello nikhil");
})

app.listen(5000, () =>{
    console.log(" is successfully running on port");
});
