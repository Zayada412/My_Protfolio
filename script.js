// Initialize AOS for scroll animations
AOS.init();

// GSAP Animations
gsap.from('.profile-pic', { opacity: 0, scale: 0, duration: 1 });
gsap.from('.hero-title', { opacity: 0, y: -50, duration: 1, delay: 0.5 });
gsap.from('.hero-subtitle', { opacity: 0, y: 50, duration: 1, delay: 1 });
gsap.from('.btn', { opacity: 0, scale: 0.5, duration: 0.5, delay: 1.5 });



//skills
document.addEventListener("DOMContentLoaded", function () {
    const progressCircles = document.querySelectorAll(".fg-circle");
    const skillValues = [90, 85, 80, 75, 65, 70, 65, 70, 80, 95]; // Skill percentages

    progressCircles.forEach((circle, index) => {
        let percentage = skillValues[index];
        let circumference = 2 * Math.PI * 40; // 2πr

        let offset = circumference - (percentage / 100) * circumference;
        circle.style.strokeDashoffset = offset;
    });
});





//education
document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".timeline-item");

    items.forEach((item) => {
        item.style.opacity = "0";
        item.style.transform = "translateY(30px)";
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                    entry.target.style.transition = "all 0.6s ease-in-out";
                }
            });
        },
        { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));
});



//experence
document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".timeline2-item");

    items.forEach((item) => {
        item.style.opacity = "0";
        item.style.transform = "translateY(30px)";
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                    entry.target.style.transition = "all 0.6s ease-in-out";
                }
            });
        },
        { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));
});





//contact
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message Sent Successfully!");
    document.getElementById("contactForm").reset();
});
