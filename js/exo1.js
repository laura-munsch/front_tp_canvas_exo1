// initialisation du canvas
const canvas = document.getElementById('exo1');
const ctx = canvas.getContext('2d');

// on assigne le storage du navigateur à une constante
const ls = window.localStorage;

// bouton pour la réinitialisation :
const resetBtn = document.getElementById('reset');

// création du tableau contenant les paramètres des futurs cercles
let cercles = [];

document.addEventListener('DOMContentLoaded', () => {
    // au chargement, on récupère les cercles stockés dans le storage
    cercles = getCercles();

    // on trace tous les anciens cercles
    tracerAllCercles();

    canvas.addEventListener('click', (e) => {
        // on récupère les coordonnées de la souris
        let mouseX = e.clientX;
        let mouseY = e.clientY;
    
        // on crée un cercle à cet endroit
        creerCercle(mouseX, mouseY);
    
        // on enregistre les cercles dans le storage du navigateur
        saveCercles();
    });

    // réinitialisation du canvas au clic sur le bouton
    resetBtn.addEventListener('click', reset);
});

function tracerCercle(x, y, rayon, couleur) {
    ctx.fillStyle = couleur;
    ctx.beginPath();
    ctx.arc(x - 10, y - 80, rayon, 0, 2 * Math.PI);
    ctx.fill();
}

function tracerAllCercles() {
    cercles.forEach((val, i) => {
        cercle = cercles[i];
        tracerCercle(cercle.x, cercle.y, cercle.rayon, cercle.couleur);
    });
}

function creerCercle(mouseX, mouseY) {
    // on défini les paramètres du cercle
    let x = mouseX;
    let y = mouseY;
    let rayon = Math.floor(Math.random() * 100);
    let couleur = 'rgb(10,' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';

    // on trace le cercle
    tracerCercle(x, y, rayon, couleur);

    // on enregistre les paramètres du cercle dans un tableau
    cercles[cercles.length] = {
        x: x,
        y: y,
        rayon : rayon,
        couleur: couleur
    }
}

function saveCercles() {
    cerclesToSave = JSON.stringify(cercles);
    ls.setItem('cercles', cerclesToSave);
}

function getCercles() {
    cerclesToReturn = JSON.parse(ls.getItem('cercles'));
    return cerclesToReturn;
}

function reset() {
    // on nettoie le canvas
    ctx.clearRect(0, 0, 600, 600);

    // on réinitialise la valeur du tableau de cercles en local
    cercles = [];

    // et dans le storage
    saveCercles();
}

