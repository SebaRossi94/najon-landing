
function submitForm(event) {
    event.preventDefault();
    emailInput = document.getElementById('emailInput');
    commentInput = document.getElementById('commentInput');
    alertMessage = document.getElementById('alertMessage');
    console.log(emailInput.value);
    console.log(commentInput.value);
    // success = false;
    // if (success) {
    //     alertMessage.innerHTML = "Your message was successfully sent";
    //     alertMessage.classList.add("alert-success");
    // } else {
    //     alertMessage.innerHTML = "Error sending message";
    //     alertMessage.classList.add("alert-danger");
    // }
    alertMessage.innerHTML = "Your message was successfully sent";
    alertMessage.classList.add("alert-success");
    alertMessage.hidden = false;
}

form = document.getElementById("contactUsForm")

form.addEventListener("submit", submitForm)