
/*sky stars canvas */
var c = document.getElementById("canvas");
var ctx = c.getContext('2d');
for (var i = 0; i <= 110; i++) {
    /*random positions between width & height */
	x = Math.floor((Math.random() * 1500) + 1);
	y = Math.floor((Math.random() * 900) + 1);
    /*color radial gradient between #FFF & #000*/
	var grd = ctx.createRadialGradient(x, y, .1, x, y, 5);
	grd.addColorStop(0, "white");
	grd.addColorStop(.3, "#212020");
	grd.addColorStop(1, "#000");
	ctx.fillStyle = grd;
	ctx.beginPath();
    /*star circle fill with the gradient */
	ctx.arc(x, y, 5, 0, 2 * Math.PI);

	ctx.fill();
	ctx.closePath();
	console.log(x + "nnnnn" + y);
}
/*Togging nav bar menu */

function shown() {
	document.getElementById("nav").classList.toggle("show");
	document.querySelector("nav .nav-sign span").classList.toggle("reversed");
    /*adding animation class to menu elements */
	var menuItem = document.getElementsByClassName("menu-item ");
	for (var j = 0; j < 8; j++) {
		menuItem[j].classList.add("get");
	}
	    /* disply none for intro whole small screen */
	if (document.documentElement.clientWidth <= 480) {

		var intro = document.getElementById('myInrto');
		intro.classList.toggle('hidden');
		/*
    if (intro.style.display === 'none') {
        intro.style.display = 'block';
    } else {
        intro.style.display = 'none';
    }
*/
	}
 

}
/*close and appear button functionality  "full project modal"*/
function cloe() {
	var pro = document.getElementById("project-full");
	pro.style.display = 'none';
	console.log('654874870000000000000000000000');
}

function appear() {
	var pro = document.getElementById("project-full");
	pro.style.display = 'block';
	console.log('654874870000000000000000000000');
}

function cloe1() {
	var pro1 = document.getElementById("project-full1");
	pro1.style.display = 'none';

}

function appear1() {
	var pro1 = document.getElementById("project-full1");
	pro1.style.display = 'block';

}
/*smooth scrolling for sections*/

function initScroll(sectionId) {
	 document.getElementById('nav').classList.remove('show');
	document.getElementById('myInrto').classList.remove('hidden');
	document.querySelector("nav .nav-sign span").classList.remove("reversed");
	var target = document.getElementById(sectionId).offsetTop;
	var currentOffset = window.pageYOffset;
	var pos = currentOffset + window.innerHeight;
	var docHeight = document.body.offsetHeight;
	var animator = setTimeout(function() {
		initScroll(sectionId);
	}, 2)
	if (target + 20 < currentOffset) {
		window.scrollBy(0, -20);
	} else {
		if (pos >= docHeight) {
			clearTimeout(animator);
		} else {
			if (target - 20 > currentOffset) {
				window.scrollBy(0, 20);
			} else {
				clearTimeout(animator);
			}
		}
	}
}
