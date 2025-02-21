//Donate button that appears in all pages
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