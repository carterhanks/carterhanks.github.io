// Contact Me Button Functionality

const contactMeBtn = document.getElementById("contactBtn");

contactMeBtn.onclick = function() {
    alert("Email me at carterhanks@gmail.com");
};

// Project Button Functionality

const projectBtn = document.getElementById("projectBtn");

projectBtn.onclick = function() {
    window.open("https://to-doozies.herokuapp.com/");
};

// Home Button Functionality

const scrollToTopBtn = document.getElementById("homeBtn");
const rotElement = document.documentElement

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
    });
};

scrollToTopBtn.addEventListener("click", scrollToTop);

// Hire Me Button Functionality

const hireMeBtn = document.getElementById("hireMeBtn");

hireMeBtn.onclick = function() {
    window.open("https://calendly.com/carterhanks");
}