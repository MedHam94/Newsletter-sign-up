// let email = document.querySelector("button").value;
// let errorMsg = document.querySelector("#errMsg");
function validateEmail() {
  let email = document.getElementById("email");

  const errMsg = document.getElementById("errMsg");
  if (!email.checkValidity()) {
    errMsg.style.display = "block";
    email.style.background = "#ffe8e6";
    email.style.color = "#ff0000";
    email.style.borderColor = "red";
  } else {
    errMsg.style.display = "none";
    email.style.background = "";
    email.style.color = "";
    email.style.borderColor = "";
  }
}
