const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
})
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

function dropDown() {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '25px',
	duration: 2500,
	reset: true
})

sr.reveal('.home-text',{delay:190, origin:'bottom'})

sr.reveal('.about,.services,.portfolio,.contact',{delay:200, origin:'bottom'});

const handleSubmit = (event) => {
	event.preventDefault();
  
	const myForm = event.target;
	const formData = new FormData(myForm);
	
	fetch("/", {
	  method: "POST",
	  headers: { "Content-Type": "application/x-www-form-urlencoded" },
	  body: new URLSearchParams(formData).toString(),
	})
	  .then(() => console.log("Form successfully submitted"))
	  .catch((error) => alert(error));
  };
  
  document
	.querySelector("form")
	.addEventListener("submit", handleSubmit);