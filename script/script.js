/**
 * Function to toggle a menu
 */
function toggleMenu() {
    document.getElementById('nav').classList.toggle('active');
}

/**
 * Function to make the scroll work
 */
function scrollProjects(direction) {
    const container = document.getElementById('projectsContainer');
    const scrollAmount = 400;
    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

/**
  * Function to set up an actve navigation section
  */
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#nav a');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach((link) => link.classList.remove('active'));
                    const activeLink = document.querySelector(`#nav a[href="#${id}"]`);
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            });
        },
        {
            threshold: 0.5, // Adjust how much of the section needs to be visible
        }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });
});
