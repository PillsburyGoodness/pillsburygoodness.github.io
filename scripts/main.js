let myImage = document.querySelector('img');
myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if (mySrc === "images/Toc-Man_29.png"){
		myImage.setAttribute("src", "images/Toc-Man_new.png");
	}
	else{
		myImage.setAttribute("src", "images/Toc-Man_29.png");
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

if(!localStorage.getItem('name')) {
	setUserName();
  } else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Toc-Man is pretty cool huh, ' + storedName;
  }

myButton.onclick = () => {
	setUserName();
};

function setUserName() {
	let myName = prompt('Please enter your name.');
	if(!myName){
		setUserName();
	}
	else{
		localStorage.setItem('name', myName);
		myHeading.textContent = 'Toc-Man is pretty cool huh, ' + myName;
	}
}



/*
const myHeading = document.querySelector('h1'); 
myHeading.textContent = 'Hello world!';
document.querySelector('html').addEventListener('click', function() {
	alert('Ouch! Stop poking me!');
  }); //anon function, can also be written as '() =>'
alert("bruh");
*/