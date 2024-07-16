const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");
moon.addEventListener("click", () => {
    document.body.classList.add("dark-theme");
    sun.style.display = "block";
    moon.style.display = "none";

})
sun.addEventListener("click", () => {
    document.body.classList.remove("dark-theme");

    moon.style.display = "block";
    sun.style.display = "none";
})

document.getElementById('hamburger-menu').addEventListener('click', function () {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
});

gsap.from(".fa-quote-left", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: ".fa-quote-left",
        scroller: "body",
        //  markers:true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
})
gsap.from(".fa-quote-right", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: ".fa-quote-left",
        scroller: "body",
        //    markers:true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
})

const prev = document.querySelectorAll(".prev");
const next = document.querySelectorAll(".next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, idx) => {
        if (idx === index) {
            slide.style.display = "flex";
        } else {
            slide.style.display = "none";
        }
    });
}

next.forEach(button => {
    button.addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });
});

prev.forEach(button => {
    button.addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });
});

showSlide(currentSlide);