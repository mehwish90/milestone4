const resume =document .getElementById('resume')as HTMLFormElement
const display=document.getElementById('display')as HTMLDivElement
//handle form submission
resume.addEventListener('submit', (event:Event)=>{
    event.preventDefault();

//collect input
const name=(document.getElementById('name') as HTMLInputElement).value
const email=(document.getElementById('email') as HTMLInputElement).value
const phone=(document.getElementById('phone') as HTMLInputElement).value
const education=(document.getElementById('education') as HTMLInputElement).value
const skills=(document.getElementById('skills') as HTMLInputElement).value
const experience=(document.getElementById('experience') as HTMLInputElement ).value

//generate resume
const resumeHTML=`
<h2><b>Editable Resume</b></h2>
<h3>Personal Info</h3>
<p><b>Name:</b><span  contenteditable="true"> ${name}</span></P>
<p><b>Phone Num:</b> <span  contenteditable="true">${phone}</span></P>
<p><b>Email:</b><span  contenteditable="true"> ${email}</span></P>
<h3>Education:</h3>
<p><span  contenteditable="true">${education}</span></p>

<h3>Skills:</h3>
<p <span  contenteditable="true">>${skills}</span></p>

<h3>Experiece:</h3>
<p <span  contenteditable="true">${experience}</span></p>
`;
//display
if(display)
{display.innerHTML=resumeHTML}
else{console.error(`display element missing`)}
} )