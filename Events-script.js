//If the mouse is over the image 
function toggleDescription(imageNumber) {
    var description = document.getElementById("description" + imageNumber); // Getting the description element corresponding to the imageNumber
    if (description.style.opacity === "0") { // If the opacity of the description is 0 (hidden)
        description.style.opacity = "1"; // Show the description by setting its opacity to 1
    } else {
        description.style.opacity = "0"; // Hide the description by setting its opacity to 0
    }
}

    //Donations button Javascript code
     document.addEventListener('DOMContentLoaded', function () {
    // Get the donate button element
    var donateButton = document.getElementById('donate-button');

    // Add click event listener to the donate button
    donateButton.addEventListener('click', function () {
        // Redirect to donations.html page
        window.location.href = 'Donate.html';
    });

    // Function to update position of the button based on scroll
    function updateButtonPosition() {
        var scrolled = window.scrollY;

        // Update button position
        donateButton.style.transform = 'translateY(' + scrolled + 'px)';
    }

    // Add scroll event listener to update button position
    window.addEventListener('scroll', updateButtonPosition);

    // Initial call to update button position
    updateButtonPosition();
});
          