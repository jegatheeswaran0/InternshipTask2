document.addEventListener('DOMContentLoaded', function() {
    // Select the RSVP button
    var rsvpButton = document.getElementById('rsvpButton');

    // Add click event listener
    rsvpButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default behavior of anchor element

        // Here you can perform actions such as displaying a form, showing a modal, or triggering a confirmation message
        // For demonstration purposes, let's alert a message
        alert('Thank you for your RSVP! We look forward to seeing you at the event.');
    });
});