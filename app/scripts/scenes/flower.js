/* eslint-disable */
export default class Flower extends Phaser.Scene {
  /**
   *  My custom scene.
   *
   *  @extends Phaser.Scene
   */
  constructor() {
    super();
    this.flower;
  }

  /**
   *  Called when this scene is initialized.
   *
   *  @protected
   *  @param {object} [data={}] - Initialization parameters.
   */
  init() {
  }

  /**
   *  Used to declare game assets tonpm start be loaded using the loader plugin API.
   *
   *  @protected
   */

  preload() {}

  /**
   *  Responsible for setting up game objects on the screen.
   *
   *  @protected
   *  @param {object} [data={}] - Initialization parameters.
   */
  create(data) {
    this.score = data.score;
    this.anims.create({
      key: "snooze",
      frames: [
        { key: "fleur1" },
        { key: "fleur2" },
        { key: "fleur3" , duration: 10 }
      ],
      frameRate: 15
    });
    const x = this.cameras.main.width / 2;
    const y = this.cameras.main.height / 2;
    this.flower = this.add.sprite(x, y, "fleur1").setScale(2);
    this.flower.on("pointerover", () => {
      this.sys.canvas.style.cursor = "pointer"
    })
    this.flower.on("pointerout", () => {
      this.sys.canvas.style.cursor = "default"
    })
    this.flower.on("pointerdown", () => {
      this.score++;
      this.registry.set("score", this.score);
      this.bounce(this.flower);
    });
    this.registry.events.on("changedata", this.handle, this);
    this.flower.setInteractive();
  }

  handle(parent, key, data) {

  }

  bounce(flower) {
    flower.play("snooze");
  }
  /**
   *  Handles updates to game logic, physics and game objects.
   *
   *  @protected
   *  @param {number} t - Current internal clock time.
   *  @param {number} dt - Time elapsed since last update.
   */

  update() {
    this.flower.angle += 1
  }

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
}
