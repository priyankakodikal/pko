
// Smooth scroll and navigation highlighting
const sections = document.querySelectorAll('.section');
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        const sectionId = item.getAttribute('data-section');
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Intersection Observer for fade-in animation and navigation highlighting
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Update navigation
            navItems.forEach(item => {
                if (item.getAttribute('data-section') === entry.target.id) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }
    });
}, {
    threshold: 0.5
});

sections.forEach((section) => {
    observer.observe(section);
});


/////// Function to load HTML content from external files in the 'pages' folder
function loadHTML(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => document.getElementById(id).innerHTML = data)
        .catch(error => console.error('Error loading HTML file:', error));
}

// Load each section from the 'pages' folder
loadHTML('ableton', '/pages/ableton.html');
loadHTML('sidebar', '/pages/sidebar.html');
loadHTML('main-content', '/pages/main-content.html');
loadHTML('footer', '/pages/footer.html');

////////// accordion menu
// Get all menu headers
const menuHeaders = document.querySelectorAll('.menu-header');

// Add click event listener to each header
menuHeaders.forEach(header => {
    header.addEventListener('click', () => {
        // Get the content associated with this header
        const content = header.nextElementSibling;
        
        // If this content is already shown, hide it
        if (content.classList.contains('show')) {
            content.classList.remove('show');
            header.classList.remove('active');
        } else {
            // Hide all other contents
            document.querySelectorAll('.menu-content').forEach(c => {
                c.classList.remove('show');
            });
            document.querySelectorAll('.menu-header').forEach(h => {
                h.classList.remove('active');
            });
            
            // Show this content
            content.classList.add('show');
            header.classList.add('active');
        }
    });
});
        
