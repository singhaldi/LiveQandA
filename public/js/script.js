const questionListSelector = document.querySelector("#questionList");
const inputSelector = document.querySelector("#question");
const topicSelector = document.querySelector("#topic");
const submitButton = document.querySelector("#submit");

let questionList = [];

const onSubmit = () => {
  console.log(inputSelector.value);
  inputSelector.innerHTML = "";
  topicSelector.innerHTML = "";
  const payload = {
    topic: topicSelector.value,
    question: inputSelector.value
  };
  console.log(payload);
  firebase
    .database()
    .ref()
    .push(payload);
};

questionList.forEach(question => {
  console.log("function active");
  let voteCount = 0;
  let questionContainer = document.createElement("div");
  questionContainer.classList.add("columns");
  let questionSelector = document.createElement("div");
  questionSelector.classList.add("column");
  questionSelector.classList.add("is");
  let voteSelector = document.createElement("div");
  voteSelector.classList.add("column");
  questionContainer.appendChild(questionSelector);
  questionContainer.appendChild(voteSelector);
  questionListSelector.appendChild(questionContainer);
  questionSelector.innerHTML = question;
  voteSelector.innerHTML = 0;
});

