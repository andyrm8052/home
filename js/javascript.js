window.addEventListener('scroll', function(){
	var header = document.querySelector('header');
	header.classList.toggle('sticky', window.scrollY > 0);
});

function toggleMenu(){
	var menuToggle = document.querySelector('.toggle');
	var menu = document.querySelector('.menu');
	menuToggle.classList.toggle('pushed');
	menu.classList.toggle('pushed');
}

function toggle(){
	var blurElements = Array.from(document.getElementsByClassName('blur')); 
    blurElements.forEach(element => element.classList.toggle('active'));
    var popup = document.getElementById('popup');
	popup.classList.toggle('active');
	
	let imgClass = event.target.closest('a').id; // reads the id from the <a> tag
  Array.from(popup.querySelectorAll('img')).forEach(image => { // loops over all images with forEach
    if (image.classList.contains(imgClass)){ // if it's the image belonging to the <a> tag that was clicked,
      image.style.display = 'block' // set display to 'block'
    } else {
      image.style.display = 'none' // set display to 'none' on all other images
    }
  })
}
