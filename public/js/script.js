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

const voteButtonClicked = (key, voteCount) => {
  console.log("button clicked!")
  console.log(key)
  // TODO: increment vote count in db
  firebase.database().ref(key).update({
    votes: voteCount + 1
  })
}

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
      let voteButton = document.createElement("button");
      voteButton.setAttribute("id", key);
      voteButton.innerHTML = "Upvote";
      voteButton.addEventListener("click", () => {
        voteButtonClicked(key, voteCount);
      });
      questionContainer.appendChild(topicSelector);
      questionContainer.appendChild(questionSelector);
      questionContainer.appendChild(voteSelector);
      questionContainer.appendChild(voteButton);
      questionListSelector.appendChild(questionContainer);
      topicSelector.innerHTML = topicText;
      questionSelector.innerHTML = questionText;
      voteSelector.innerHTML = voteCount;
    }
})