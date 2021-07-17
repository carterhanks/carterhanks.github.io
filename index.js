
// Contact Me Button Functionality

const contactBtn = document.getElementById("contactBtn");

contactBtn.onclick = function(e) {
    e.preventDefault();
    const contactTitle = document.getElementById("contact-title")
    contactTitle.scrollIntoView({behavior: "smooth"});
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

    // Contact Form
    
    // const contactForm = document.querySelector('.contact-form');
    
    // let nameField = document.getElementById('name');
    // let email = document.getElementById('email');
    // let subject = document.getElementById('subject');
    // let message = document.getElementById('message');
    
    // contactForm.addEventListener('submit', function(e) {
    //     e.preventDefault();
    
    //     let formData = {
    //         name: nameField.value,
    //         email: email.value,
    //         subject: subject.value,
    //         message: message.value
    //     }
    
    //     // console.log(formData)
    
    //     let xhr = new XMLHttpRequest();
    //     xhr.open('POST', './');
    //     xhr.setRequestHeader('content-type', 'application/json');
    //     xhr.onload = function() {
    //         console.log(xhr.responseText);
    //         if(xhr.responseText == 'success') {
    //             alert('Email Sent!');
    //             nameField.value = '';
    //             email.value = '';
    //             subject.value = '';
    //             message.value = '';
    //         } else {
    //             alert('Something went wrong.');
    //         };
    //     };
    
    //     xhr.send(JSON.stringify(formData));
    
    // });