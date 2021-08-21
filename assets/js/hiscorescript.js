var nameInputEl = document.querySelector("#name");
var saveButtonEl = document.querySelector("#save");
var formEl = document.querySelector(".input-group");
var userNameEl = document.querySelector("#score-name");

// renderLastRegistered();

function displayMessage(type, message) {
  userNameEl.textContent = message;
}

function renderLastRegistered() {
  // TODO: Retrieve the last email and password and render it to the page
}

saveButtonEl.addEventListener("click", function (event) {
  event.preventDefault();

  var hiScore = {
    hiScore: score.value,
  };
  localStorage.setItem("hiScore", JSON.stringify(hiScore));
  console.log("hellow");

  var userName = document.querySelector("#name").value;
  console.log(userName);

  if (userName === "") {
    displayMessage("error", "must enter at least one initial");

    displayMessage("success", "Thank you for playing!");

    // TODO: Save email and password to localStorage and render the last registered user
    localStorage.setItem("userName", JSON.stringify(userName));
  }
});
