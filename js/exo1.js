const canvas = document.getElementById('exo1');
const ctx = canvas.getContext('2d');

function tracerCercle(x, y) {
    let largeur = Math.random() * 100;
    let color = 'rgb(10,' + Math.random() * 255 + ',' + Math.random() * 255 + ')';

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x - 10, y - 80, largeur, 0, 2 * Math.PI);
    ctx.fill();
}

canvas.addEventListener('click', () => {
    let mouseX = event.clientX;
    let mouseY = event.clientY;

    tracerCercle(mouseX, mouseY);
})