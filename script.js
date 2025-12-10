// Animate progress bars when the section becomes visible
const progressBars = document.querySelectorAll('.progress-bar');

function animateSkills() {
    progressBars.forEach(bar => {
        const value = bar.getAttribute('data-progress');
        bar.style.width = value;
    });
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkills();
        }
    });
}, { threshold: 0.5 });

observer.observe(document.querySelector('.skills-section'));
