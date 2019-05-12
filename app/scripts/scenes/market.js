export default class Market extends Phaser.Scene {
  /**
   *  My custom scene.
   *
   *  @extends Phaser.Scene
   */
   constructor() {
    super();
    this.error = "";
    this.market = [

    {
      name: "mosquito",
      frenchName: "Moustique",
      price: 100,
      score: 10,
      delay: 1000,
      posY: 70,
      bonus: 0,
      bonusText: '',
      picture: "mosquito.png",
      description:
      "Fléau de l’été, son \n« bzzziiiiiii » nocturne\nannonce un très mauvais\nsommeil en perspective.\nPourtant, il a autre rôle \nnettement moins connu:\nla pollinisation."
    },
    {
      name: "ladybug",
      frenchName: "Coccinelle",
      price: 300,
      score: 50,
      delay: 2000,
      posY: 185,
      bonus: 0,
      bonusText: '',
      picture: "ladybug.png",
      description:
      "Etant dans les premières \nà sortir de leurs refuges\nd'hiver (à partir de 12°),\nles coccinelles affaiblies \npas la trêve hivernale \nrecherchent à se refaire une\nsanté avec le pollen et le \nnectar des fleurs."
    },
    {
      name: "butterfly",
      frenchName: "Papillon",
      price: 900,
      score: 90,
      delay: 4000,
      posY: 300,
      bonus: 0,
      bonusText: '',
      picture: "butterfly.png",
      description:
      "Comme les abbeilles, les \npapillons pollinisent \nnos cultures. Le jour, \nles papillons se mêlent aux \nautres insectes pollinisateurs. \nPar contre, la nuit, \nles papillons nocturnes sont, \navec quelques coléoptères, \nles seules en activité."
    },
    {
      name: "bee",
      frenchName: "Abeille",
      price: 1000,
      score: 100,
      delay: 5000,
      posY: 420,
      bonus: 0,
      bonusText: '',
      picture: "bee.png",
      description:
      "Ce sont les abeilles qui \nassurent le meilleur \nransport des grains \nde pollen de fleur \nen fleur. Une abeille \npeut: stocker sur une seule \nde ses pattes postérieures \n500 000 grains de pollen, \nvisiter en une 1 heure 250 \nfleurs !"
    },
    {
      name: "hive",
      frenchName: "Ruche",
      price: 1000000,
      score: 1000,
      delay: 1000,
      posY: 540,
      bonus: 0,
      bonusText: '',
      picture: "transparent-bee-pixel-5.png",
      description:
      "Les ruches peuvent contenir \nentre 15 000 et 60 000 \nabeilles qui peuvent \nparcourir environ 30km/h."
    }

    ];
  }

  /**
   *  Called when this scene is initialized.
   *
   *  @protected
   *  @param {object} [data={}] - Initialization parameters.
   */

   init() {}

  /**
   *  Used to declare game assets to be loaded using the loader plugin API.
   *
   *  @protected
   */

    preload() {
      this.load.image("flower", "flower.jpg");
      this.market.forEach(({ name, picture }) => this.load.image(name, picture));
      this.load.image("btn_bee", "bee_btn.png");
      this.load.image("btn_mosquito", "mosquito_btn.png");
      this.load.image("btn_butterfly", "butterfly_btn.png");
      this.load.image("btn_hive", "hive_btn.png");
      this.load.image("btn_ladybug", "ladybug_btn.png");
      this.load.script(
        "Bangers",
        "https://fonts.googleapis.com/css?family=Bangers"
        );
    }

  /**
   *  Responsible for setting up game objects on the screen.
   *
   *  @protected
   *  @param {object} [data={}] - Initialization parameters.
   */

    create(data) {
      this.add.image(100, 500, "aide");
      this.score = data.score;
      this.registry.events.on("changedata", this.handle, this);
      this.market.forEach(
        ({
          name,
          price,
          score,
          delay,
          posY,
          frenchName,
          bonus,
          bonusText,
          description
        }) => {
          const button = this.createButton(posY, name);
          this.setEventButton(
            button,
            price,
            delay,
            score,
            name,
            frenchName,
            bonus,
            posY,
            bonusText,
            description
            );
        }
        );
    }

    handle(parent, key, data) {
      this.score = data;
    }

  /**
   *  Handles updates to game logic, physics and game objects.
   *
   *  @protected
   *  @param {number} t - Current internal clock time.
   *  @param {number} dt - Time elapsed since last update.
   */

   update(/* t, dt */) {}
  /**
   *  Called after a scene is rendered. Handles rendenring post processing.
   *
   *  @protected
   */

   render() {}

  /**
   *  Called when a scene is about to shut down.
   *
   *  @protected
   */
   shutdown() {}

  /**
   *  Called when a scene is about to be destroyed (i.e.: removed from scene
   *  manager). All allocated resources that need clean up should be freed up
   *  here.
   *
   *  @protected
   */
   destroy() {}


  createButton(posY, text) {

    return this.add
      .image(this.cameras.main.width - 150, posY, `btn_${text}`)
      .setScale(0.2, 0.2);
  }

  addError(frenchName) {

    if (this.error !== "") {
      if (this.bulle !== undefined) {
        this.bulle.destroy();
      }
      this.bulle = this.add.image(150, 300, "bulle").setScale(0.45);
      this.error.destroy();
      this.error = this.add.text(
        30,
        250,
        `Pas assez de score pour \nacheter cette ${frenchName}`,
        { fill: "red" }
        );
      this.time.addEvent({ delay: 2000, callback: () => this.error.destroy() });
      this.time.addEvent({ delay: 2000, callback: () => {
        if (this.texte !== undefined) {
          this.texte.destroy();
        }
        if (this.close !== undefined) {
          this.close.destroy();
        }
        this.bulle.destroy()
      }
    });
    } else {   
      if (this.bulle !== undefined) {
        this.bulle.destroy();
      }
      this.bulle = this.add.image(150, 300, "bulle").setScale(0.45);
      this.error = this.add.text(
        30,
        250,
        `Pas assez de score pour \nacheter cette ${frenchName}`,
        { fill: "red" }
        );
      this.time.addEvent({ delay: 2000, callback: () => this.error.destroy() });
      this.time.addEvent({ delay: 2000, callback: () => { 
        if (this.texte !== undefined) {
          this.texte.destroy();
        }
        if (this.close !== undefined) {
          this.close.destroy();
        }
        this.bulle.destroy()
      } 
    });
    }
  }

  setEventButton(
    button,
    price,
    delay,
    score,
    name,
    frenchName,
    bonus,
    posY,
    bonusText,
    description
    ) {
    button.setInteractive();
    button.on("pointerover", () => {
      console.log('in')
      this.sys.canvas.style.cursor = "pointer"
    })
    button.on("pointerout", () => {
      this.sys.canvas.style.cursor = "default"
    })
    button.on("pointerup", () => {
      if (this.score < price) {
        this.addError(frenchName);
      } else {
          this.score -= price;
          this.registry.set('score', this.score);
          bonus++;
          if(bonusText === '') {
            bonusText = this.add.text(this.cameras.main.width - 65, posY - 50, `X${bonus}`,
            {
              font: "20px 'Bangers'"
            })
          } else {
            bonusText.setText(`X${bonus}`)
          }
          this.timer = this.time.addEvent({
            delay: delay,
            loop: true,
            callback: () => this.updateCounter(score),
            callbackScope: this
          });
          this.addSprite(name, bonus);
          this.addBulle(description);
      }
    });
  }

  addBulle(description) {
    if (this.bulle !== undefined) { 
      this.bulle.destroy();
    }    
    if (this.texte !== undefined) { 
      this.texte.destroy();
    }
    if (this.close !== undefined) { 
      this.close.destroy();
    }
    this.bulle = this.add.image(150, 300, "bulle").setScale(0.45);

    this.texte = this.add.text(30, 195, description, { fill: "black" });
    this.close = this.add
    .image(300, 390, "close")
    .setInteractive()
    .setScale(0.4)
    .on("pointerdown", () => {
      this.close.destroy();
      this.bulle.destroy();
      this.texte.destroy();
    })
    .on("pointerover", () => {
      this.sys.canvas.style.cursor = "pointer"
    })
    .on("pointerout", () => {
      this.sys.canvas.style.cursor = "default"
    })
  }

  addSprite(picture) {
    const x = this.cameras.main.width / 2;
    const y = this.cameras.main.height / 2;
    if (picture === "mosquito") {
      this.add.sprite(x - 50, y + 150, picture).setScale(0.2, 0.2);
    } else if (picture === "ladybug") {
      this.add.sprite(x + 195, y + 150, picture)
      .setScale(0.2, 0.2)
      .setRotation(15);
    } else if (picture === "bee") {
      this.add.sprite(x + 50, y + 100, picture)
      .setScale(0.2, 0.2)
      .setRotation(50);
    } else if (picture === "butterfly") {
      this.add.sprite(x - 180, y + 250, picture)
      .setScale(0.3, 0.3)
      .setRotation(25);
    }else if (picture === "hive") {
      this.add.sprite(x + 80 , y + 230, picture).setScale(0.5, 0.5);
    }
  }

  updateCounter(number) {
    this.score += number;
    this.registry.set("score", this.score);
  }
}
