// JavaScript Document
/*============TOOGLE ICON NAVBAR==============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
	menuIcon.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};

/*============SCROLL SECTIONS ACTIVE LINK==============*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
	sections.forEach(sec => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 150;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');
		
		if(top >= offset && top < offset + height) {
			navLinks.forEach(links => {
				links.classList.remove('active');
				document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
			});
		};
	});
	
	/*============STICKY NAVBAR==============*/
	let header = document.querySelector('header');
	
	header.classList.toggle('sticky', window.scrollY > 100);

	/*============REMOVE TOOGLE ICON AND NAVBAR WHEN CLICK NAVBAR LINK (SCROLL)==============*/
	menuIcon.classList.remove('bx-x');
	navbar.classList.remove('active');
};

/*============APARICIÓN DE LOS VARIOS ELEMENTOS DE LAS DISTINTAS SECCIONES DE FORMA DINÁMICA==============*/
ScrollReveal({
	//reset: true,
	distance: '80px',
	duration: 2000,
	delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*============EFECTO TEXTO MULTIPLE PARA OFICIOS==============*/
const typed = new Typed('.multiple-text',{
	strings: ['FrontEnd Developer', 'Graphic Designer', 'Photographer'],
	typeSpeed: 75,
	backSpeed: 75,
	backDelay: 1000,
	loop: true
});







