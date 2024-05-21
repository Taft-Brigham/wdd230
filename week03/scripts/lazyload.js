document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('img.lazy-load');

    const lazyLoad = (image) => {
        const src = image.getAttribute('data-src');
        if (!src) {
            return;
        }
        image.src = src;
        image.onload = () => {
            image.classList.add('fade-in');
        };
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                lazyLoad(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });

    images.forEach(image => {
        observer.observe(image);
    });

    // Set last modified date
    const lastModified = document.getElementById('last-modified');
    lastModified.textContent = document.lastModified;
});
