import express from 'express';
const app=express();
app.get("/",(req,res)=>{
    res.send("Hello world");
})
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});
app.get("/tasks",(req,res)=>{
    res.send("Here are your tasks");
    
});
