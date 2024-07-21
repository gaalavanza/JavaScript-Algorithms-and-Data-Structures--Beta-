const userInput = document.getElementById("user-input");
const resultsDiv = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const checkUserInput = () => {
  if (!userInput.value) {
    alert("Please provide a phone number");
  }
  else {
    cleanUserInput(userInput.value);
  }
}

const cleanUserInput = (str) => {
  const cleanedUserInput = str.replace(/[ ]/g, ""); //g matches all coincidences
validateNumber(cleanedUserInput);
}

const phonePattern = /^1?((\(\d{3}\))|\d{3})\-?\d{3}\-?\d{4}$/;
const validateNumber = (num) => {
  const isValid = phonePattern.test(num);
  resultsDiv.classList.add("border");
  if (isValid) {
    resultsDiv.innerHTML += `<p class="validNumber">Valid US number: ${userInput.value}<p>`
  }
  else {
    resultsDiv.innerHTML += `<p class="inValidNumber">Invalid US number: ${userInput.value}<p>`
  }
}

const clearResults = ( ) => {
    resultsDiv.innerHTML = "";
    resultsDiv.classList.remove("border");
}

checkBtn.addEventListener("click", checkUserInput); 

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});

clearBtn.addEventListener("click", clearResults);