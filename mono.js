
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
"#000",
"#000",
"#000",
"#000",
"#000",
"#000",
"#000",
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
});
document.addEventListener('mouseleave', function(event) {
  coords.style.display = 'none';
  circles.style.display = 'none';
    });
  
    document.addEventListener('mouseenter', function(event) {
      coords.style.display = 'block';
      circles.style.display = 'block';
        });

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);

}

animateCircles();
const tiltEffectSettings = {
  max: 25, // max tilt rotation (degrees (deg))
  perspective: 1000, // transform perspective, the lower the more extreme the tilt gets (pixels (px))
  scale: 1.1, // transform scale - 2 = 200%, 1.5 = 150%, etc..
  speed: 500, // speed (transition-duration) of the enter/exit transition (milliseconds (ms))
  easing: "cubic-bezier(.03,.98,.52,.99)" // easing (transition-timing-function) of the enter/exit transition
};


const popupButton = document.getElementById('popup-button');
const popupMenu = document.getElementById('myPopup');

// Function to toggle the visibility of the popup menu
function togglePopup() {
  popupMenu.style.display = popupMenu.style.display === 'block' ? 'none' : 'block';
}

// Event listener for the popup button to open/close the popup menu
popupButton.addEventListener('click', togglePopup);

// Event listener to close the popup menu when clicking outside of it
window.addEventListener('click', (event) => {
  if (!event.target.matches('#popup-button') && !event.target.matches('#myPopup')) {
    popupMenu.style.display = 'none';
  };
});