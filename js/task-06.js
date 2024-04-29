const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", function () {
  const enteredLength = this.value.length;
  const expectedLength = parseInt(this.getAttribute("data-length"));

  if (enteredLength === expectedLength) {
    this.classList.remove("invalid");
    this.classList.add("valid");
  } else {
    this.classList.remove("valid");
    this.classList.add("invalid");
  }
});
