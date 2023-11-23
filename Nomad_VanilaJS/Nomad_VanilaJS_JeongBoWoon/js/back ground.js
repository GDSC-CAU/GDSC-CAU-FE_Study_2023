
const imgs = ['0.jpg','1.png','2.png'];
const selectedimg = imgs[Math.floor(Math.random()*imgs.length)];

const bgimg = document.createElement("img");
bgimg.src = `image/${selectedimg}`;
document.body.appendChild(bgimg);
