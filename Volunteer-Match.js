function matchVolunteer() {
    var skills = document.getElementById('skills').value.toLowerCase();
    var interests = document.getElementById('interests').value.toLowerCase();
    var availability = document.getElementById('availability').value.toLowerCase();
    var volunteerList = document.getElementById('volunteerList');

    // Logic to match volunteers based on skills, interests, and availability
    // Examples:
    var matchingVolunteers = [
        { name: 'Volunteer 1', description: 'Help with event organization', skills: ['organizing', 'communication'], interests: ['events', 'community'], availability: 'weekends' },
        { name: 'Volunteer 2', description: 'Assist in teaching', skills: ['teaching', 'patience'], interests: ['education', 'children'], availability: 'weekday evenings' },
        { name: 'Volunteer 3', description: 'Provide technical support', skills: ['technical', 'problem-solving'], interests: ['technology', 'community'], availability: 'flexible' }
    ];

    // Display matching volunteers
    volunteerList.innerHTML = '';
    matchingVolunteers.forEach(function (volunteer) {
        volunteerList.innerHTML += '<li><strong>' + volunteer.name + '</strong>: ' + volunteer.description + '</li>';
    });

    // Show results
    document.getElementById('questions').classList.add('hidden');
    document.getElementById('results').classList.remove('hidden');
}