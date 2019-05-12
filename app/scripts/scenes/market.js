export default class Market extends Phaser.Scene {
  /**
   *  My custom scene.
   *
   *  @extends Phaser.Scene
   */
  constructor() {
    super();
    this.bonus = {
      mosquito: 0,
      bee: 0
    };
    this.error = "";
    this.market = [
      {
        name: "mosquito",
        frenchName: "Moustique",
        price: 100,
        score: 10,
        delay: 1000,
        posY: 70,
        picture: "mosquito.png",
        description:
          "Fléau de l’été, son « bzzziiiiiii » nocturne annonce un très mauvais sommeil en perspective. Pourtant, il a autre rôle nettement moins connu: la pollinisation. « Seule la femelle moustique se gave de sang, les moustiques se nourrissent normalement de nectar », détaille Claudio Lazzari. Les moustiques pollinisent peu et plutôt des fleurs ou des plantes non consommables. Les moustiques reprèsentent la famille des diptères qui comprennent aussi les syrphes, les bombyles mais également les mouches."
      },
      {
        name: "ladybug",
        frenchName: "Coccinelle",
        price: 300,
        score: 50,
        delay: 2000,
        posY: 185,
        picture: "ladybug.png",
        description:
          "Etant dans les premières à sortir de leurs refuges d'hiver (à partir de 12°), les coccinelles affaiblies pas la trêve hivernale recherchent à se refaire une santé avec le pollen et le nectar des fleurs, riches en protéines. La coccinelle représente les coléoptères qui représente tous les insectes avec des carapaces (coccinelle, scarabée, gendarmes, etc.). "
      },
      {
        name: "butterfly",
        frenchName: "Papillon",
        price: 900,
        score: 90,
        delay: 4000,
        posY: 300,
        picture: "butterfly.png",
        description:
          "Comme les abbeilles, les papillons pollinisent beaucoup nos cultures. Le jour, les papillons se mêlent aux autres insectes pollinisateurs. Par contre, la nuit, les papillons nocturnes sont, avec quelques coléoptères, les seules en activité. Le papillon représentent la famille des lépidoptères."
      },
      {
        name: "bee",
        frenchName: "Abeille",
        price: 1000,
        score: 100,
        delay: 5000,
        posY: 420,
        picture: "bee.png",
        description:
          "Ce sont surtout les abeilles qui assurent le meilleur transport des grains de pollen de fleur en fleur. Une abeille peut: stocker sur une seule de ses pattes postérieures 500 000 grains de pollen, visiter en une 1 heure 250 fleurs ! Elle participe à 71% de la pollinisation des plantes consommables, c’est dire à quel point elle joue un rôle majeur dans la pollinisation. Les abeilles reprèsentent la famille des hyménoptères qui englobent les abeilles qu’elles soient sauvages ou bien domestiques, les bourdons, les guêpes, mais également les fourmis"
      },
      {
        name: "hive",
        frenchName: "Ruche",
        price: 1000000,
        score: 1000,
        delay: 1000,
        posY: 540,
        picture: "transparent-bee-pixel-5.png",
        description:
          "Les ruches peuvent contenir entre 15 000 et 60 000 abeilles qui peuvent parcourir environ 30km/heure."
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
    this.load.image("btn_mosquito", "mosquito_btn.png")
    this.load.image("btn_butterfly", "butterfly_btn.png")
    this.load.image("btn_hive", "hive_btn.png")
    this.load.image("btn_ladybug", "ladybug_btn.png")
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
    this.market.forEach(({ name, price, score, delay, posY, frenchName }) => {
      const button = this.createButton(posY, name);

      this.setEventButton(button, price, delay, score, name, frenchName);
    });
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
    console.log(`btn_${text}`);
    return this.add
      .image(this.cameras.main.width - 150, posY, `btn_${text}`)
      .setScale(0.2, 0.2);
  }

  addError(frenchName) {
    if (this.error !== "") {
      this.error.destroy();
      this.error = this.add.text(
        120,
        0,
        `Pas assez de score pour acheter cette ${frenchName}`,
        { fill: "red" }
      );
      this.time.addEvent({ delay: 1000, callback: () => this.error.destroy() });
    } else {
      this.error = this.add.text(
        120,
        0,
        `Pas assez de score pour acheter cette ${frenchName}`,
        { fill: "red" }
      );
      this.time.addEvent({ delay: 1000, callback: () => this.error.destroy() });
    }
  }

  setEventButton(button, price, delay, score, name, frenchName) {
    button.setInteractive();
    button.on("pointerup", () => {
      if (this.score < price) {
        this.addError(frenchName);
      } else {
        this.score -= price;
        this.registry.set("score", this.score);
        this.bonus.bee++;
        this.timer = this.time.addEvent({
          delay: delay,
          loop: true,
          callback: () => this.updateCounter(score),
          callbackScope: this
        });
        this.addSprite(name);
      }
    this.addBulle();
    });
  }

  addBulle() {
    this.add.image(150, 300, "bulle").setScale(0.4);
    this.add.image(300, 370, "close").setScale(0.4);
  }

  addSprite(picture) {
    const x = this.cameras.main.width / 2;
    const y = this.cameras.main.height / 2;
    if (picture === "mosquito") {
      this.add.sprite(x - 100, y - 100, picture).setScale(0.2, 0.2);
    } else if (picture === "bee") {
      this.add.sprite(x - 250, y - 250, picture).setScale(0.2, 0.2);
    } else if (picture === "ladybug") {
      this.add.sprite(x - 150, y - 150, picture).setScale(0.1, 0.1);
    } else if (picture === "butterfly") {
      this.add.sprite(x - 200, y - 200, picture).setScale(0.2, 0.2);
    }else if (picture === "hive") {
      this.add.sprite(x - 300, y - 300, picture).setScale(0.2, 0.2);
    }

  }

  updateCounter(number) {
    this.score += number;
    this.registry.set("score", this.score);
  }
}
