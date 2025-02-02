import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {MongoClient,ObjectId} from 'mongodb';
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

async function connectDB() {
    await client.connect();
    console.log("Connected to MongoDB");
}
connectDB();

app.post("/tasks", async (req, res) => {
    try {
        const task = { ...req.body, completed: false };
        const result = await client.db("toDoList").collection("tasks").insertOne(task);
        res.status(201).json({ message: "Task Added successfully", taskId: result.insertedId });
    } catch (error) {
        console.error("Error saving task", error);
        res.status(500).json({ message: "Error saving task" });
    }
});

app.get("/tasks", async (req, res) => {
    try {
        const result = await client.db("toDoList").collection("tasks").find({ completed: false }).toArray();
        res.status(200).json(result);
    } catch (error) {
        console.error("Error fetching tasks", error);
        res.status(500).json({ message: "Error fetching tasks" });
    }
});

app.put("/tasks/:id/complete", async (req, res) => {
    try {
        const taskId = req.params.id;
        const result = await client.db("toDoList").collection("tasks").updateOne(
            { _id: new ObjectId(taskId) },
            { $set: { completed: true } }
        );
        if (result.modifiedCount > 0) {
            res.status(200).json({ message: "Task marked as completed" });
        } else {
            res.status(404).json({ message: "Task not found" });
        }
    } catch (error) {
        console.error("Error updating task", error);
        res.status(500).json({ message: "Error updating task" });
    }
});

app.get("/tasks/completed", async (req, res) => {
    try {
        const result = await client.db("toDoList").collection("tasks").find({ completed: true }).toArray();
        res.status(200).json(result);
    } catch (error) {
        console.error("Error fetching completed tasks", error);
        res.status(500).json({ message: "Error fetching completed tasks" });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});