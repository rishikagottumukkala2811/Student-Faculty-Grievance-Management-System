import express from "express";
import { db } from "./db";
const app = express();

app.use(express.json());



app.get("/api/departments",async(req,res)=>{
    try{
        const [departments] = await db.query(
        "select * from departments"
    );
    res.json(departments);
    }catch(error){
        console.log(error);
        res.status(500).json({
            message:"Failed to fetch departments"
        })
    }
    
})
app.listen(5000,()=>{
    console.log("Server runnig on port 5000");
    console.log("Database module imported:", !!db);
})

app.get("/",(req,res)=>{
    res.send("App working");
});

app.get("/api/health",(req,res)=>{
    res.status(200).json({
        success:true,
        message:"system is healhty"
    })
});