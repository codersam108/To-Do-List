import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {MongoClient} from 'mongodb';
const uri="mongodb://localhost:27017";
const client=new MongoClient(uri);
const app=express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
async function connectDB()
{
    await client.connect();
    console.log("Connected to MongoDB");
}
    connectDB();  

app.get("/",(req,res)=>{
    res.send("Hello world");
})

app.post("/tasks",async (req,res)=>{
    try{
        const task=req.body;
        const result=await client.db("toDoList").collection("tasks").insertOne(task);
        res.status(201).json({message:"Task Added successfully",taskId:result.insertedId})
    }
    catch(error)
    {
        console.error("Error saving task",error);
        res.status(500).json({message:"Error saving task"});
    }
    
   
    
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});
