// Function to validate CVV
function validateCVV(cvv) {
    return /^\d{3}$/.test(cvv); // Using regular expression to check if the CVV consists of 3 digits
}

// Function to validate email
function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email); // Using regular expression to check if the email format is valid
}

// Function to validate expiration date
function validateExpirationDate(date) {
    return /^(0[1-9]|1[0-2])\/\d{2}$/.test(date); // Using regular expression to check if the expiration date format is valid (MM/YY)
}

// Add event listener to required info form
document.getElementById("required-info-form").addEventListener("submit", function(event) {
    // Prevent form submission
    event.preventDefault();

    // Check if all required fields are filled
    var inputs = document.querySelectorAll("#required-info-form input");
    var filled = true;
    inputs.forEach(function(input) {
        if (!input.value) {
            filled = false;
            input.style.borderColor = "red"; // Change border color of empty input fields to red
        } else {
            input.style.borderColor = ""; // Reset border color of filled input fields
        }
    });

    if (filled) {
        alert("Thanks for submitting the required information!");
        // Clear form after submission
        this.reset();
    } else {
        alert("Please fill in all required fields!");
    }
});

// Add event listener to donate button
document.getElementById("donate-button").addEventListener("click", function() {
    // Validate card number
    var cardNumber = document.getElementById("card-number").value;
    if (cardNumber.length !== 16 || !/^\d+$/.test(cardNumber)) {
        alert("Please enter a valid card number (16 digits)!");
        return;
    }

    // Validate expiration date
    var expirationDate = document.getElementById("expiration-date").value;
    if (!validateExpirationDate(expirationDate)) {
        alert("Please enter a valid expiration date (MM/YY)!");
        return;
    }

    // Validate CVV
    var cvv = document.getElementById("cvv").value;
    if (!validateCVV(cvv)) {
        alert("Please enter a valid CVV (3 digits)!");
        return;
    }

    alert("Thanks for your donation!");
    // Clear form after submission
    document.getElementById("visa-form").reset();
});

// Change placeholder text color to grey when typing
var inputs = document.querySelectorAll("input");
inputs.forEach(function(input) {
    input.addEventListener("input", function() {
        this.style.color = "#333"; // Change text color to grey (#333) when typing
    });
});

// Change placeholder text color back to default when blurred
inputs.forEach(function(input) {
    input.addEventListener("blur", function() {
        if (!this.value) {
            this.style.color = ""; // Reset text color when input field is empty
        }
    });
});