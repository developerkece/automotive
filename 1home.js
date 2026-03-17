const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.slider-indicator span');
const heroTitle = document.getElementById('hero-title');
const heroDesc = document.getElementById('hero-desc');
const heroContent = document.querySelector('.hero-content');

let index = 0;

function showSlide(i) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));

    slides[i].classList.add('active');
    dots[i].classList.add('active');

    const { title, desc, tech } = slides[i].dataset;

    if (title && desc) {
        heroTitle.textContent = title;
        heroDesc.textContent = desc;

        heroTitle.classList.remove('fade');
        heroDesc.classList.remove('fade');
        void heroTitle.offsetWidth;
        heroTitle.classList.add('fade');
        heroDesc.classList.add('fade');
    }

    
    if (tech) {
        heroContent.dataset.tech = tech;
    }
}


setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
}, 4000);



heroContent.addEventListener('click', () => {
    const tech = heroContent.dataset.tech;
    if (!tech) return;

    document.body.classList.remove("page-loaded");
    document.body.classList.add("fade-out");

    setTimeout(() => {
        window.location.href = `2explore.html#${tech}`;
    }, 600);
});



const gSlides = document.querySelectorAll('.gallery-slide');
const gDots = document.querySelectorAll('.gallery-indicator span');
let gIndex = 0;

function showGallery(i) {
    gSlides.forEach(s => s.classList.remove('active'));
    gDots.forEach(d => d.classList.remove('active'));

    gSlides[i].classList.add('active');
    gDots[i].classList.add('active');
}

setInterval(() => {
    gIndex = (gIndex + 1) % gSlides.length;
    showGallery(gIndex);
}, 3500);


document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-link");
    const indicator = document.querySelector(".nav-indicator");

    function moveIndicator(el) {
        indicator.style.width = `${el.offsetWidth}px`;
        indicator.style.left = `${el.offsetLeft}px`;
    }

    const activeLink = document.querySelector(".nav-link.active");
    if (activeLink) moveIndicator(activeLink);

    links.forEach(link => {
        link.addEventListener("mouseenter", e => moveIndicator(e.target));
    });

    document.querySelector(".nav-container").addEventListener("mouseleave", () => {
        if (activeLink) moveIndicator(activeLink);
    });
});

document.addEventListener("DOMContentLoaded", () => {

    requestAnimationFrame(() => {
        document.body.classList.add("page-loaded");
    });

    const pageLinks = document.querySelectorAll("a[href$='.html']");

    pageLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = this.href;

            document.body.classList.remove("page-loaded");
            document.body.classList.add("fade-out");

            setTimeout(() => {
                window.location.href = target;
            }, 600);
        });
    });

});
