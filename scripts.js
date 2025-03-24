document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded');

    // Smooth scrolling for navigation links within the same page
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // Check if the target element exists on the current page
            if (targetElement) {
                event.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Add hover effect to articles
    const articles = document.querySelectorAll('article');
    articles.forEach(article => {
        article.addEventListener('mouseover', function() {
            this.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
        });
        article.addEventListener('mouseout', function() {
            this.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('promoVideo');

    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play().catch(error => {
                    console.error("Autoplay was prevented:", error);
                });
            } else {
                video.pause();
            }
        });
    }, { threshold: 0.5 }); // Adjust the threshold as needed

    // Start observing the video element
    observer.observe(video);
});
