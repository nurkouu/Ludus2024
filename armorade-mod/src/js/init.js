const config = {
    type: Phaser.AUTO,
    parent: "canvas-wrapper",
    width: 800,
    height: 600,
    transparent: true,
    pixelArt: true,
    scene: [Intro, Jeu, Credits, Comment_jouer, Partie_terminee, Victoire]
};
const game = new Phaser.Game(config);