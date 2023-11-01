const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const form = document.querySelector("form");
const goalsContainer = document.querySelector("#goals-container");

const getCompliment = () => {
    axios.get(`http://localhost:4000/api/compliment`)
    .then(res => {
        const data = res.data;
        alert(data);
    });
};

const getFortune = () => {
    axios.get(`http://localhost:4000/api/fortune`)
    .then(res => {
        const data = res.data;
        alert(data); 
    });
};

const baseURL = `http://localhost:4000/api/goals`;
const goalsCallback = ({data: goals}) => showGoals(goals);
const getAllGoals = () => axios.get(`${baseURL}`).then(goalsCallback)
const createGoal = body => axios.post(`${baseURL}`, body).then(getAllGoals());
const deleteGoal = id => axios.delete(`${baseURL}/${id}`).then(getAllGoals());


//Submit Handler
const submitHandler = (e) => {
    e.preventDefault();
    
    let newGoal = document.querySelector("#goal");
    
    let bodyObj = {
        goal: newGoal.value,
    };
    
    createGoal(bodyObj).then(() => getAllGoals());

    newGoal.value = '';
};


const createGoalCard = (goal) => {
    const goalCard = document.createElement("div");
    goalCard.classList.add('goal-card');
    
    goalCard.innerHTML = 
        `<p>${goal.goal}
            <button 
            onclick="deleteGoal(${goal.id})">delete
            </button>
        </p>`        
    
    goalsContainer.appendChild(goalCard)
}

const showGoals = arr => {
    goalsContainer.innerHTML = ``;
    for(let i = 0; i < arr.length; i++){
        createGoalCard(arr[i]);
    }
};

complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune);
form.addEventListener('submit', submitHandler);

getAllGoals();