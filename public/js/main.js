function validateEmail() {
  let email = document.getElementById("email");

  const errMsg = document.getElementById("errMsg");

  if (email.checkValidity()) {
    fetch("/public/success.html")
      .then((res) => res.text())
      .then((html) => {
        document.open();
        document.write(html);
        document.close();
      });
  } else {
    errMsg.style.display = "block";
    email.style.background = "#ffe8e6";
    email.style.color = "hsl(4, 100%, 67%)";
    email.style.borderColor = "hsl(4, 100%, 67%)";
  }
}
