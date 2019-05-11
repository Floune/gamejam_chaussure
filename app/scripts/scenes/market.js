
export default class Market extends Phaser.Scene {
  /**
   *  My custom scene.
   *
   *  @extends Phaser.Scene
   */
  constructor() {
    super({key: 'Market'});
    this.bonus = {}
    this.score = 0;
  }

  /**
   *  Called when this scene is initialized.
   *
   *  @protected
   *  @param {object} [data={}] - Initialization parameters.
   */
  init(data) {
  }

  /**
   *  Used to declare game assets to be loaded using the loader plugin API.
   *
   *  @protected
   */
  preload() {
    this.load.image('flower', 'flower.jpg');
    this.load.image('bee', 'splash-bee.png');
  }

  /**
   *  Responsible for setting up game objects on the screen.
   *
   *  @protected
   *  @param {object} [data={}] - Initialization parameters.
   */
  create(data) {
    this.scoreText = this.add.text(0,0, `score: ${this.score}`, {fontsize: '32px', fill: "#FFF"});
    const x = this.cameras.main.width / 2;
    const y = this.cameras.main.height / 2;
    const image = this.add.sprite(x, y, 'flower');
    const button = this.add.text(this.cameras.main.width - 200, 0, "Abeille", {
      font: '20px Arial',
      color: 'white',
    });

    button.setOrigin(0, 0)
    .setInteractive()

    button.on('pointerup', () => {
        this.score--
        this.scoreText.setText(`Score: ${this.score}`)
        this.bonus.bee = 1;
        this.add.sprite(x - 100, y - 100, 'bee');
        this.timer = this.time.addEvent({delay: 1000, loop: true, callback: this.updateCounter, callbackScope: this});
    })
    image.setInteractive();
    image.on('pointerup', () => {
      this.score++
      this.scoreText.setText(`Score: ${this.score}`)
    });
  }

  /**
   *  Handles updates to game logic, physics and game objects.
   *
   *  @protected
   *  @param {number} t - Current internal clock time.
   *  @param {number} dt - Time elapsed since last update.
   */
  update(/* t, dt */) {
    if(this.bonus.bee > 0 && this.bonus.bee !== undefined) {
      this.timer.repeatCount;
    }
  }
  /**
   *  Called after a scene is rendered. Handles rendenring post processing.
   *
   *  @protected
   */
  render() {
  }

  /**
   *  Called when a scene is about to shut down.
   *
   *  @protected
   */
  shutdown() {
  }

  /**
   *  Called when a scene is about to be destroyed (i.e.: removed from scene
   *  manager). All allocated resources that need clean up should be freed up
   *  here.
   *
   *  @protected
   */
  destroy() {
  }

  updateCounter(){
    this.score++;
    this.scoreText.setText(`Score: ${this.score}`);
  }
}
