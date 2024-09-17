class Intro extends Phaser.Scene {

    constructor() {
        super({ key: "Intro" });
      }

    preload() {
        this.load.image("plan4", "/assets/bg/DarkForest_Background.png");
        this.load.image("plan3", "/assets/bg/DarkForest_Middleground.png");
        this.load.image("plan2", "/assets/bg/DarkForest_Shadow.png");
        this.load.image("plan1", "/assets/bg/DarkForest_Foreground.png");

        this.load.image("commencer", "/assets/ui/bouton/button_ui.png");

        this.load.image("logo", "/assets/logo/logo_epee.gif");

        this.load.image("bg_brown_credits", "/assets/ui/bouton/bg_brown_credits.png");
        this.load.image("bg_brown_cj", "/assets/ui/bouton/bg_brown_cj.png");
        this.load.image("button_audio_active", "/assets/ui/bouton/button_audio_active.png");
        this.load.image("button_audio_desactive", "/assets/ui/bouton/button_audio_desactive.png");
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

        
        
        /* Bouton commencer*/
        const commencer = this.add
        .image(config.width - 580, 300, "commencer")
        .setOrigin(0, 0)
        .setScale(4)
        .setCrop(32,0, 16, 16);


        commencer.setInteractive();

        commencer.on("pointerdown", () => {
        this.scene.start("Jeu");
        });


        /*Bouton Credits*/
        const bg_brown_credits = this.add
        .image(config.width - 630, 520, "bg_brown_credits")
        .setOrigin(0, 0)
        .setScale(0.4)


        bg_brown_credits.setInteractive();

        bg_brown_credits.on("pointerdown", () => {
        this.scene.start("Credits");
        });

        this.add.text(20, 20, "CRÉDITS", {fontSize: "20px", fill: "#006666", fontFamily:"Pixelify Sans"}).setOrigin(0, 0).setPosition(215, 545);


        /*Bouton Comment Jouer*/
        const bg_brown_cj = this.add
        .image(config.width - 360, 520, "bg_brown_cj")
        .setOrigin(0, 0)
        .setScale(0.4)


        bg_brown_cj.setInteractive();

        bg_brown_cj.on("pointerdown", () => {
        this.scene.start("Comment_jouer");
        });

        this.add.text(20, 20, "COMMENT JOUER?", {fontSize: "16px", fill: "#006666", fontFamily:"Pixelify Sans"}).setOrigin(0, 0).setPosition(460, 547);


        /*Bouton audio*/
        const button_audio_active = this.add
        .image(config.width - 140, 40, "button_audio_active")
        .setOrigin(0, 0)
        .setScale(3)


        button_audio_active.setInteractive();

        button_audio_active.on("pointerdown", () => {
        this.add.image(684, 61, "button_audio_desactive").setScale(3);
        });

 


        /*logo*/
        this.add.image(0, 0, "logo").setOrigin(0.5, 0.5).setPosition(80, 75).setScale(0.3);
        this.add.image(0, 0, "logo").setOrigin(0.5, 0.5).setPosition(80, 75).setScale(0.3).setFlipX(true);

        /*titre*/        
        this.add.text(20, 20, "ARMORADE", {fontSize: "100px", fill: "#009999", fontFamily:"Pixelify Sans"}).setOrigin(0, 0).setPosition(154, 204);
        this.add.text(20, 20, "ARMORADE", {fontSize: "100px", fill: "#006666", fontFamily:"Pixelify Sans"}).setOrigin(0, 0).setPosition(152, 202);
        this.add.text(20, 20, "ARMORADE", {fontSize: "100px", fill: "#003333", fontFamily:"Pixelify Sans"}).setOrigin(0, 0).setPosition(150, 200);



        }





    update() {

    }
}
