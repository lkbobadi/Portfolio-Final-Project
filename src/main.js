(function () {
  emailjs.init("user_xcrUvbY9V9H9TVRxYJXrc");
})();

let send = document.querySelector("#send");
let textarea = document.querySelector("textarea");

function sendMail(event) {
  event.preventDefault();
  let fromUser = document.querySelector("#fromName").value;
  let userEmail = document.querySelector("#user_email").value;
  let message = document.querySelector("#message").value;

  var contactParams = {
    from_name: fromUser,
    from_email: userEmail,
    message: message,
  };

  emailjs
    .send("service_s69cb6g", "template_0g9yosq", contactParams)
    .then(function (res) {});

  textarea.disabled = true;

  if ((textarea.disabled = true)) {
    setTimeout(closeForm, 3000);
  }
}

function closeForm() {
  if (textarea.disabled == true) {
    let form = document.querySelector(".form");
    form.replaceWith(
      `Thank you for sending this message, I will get back to you soon!`
    );
  }
}

send.addEventListener("click", sendMail);
