function active(name) {
	if ( document.getElementById("home-nav").classList.contains('active') )
		document.getElementById("home-nav").classList.remove('active');
	if ( document.getElementById("about-nav").classList.contains('active') )
		document.getElementById("about-nav").classList.remove('active');
	if ( document.getElementById("contact-nav").classList.contains('active') )
		document.getElementById("contact-nav").classList.remove('active');
	if ( document.getElementById("projects-nav").classList.contains('active') )
		document.getElementById("projects-nav").classList.remove('active');

	document.getElementById(name+'-nav').classList.toggle('active');


}