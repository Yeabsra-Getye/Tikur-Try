function scrollToElementWithSpeed(element, speed) {
    const startPosition = window.pageYOffset;
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = speed; // speed in milliseconds (1000ms = 1 second)
    let startTime = null;

    function scrollAnimation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        window.scrollTo(0, startPosition + (distance * progress));

        if (timeElapsed < duration) {
            requestAnimationFrame(scrollAnimation);
        }
    }

    requestAnimationFrame(scrollAnimation);
}

// Function to remove active class from all links
function removeActiveClass() {
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.classList.remove('active');
    });
}

// Function to add active class to the clicked link
function addActiveClass(element) {
    element.classList.add('active');
}

// Add event listener for clicking on navigation links
document.getElementById('Home').addEventListener('click', function(event) {
    event.preventDefault();
    scrollToElementWithSpeed(document.querySelector('.Home'), 800);
    removeActiveClass(); // Remove active class from all links
    addActiveClass(event.target); // Add active class to clicked link
});

document.getElementById('About').addEventListener('click', function(event) {
    event.preventDefault();
    scrollToElementWithSpeed(document.querySelector('.About'), 800);
    removeActiveClass();
    addActiveClass(event.target);
});

document.getElementById('Service').addEventListener('click', function(event) {
    event.preventDefault();
    scrollToElementWithSpeed(document.querySelector('.Service'), 800);
    removeActiveClass();
    addActiveClass(event.target);
});

document.getElementById('Web-Developers').addEventListener('click', function(event) {
    event.preventDefault();
    scrollToElementWithSpeed(document.querySelector('.Web-Developers'), 800);
    removeActiveClass();
    addActiveClass(event.target);
});

document.getElementById('Contact-Us').addEventListener('click', function(event) {
    event.preventDefault();
    scrollToElementWithSpeed(document.querySelector('.Contact-Us'), 800);
    removeActiveClass();
    addActiveClass(event.target);
});

// Event listener for scrolling to update active link based on visible section
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.Home, .About, .Service, .Web-Developers, .Contact-Us');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) { // Check if the section is in the viewport
            const id = section.classList[0]; // Get the section class name (e.g., "Home")
            const link = document.getElementById(id.charAt(0).toUpperCase() + id.slice(1)); // Get the corresponding link
            removeActiveClass(); // Remove active class from all links
            addActiveClass(link); // Add active class to the corresponding link
        }
    });
});
