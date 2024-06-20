document.getElementById('phone-link').addEventListener('click', function() {
    const phoneNumber = '+381628421833'; 
    navigator.clipboard.writeText(phoneNumber).then(() => {
        alert('Phone number copied to clipboard: ' + phoneNumber);
    });
    window.addEventListener('load', () => {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.classList.add('hidden');
        setTimeout(() => loadingScreen.style.display = 'none', 500);
      });
      
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Function to add 'visible' class when an element is in the viewport and remove it when out
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}

// Intersection Observer setup
const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.1 // Adjust this threshold as needed
});

// Observe all sections
document.querySelectorAll('section > div').forEach(element => {
    observer.observe(element);
});

// Scroll to top on Home button click
document.querySelector('.navbar a[href="#"]').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.querySelector('form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (!name || !email || !message) {
      event.preventDefault();
      alert('Please fill out all fields.');
    }
  });
  