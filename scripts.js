document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const input = document.getElementById("email");
    const msg = document.querySelector(".message");

    form.addEventListener("submit", e => {
        e.preventDefault();
        const val = input.value;

        if (val) {
            msg.textContent = `Thank you! Your email address ${val} has been added to our mailing list!`;
        } else {
            msg.textContent = "Please enter a valid email address.";
        }
    });
});