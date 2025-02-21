//Slideshow 
var slideIndex = 0; // Initializing the variable to keep track of the current slide index
var slideshows = document.querySelectorAll('.slideshow-container'); // Selecting all elements with class 'slideshow-container'

slideshows.forEach(function(slideshow) { // Looping through each slideshow container
    var slides = slideshow.querySelectorAll('.mySlides'); // Selecting all slides within the current slideshow container

    showSlides(); // Calling the function to start the slideshow

    function showSlides() {
        var i;
        // Looping through all slides and hiding them
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++; // Incrementing the slide index
        if (slideIndex > slides.length) {slideIndex = 1} // Resetting the slide index if it exceeds the number of slides
        slides[slideIndex-1].style.display = "block"; // Displaying the current slide
        setTimeout(showSlides, 2000); // Calling the function recursively after 2000 milliseconds (2 seconds)
    }
});

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