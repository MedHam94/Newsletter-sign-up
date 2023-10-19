// let email = document.querySelector("button").value;
// let errorMsg = document.querySelector("#errMsg");

function validateEmail() {
  let email = document.getElementById("email");

  const errMsg = document.getElementById("errMsg");

  if (!email.checkValidity()) {
    errMsg.style.display = "block";
    email.style.background = "#ffe8e6";
    email.style.color = "hsl(4, 100%, 67%)";
    email.style.borderColor = "hsl(4, 100%, 67%)";
  } else {
    errMsg.style.display = "none";
    email.style.background = "";
    email.style.color = "";
    email.style.borderColor = "";
  }
}
