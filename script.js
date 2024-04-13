const VELOCITY = 5;
let direction = { x: 1, y: 1 };

const dvd = document.getElementById("dvd");

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

dvd.style.left = getRandomInt(window.innerWidth) + "px";
dvd.style.top = getRandomInt(window.innerHeight) + "px";

setInterval(() => {
  const dvdBounding = dvd.getBoundingClientRect();

  if (direction.x > 0 && dvdBounding.right > window.innerWidth || direction.x < 0 && dvdBounding.left < 0) {
    direction.x *= -1;
  }
  if (direction.y > 0 && dvdBounding.bottom > window.innerHeight || direction.y < 0 && dvdBounding.top < 0) {
    direction.y *= -1;
  }

  dvd.style.left = parseInt(dvd.style.left) + direction.x * VELOCITY + "px";
  dvd.style.top = parseInt(dvd.style.top) + direction.y * VELOCITY + "px";
}, 1000 / 60);
