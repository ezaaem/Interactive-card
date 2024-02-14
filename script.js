document
  .getElementById("cardholder-name")
  .addEventListener("input", updateCardNamePart1);
document
  .getElementById("cardname")
  .addEventListener("input", updateCardNamePart2);

function updateCardNamePart1() {
  // Update the input field with the id 'cardname' with the value of 'cardholder-name'
  const cardholdername = document.getElementById("cardholder-name");
  const cardnameField = document.getElementById("cardname");

  if (cardnameField) {
    cardnameField.value = cardholdername.value;
  }
}

function updateCardNamePart2() {
  // Update the input field with the id 'cardholder-name' with the value of 'cardname'
  const cardholdername = document.getElementById("cardholder-name");
  const cardnameField = document.getElementById("cardname");

  if (cardholdername) {
    cardholdername.value = cardnameField.value;
  }
}

document
  .getElementById("card-number")
  .addEventListener("input", updateCardNumberPart);

function updateCardNumberPart() {
  // Update the input field with the id 'cardname' with the value of 'cardholder-name'
  const cardholdernumber = document.getElementById("card-number");
  const cardnumberField = document.getElementById("card");

  if (cardholdernumber) {
    cardnumberField.value = cardholdernumber.value;
  }
}
document
  .getElementById("exp-mm")
  .addEventListener("input", updateCardNumberPart3);

function updateCardNumberPart3() {
  // Update the input field with the id 'cardname' with the value of 'cardholder-name'
  const cardholdernumber = document.getElementById("exp-mm");
  const cardnumberField = document.getElementById("Dateofcard");

  if (cardholdernumber) {
    cardnumberField.value = cardholdernumber.value;
  }
}
document
  .getElementById("exp-yy")
  .addEventListener("input", updateCardNumberPart4);

function updateCardNumberPart4() {
  // Update the input field with the id 'cardname' with the value of 'cardholder-name'
  const cardholdernumber = document.getElementById("exp-yy");
  const cardnumberField = document.getElementById("yyofcard");

  if (cardholdernumber) {
    cardnumberField.value = cardholdernumber.value;
  }
}
document.getElementById("cvc").addEventListener("input", updateCardNumberPart5);

function updateCardNumberPart5() {
  // Update the input field with the id 'cardname' with the value of 'cardholder-name'
  const cardholdernumber = document.getElementById("cvc");
  const cardnumberField = document.getElementById("cvcofcard");

  if (cardholdernumber) {
    cardnumberField.value = cardholdernumber.value;
  }
}

const form = document.getElementById("credit-card-form");
const submitBtn = document.getElementById("submit-btn");
const thankYouMessage = document.getElementById("thank-you-message");

 
function showThankYouAndConfirmation() {
  // Hide the form and submit button
  form.style.display = "none";
  submitBtn.style.display = "none";

  // Show thank you and confirmation messages
  thankYouMessage.style.display = "grid";
}


const cardNumbermm = document.getElementById("exp-mm");
const cardNumber = document.getElementById("exp-yy");
const numberInp = document.getElementById("card-number");
const cvcInp = document.getElementById("cvc");
const cardName = document.getElementById("cardholder-name");

function handleSubmit(e) {
  e.preventDefault();
  if (!cardName.value) {
    cardName.classList.add('error');
    cardName.parentElement.classList.add("error_message")
  } else {
    cardName.classList.remove("error");
    cardName.parentElement.classList.remove("error_message");
  }
  if (!cardNumbermm.value) {
    cardNumbermm.classList.add('error');
    cardNumbermm.parentElement.classList.add("error_message")
  } else {
    cardNumbermm.classList.remove("error");
    cardNumbermm.parentElement.classList.remove("error_message");
  }
  if (!cardNumber.value) {
    cardNumber.classList.add('error');
    cardNumber.parentElement.classList.add("error_message")
  } else {
    cardNumber.classList.remove("error");
    cardNumber.parentElement.classList.remove("error_message");
  }
  if (!numberInp.value) {
    numberInp.classList.add('error')
    numberInp.parentElement.classList.add("error_message");
  } else if (numberInp.value.length < 16) {
      numberInp.classList.add("error")
  } else {
    numberInp.classList.remove("error");
    numberInp.parentElement.classList.remove("error_message");
  }
  
   
  if (!cvcInp.value) {
    cvcInp.classList.add("error")
    cvcInp.parentElement.classList.add("error_message");
  } else {
    cvcInp.classList.remove("error");
    cvcInp.parentElement.classList.remove("error_message");
  }
  if (
    cardName.value &&
    cardNumbermm &&
    cardNumber &&
    numberInp.value &&
     cvcInp.value &&
    numberInp.value.length == 16
  ) {
    showThankYouAndConfirmation();
  }
   
};

 
submitBtn.addEventListener("click", handleSubmit);

 