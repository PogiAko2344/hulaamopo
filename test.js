
(function () {
  emailjs.init("-VxSN8dfUtbhiHzMl"); 
})();

window.addEventListener("load", function () {
  const form = document.querySelector("form");

  if (!form) {
    console.error("Form not found!");
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const templateParams = {
      name: document.getElementById("name")?.value || "",
      email: document.getElementById("email")?.value || "",
      subject: document.getElementById("subject")?.value || "",
      message: document.getElementById("message")?.value || ""
    };

    if (!templateParams.name || !templateParams.email || !templateParams.message) {
      alert("Please fill in all required fields.");
      return;
    }

    emailjs.send("service_e6gie82", "template_eznsh4k", templateParams)
      .then(function (response) {
        alert("Email sent successfully!");
        console.log("SUCCESS!", response.status, response.text);
        form.reset(); // Clear form after success
      })
      .catch(function (error) {
        alert("Failed to send email. Check console for details.");
        console.error("FAILED...", error);
      });
  });
});