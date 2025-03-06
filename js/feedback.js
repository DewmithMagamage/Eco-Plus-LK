document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Validate the form fields
    let isValid = true;
    const formFields = document.querySelectorAll(
      "#feedbackForm input[required], #feedbackForm select[required]"
    );
    formFields.forEach((field) => {
      if (!field.value) {
        isValid = false;
        field.style.borderColor = "red";
      } else {
        field.style.borderColor = "#ccc";
      }
    });

    // Validate star rating
    const starRating = document.querySelectorAll('input[name="stars"]:checked');
    if (starRating.length === 0) {
      isValid = false;
      document.getElementById("starRating").style.border = "1px solid red";
    } else {
      document.getElementById("starRating").style.border = "none";
    }

    if (isValid) {
      // Show the confirmation message
      document.getElementById("confirmationMessage").classList.remove("hidden");

      // Clear the form fields
      document.getElementById("feedbackForm").reset();
    }
  });
