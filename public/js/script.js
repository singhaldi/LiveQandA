const questionListSelector = document.querySelector("#questionList");
const inputSelector = document.querySelector("#question");
const submitButton = document.querySelector("#submit");
//console.log("page loaded");
let questionList = [
  
]


const onSubmit = () => {
  console.log(inputSelector.value);
  inputSelector.innerHTML = "";
}


questionList.forEach(question => {
  console.log("function active");
  let voteCount = 0;
  let questionContainer = document.createElement("div");
  questionContainer.classList.add("columns");
  let questionSelector = document.createElement("div");
  questionSelector.classList.add("column");
  let voteSelector = document.createElement("div");
  voteSelector.classList.add("column");
  questionContainer.appendChild(questionSelector)
  questionContainer.appendChild(voteSelector)
  questionListSelector.appendChild(questionContainer);
  questionSelector.innerHTML = question;
  voteSelector.innerHTML = 0;
})

