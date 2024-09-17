class Partie_terminee extends Phaser.Scene {

    constructor() {
        super({ key: "Partie_terminee" });
    }

    preload() {
        this.load.image("plan4", "/assets/bg/DarkForest_Background.png");
        this.load.image("plan3", "/assets/bg/DarkForest_Middleground.png");
        this.load.image("plan2", "/assets/bg/DarkForest_Shadow.png");
        this.load.image("plan1", "/assets/bg/DarkForest_Foreground.png");

        this.load.image("button_recommencer", "/assets/ui/bouton/button_recommencer.png");
        this.load.image("button_quitter", "/assets/ui/bouton/button_quitter.png");

        this.load.image("logo", "/assets/logo/logo_epee.gif");
    }

    create() {
         /*Image de fond*/
         let scaleX = 0;
         let scaleY = 0;
         let scale = 0;
 
         this.plan4 = this.add.image(config.width / 2, config.height / 2, "plan4");
         scaleX = config.width / this.plan4.width;
         scaleY = config.height / this.plan4.height;
         scale = Math.max(scaleX, scaleY);
         this.plan4.setScale(scale);
 
         this.plan3 = this.add.image(config.width / 2, config.height / 2, "plan3");
         scaleX = config.width / this.plan3.width;
         scaleY = config.height / this.plan3.height;
         scale = Math.max(scaleX, scaleY);
         this.plan3.setScale(scale);
 
         this.plan2 = this.add.image(config.width / 2, config.height / 2, "plan2");
         scaleX = config.width / this.plan2.width;
         scaleY = config.height / this.plan2.height;
         scale = Math.max(scaleX, scaleY);
         this.plan2.setScale(scale);
 
         this.plan1 = this.add.image(config.width / 2, config.height / 2, "plan1");
         scaleX = config.width / this.plan1.width;
         scaleY = config.height / this.plan1.height;
         scale = Math.max(scaleX, scaleY);
         this.plan1.setScale(scale);
 
 
 
         /*logo*/
         this.add.image(0, 0, "logo").setOrigin(0.5, 0.5).setPosition(80, 75).setScale(0.3);
         this.add.image(0, 0, "logo").setOrigin(0.5, 0.5).setPosition(80, 75).setScale(0.3).setFlipX(true);
 
 
         /*titre*/        
         this.add.text(20, 20, "ARMORADE", {fontSize: "60px", fill: "#009999", fontFamily:"Pixelify Sans"}).setOrigin(0, 0).setPosition(254, 34);
        this.add.text(20, 20, "ARMORADE", {fontSize: "60px", fill: "#006666", fontFamily:"Pixelify Sans"}).setOrigin(0, 0).setPosition(252, 32);
        this.add.text(20, 20, "ARMORADE", {fontSize: "60px", fill: "#003333", fontFamily:"Pixelify Sans"}).setOrigin(0, 0).setPosition(250, 30);
         /*Quitter*/
         const button_recommencer = this.add
         .image(config.width - 540, 300, "button_recommencer")
         .setOrigin(0, 0)
         .setScale(4)
 
 
         button_recommencer.setInteractive();
 
         button_recommencer.on("pointerdown", () => {
         this.scene.start("Jeu");
         });

 
         /*Bouton menu principal*/
         const button_quitter = this.add
         .image(config.width - 340, 300, "button_quitter")
         .setOrigin(0, 0)
         .setScale(4)
 
 
         button_quitter.setInteractive();
 
         button_quitter.on("pointerdown", () => {
         this.scene.start("Intro");
         });
 
 
 
    }

    update() {}
}