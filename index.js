// Contact Me Button Functionality


const contactMeBtn = document.getElementById("contactBtn");

contactMeBtn.onclick = function(e) {
    e.preventDefault();
    alert("Please email me at carterhanks@gmail.com");
};

// Project Button Functionality

const projectBtn = document.getElementById("projectBtn");

projectBtn.onclick = function(e) {
    e.preventDefault();
    window.open("https://to-doozies.herokuapp.com/");
};

// Home Button Functionality

const homeBtn = document.getElementById("homeBtn");

homeBtn.onclick = function (e) {
    e.preventDefault();
    scrollToTop();
};

const scrollToTop = () => {
    console.log('scroll')
    scrollTo({
        top: 0,
        behavior: "smooth",
     });
}

const handleSkillsClick = (e) => {
    e.preventDefault();
    alert('skills clicked!');
}

const skillsButton = document.getElementById('skillsBtn');
skillsButton.addEventListener('click', handleSkillsClick);

// const rootElement = document.documentElement;

// function scrollToTop() {
//     rootElement.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     });

// };

// scrollToTopBtn.addEventListener("click", scrollToTop);

// Hire Me Button Functionality

const hireMeBtn = document.getElementById("hireMeBtn");

hireMeBtn.onclick = function() {
    window.open("https://calendly.com/carterhanks");
};