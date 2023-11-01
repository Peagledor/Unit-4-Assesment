const goals = require('./db.json');
let globalId = 1

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
            goal
        };
    
        goals.push(newGoal);
        console.log(goals)
        res.status(200).send(goals);
        globalId++
    },
    deleteGoal: (req,res) => {
        let index = goals.findIndex(elem => elem.id === +req.params.id);
        goals.splice(index, 1);
        res.status(200).send(movies);
    }
};