// This file can be used for client-side JavaScript if needed in the future.
console.log('Main JavaScript file loaded.');

document.addEventListener('DOMContentLoaded', () => {

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                let current = 0;

                const updateCounter = () => {
                    const increment = target / 200; // Speed of the animation
                    current += increment;

                    if (current < target) {
                        counter.innerText = Math.ceil(current).toLocaleString();
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.innerText = target.toLocaleString() + '+';
                    }
                };

                updateCounter();
                observer.unobserve(counter); // Animate only once
            }
        });
    }, { threshold: 0.5 }); // Start animation when 50% visible

    document.querySelectorAll('.follower-count').forEach(counter => {
        counterObserver.observe(counter);
    });

});
