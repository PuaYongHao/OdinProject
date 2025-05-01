const firstNameInput = document.querySelector("#first_name");
const lastNameInput = document.querySelector("#last_name");
const emailInput = document.querySelector("#email");
const phoneNumberInput = document.querySelector("#phone_number");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm_password");
const createButton = document.querySelector(".create-button");

function allFieldsAreEntered() {
  if (
    firstNameInput.value !== "" &&
    lastNameInput.value !== "" &&
    emailInput.value !== "" &&
    phoneNumberInput.value !== "" &&
    passwordInput.value !== "" &&
    confirmPasswordInput.value !== "" &&
    passwordInput.value === confirmPasswordInput.value
  ) {
    createButton.disabled = false;
  } else createButton.disabled = true;
}

function setFocus() {
  confirmPasswordInput.style.borderColor = "blue";
}

function removeFocus() {
  if (passwordInput.value === confirmPasswordInput.value)
    confirmPasswordInput.style.borderColor = "#e5e7eb";
  else confirmPasswordInput.style.borderColor = "red";
}

firstNameInput.addEventListener("input", allFieldsAreEntered);
lastNameInput.addEventListener("input", allFieldsAreEntered);
emailInput.addEventListener("input", allFieldsAreEntered);
phoneNumberInput.addEventListener("input", allFieldsAreEntered);
passwordInput.addEventListener("input", allFieldsAreEntered);

confirmPasswordInput.addEventListener("input", allFieldsAreEntered);
confirmPasswordInput.addEventListener("focus", setFocus);
confirmPasswordInput.addEventListener("focusout", removeFocus);
