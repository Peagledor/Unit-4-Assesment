const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getGoals, getCompliment, getFortune, createGoal } = require('./controller');

app.get(`/api/goals`, getGoals);
app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/goals", createGoal);

app.listen(4000, () => console.log("Server running on 4000"));
