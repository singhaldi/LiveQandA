const questionListSelector = document.querySelector("#questionList");
const inputSelector = document.querySelector("#question");
const topicSelector = document.querySelector("#topic");
const submitButton = document.querySelector("#submit");

let questionList = [];

const onSubmit = () => {
  console.log(inputSelector.value);
  const payload = {
    topic: topicSelector.value,
    question: inputSelector.value,
    votes: 0,
  };
  console.log(payload);
  firebase
    .database()
    .ref()
    .push(payload);
  inputSelector.value = "";
  topicSelector.value = "";

};

const questionRef = firebase.database().ref();
questionRef.on('value', (snapshot) => {
    while (questionListSelector.firstChild) {
      questionListSelector.removeChild(questionListSelector.firstChild)
    }
    const data = snapshot.val();
    for (let key in data) {
      const topicText = data[key].topic;
      const questionText = data[key].question;
      const voteCount = data[key].votes;
      
      let questionContainer = document.createElement("div");
      questionContainer.classList.add("columns");
      let topicSelector = document.createElement("div");
      topicSelector.classList.add("column");
      let questionSelector = document.createElement("div");
      questionSelector.classList.add("column");
      let voteSelector = document.createElement("div");
      voteSelector.classList.add("column");
      questionContainer.appendChild(topicSelector);
      questionContainer.appendChild(questionSelector);
      questionContainer.appendChild(voteSelector);
      questionListSelector.appendChild(questionContainer);
      topicSelector.innerHTML = topicText;
      questionSelector.innerHTML = questionText;
      voteSelector.innerHTML = voteCount;
    }
})