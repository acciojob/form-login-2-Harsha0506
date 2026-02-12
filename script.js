let form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

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
