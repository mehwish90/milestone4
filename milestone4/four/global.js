var resume = document.getElementById('resume');
var display = document.getElementById('display');
//handle form submission
resume.addEventListener('submit', function (event) {
    event.preventDefault();
    //collect input
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    //generate resume
    var resumeHTML = "\n<h2><b>Editable Resume</b></h2>\n<h3>Personal Info</h3>\n<p><b>Name:</b><span  contenteditable=\"true\"> ".concat(name, "</span></P>\n<p><b>Phone Num:</b> <span  contenteditable=\"true\">").concat(phone, "</span></P>\n<p><b>Email:</b><span  contenteditable=\"true\"> ").concat(email, "</span></P>\n<h3>Education:</h3>\n<p><span  contenteditable=\"true\">").concat(education, "</span></p>\n\n<h3>Skills:</h3>\n<p <span  contenteditable=\"true\">>").concat(skills, "</span></p>\n\n<h3>Experiece:</h3>\n<p <span  contenteditable=\"true\">").concat(experience, "</span></p>\n");
    //display
    if (display) {
        display.innerHTML = resumeHTML;
    }
    else {
        console.error("display element missing");
    }
});
