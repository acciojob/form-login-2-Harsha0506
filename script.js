//your JS code here. If required.
let submit = document.getElementById("button");

submit.addEventListener("click", function () {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;

  alert(
    "First Name: " + firstName +
    " Last Name: " + lastName +
    " Phone Number: " + phone +
    " Email ID: " + email
  );
});

