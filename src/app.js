const express = require("express");
const app = express();


app.use("/user", (req,res, next) =>{
    // res.send("handling 1 rourter");
    console.log("Hnalding router 1");
    next();
},
(req,res, next) =>{
    
     console.log("2 handler print");
     next();
},
(req,res) =>{
    res.send("3 handler")
}
);



app.listen(5000, () =>{
    console.log(" is successfully running on port");
});

