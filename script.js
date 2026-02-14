// Smooth scroll
document.querySelector(".explore-btn").addEventListener("click", () => {
    document.querySelector(".menu").scrollIntoView({ behavior: "smooth" });
});

// Counter Animation
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    const update = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / 100;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(update, 20);
        } else {
            counter.innerText = target;
        }
    };
    update();
});

// Cursor Glow
const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
    cursorGlow.style.left = e.pageX + "px";
    cursorGlow.style.top = e.pageY + "px";
});

// Scroll Reveal
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        const screen = window.innerHeight;

        if (position < screen - 100) {
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }
    });
});

sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 1s ease";
});
