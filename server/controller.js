const goals = require('./db.json');
let globalId = 3

module.exports = {
    getGoals: (req, res) => res.status(200).send(goals), 
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req,res) => {
        const fortunes = ["A good friendship is often more important than a passionate romance","A fresh start will put you on your way.", "All your hard work will soon pay off.", "A pleasant surprise is waiting for you.", "A truly rich life contains love and art in abundance."];
    
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune)
    },
    createGoal: (req, res) => {
        const { goal } = req.body;
        const newGoal ={
            id:globalId,
            goal,
        };
        console.log("Creating goal card for:", newGoal.id); //leaving these in so you can see the bug at when you try to any of the 3 top ones after adding a few.
    
        goals.push(newGoal);
        res.status(200).send(goals);
        globalId++
    },
    deleteGoal: (req,res) => {
        const id = req.params.id
        let index = goals.findIndex(element => element.id === parseInt(id));
        console.log("Deleting goal with ID:", id); //leaving these in so you can see the bug at when you try to any of the 3 top ones after adding a few.
        goals.splice(index, 1);
        res.status(200).send(goals);
    }
};