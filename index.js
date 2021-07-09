// Contact Me Button Functionality

const contactBtn = document.getElementById("contactBtn");

contactBtn.onclick = function(e) {
    e.preventDefault();
    const contactDiv = document.getElementById("contactDiv")
    contactDiv.scrollIntoView({behavior: "smooth"});
    alert("Under construction!\nPlease email me at carterhanks@gmail.com");
};


// Project Button Functionality

const projectBtn = document.getElementById("projectBtn");

projectBtn.onclick = function(e) {
    e.preventDefault();
    window.open("https://to-doozies.herokuapp.com/");
};


// Home Button Functionality

const homeBtn = document.getElementById("homeBtn");

const scrollToTop = function() {
    scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

homeBtn.onclick = function (e) {
    e.preventDefault();
    scrollToTop();
};


// Skills Button Functionality

const skillsButton = document.getElementById('skillsBtn');

const handleSkillsClick = function(e) {
    e.preventDefault();
    alert('Skills under construction!');
};

skillsButton.addEventListener('click', handleSkillsClick);


// Hire Me Button Functionality

const hireMeBtn = document.getElementById("hireMeBtn");

hireMeBtn.onclick = function(e) {
    e.preventDefault();
    window.open("https://calendly.com/carterhanks");
};