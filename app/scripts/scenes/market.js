
export default class Market extends Phaser.Scene {
  /**
   *  My custom scene.
   *
   *  @extends Phaser.Scene
   */
  constructor() {
    super({key: 'Market'});
  }

  /**
   *  Called when this scene is initialized.
   *
   *  @protected
   *  @param {object} [data={}] - Initialization parameters.
   */
  init(data) {
    data.score = 100;
    data.scoreText = this.add.text(0,0, `score: ${data.score}`, {fontsize: '32px', fill: "#FFF"});
  }

  /**
   *  Used to declare game assets to be loaded using the loader plugin API.
   *
   *  @protected
   */
  preload() {
    this.load.image('flower', 'flower.jpg');
  }

  /**
   *  Responsible for setting up game objects on the screen.
   *
   *  @protected
   *  @param {object} [data={}] - Initialization parameters.
   */
  create(data) {
    const x = this.cameras.main.width / 2;
    const y = this.cameras.main.height / 2;
    const image = this.add.sprite(x, y, 'flower');
    const button = this.add.text(this.cameras.main.width - 200, 0, "ACHETE MA MERDE !!!", {
      font: '20px Arial',
      color: 'white',
    });

    button.setOrigin(0, 0)
    .setInteractive()

    button.on('pointerup', () => {
      data.score--
      data.scoreText.setText(`Score: ${data.score}`)
    })
    image.setInteractive();
    image.on('pointerup', () => {
      data.score++
      data.scoreText.setText(`Score: ${data.score}`)
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

}
