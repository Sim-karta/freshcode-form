const form = document.querySelector(".form");
const firstNameElement = form.querySelector("#first-name");
const lastNameElement = form.querySelector("#last-name");
const emailElement = form.querySelector("#email");
const phoneElement = form.querySelector("#phone");
const subjectElement = form.querySelector("#subject");
const messageElement = form.querySelector("#message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const firstName = firstNameElement.value.trim();
    const lastName = lastNameElement.value.trim();
    const email = emailElement.value.trim();
    const phone = phoneElement.value.trim();
    const subject = subjectElement.value.trim();
    const message = messageElement.value.trim().replace(/\s+/g, " ");

    const formData = {
        name: `${firstName} ${lastName}`.trim(),
        email,
        phone: phone.replace(/\D/g, ""),
        subject,
        message,
    };

    console.log(formData);
    form.reset();
});
