document.addEventListener("DOMContentLoaded", function () {
    let popup = document.getElementById("promoPopup");
    let closeBtn = document.getElementById("closePopup");
    let formSubmitted = false;

    // Show popup once when the page loads
    function showPopup() {
        if (!formSubmitted) {
            popup.style.display = "block";
        }
    }

    function closePopup() {
        popup.style.display = "none";
    }

    function submitForm(event, formId) {
        event.preventDefault();

        let fullName = document.getElementById(`${formId}FullName`).value;
        let phoneNumber = document.getElementById(`${formId}PhoneNumber`).value;
        let emailAddress = document.getElementById(`${formId}EmailAddress`).value;

        if (fullName === "" || phoneNumber === "" || emailAddress === "") {
            alert("Please fill in all fields.");
            return;
        }

        console.log("Form submitted:", { fullName, phoneNumber, emailAddress });

        // Send form data to email
        let mailtoLink = `mailto:infovirar@gmail.com?subject=New Inquiry&body=Name: ${fullName}%0APhone: ${phoneNumber}%0AEmail: ${emailAddress}`;
        window.location.href = mailtoLink;

        alert("Thank you for your submission!");

        formSubmitted = true;
        popup.style.display = "none";
    }

    document.getElementById("popupForm").addEventListener("submit", (event) => submitForm(event, "popup"));
    document.getElementById("bottomForm").addEventListener("submit", (event) => submitForm(event, "bottom"));
    closeBtn.addEventListener("click", closePopup);

    showPopup(); // Show popup once on page load
});
