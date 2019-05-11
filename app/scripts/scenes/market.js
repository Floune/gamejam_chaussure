
export default class Market extends Phaser.Scene {
  /**
   *  My custom scene.
   *
   *  @extends Phaser.Scene
   */
  constructor() {
    super({key: 'Market'});
    this.bonus = {
      mosquito: 0,
      bee: 0,
    };
    this.score = 1000;
    this.market = [
      {
        name: 'Mosquito',
        price: 100,
        score: 10,
        delay: 1000,
        posY: 0
      },
      {
        name: 'Bee',
        price: 1000,
        score: 100,
        delay: 5000,
        posY: 30
      }
    ]
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
    this.scoreText = this.add.text(0, 0, `Score: ${this.score}`);
    this.market.forEach(  ({ name, price, score, delay, posY }) => {
      const button = this.createButton(posY, name);
      this.setEventButton(button, price, delay, score);
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

  createButton(posY, text){
    return this.add.text(this.cameras.main.width - 200, posY, text, this.styleButton);
  }

  setEventButton(button, price, delay, score){
    button.setInteractive();
    button.on('pointerup', () => {
      this.score -= price;
      this.scoreText.setText(`Score: ${this.score}`);
      this.bonus.bee ++;
      this.timer = this.time.addEvent({delay: delay, loop: true, callback: () => this.updateCounter(score), callbackScope: this});
      console.log(this.timer);
    })
  }

  updateCounter(number){
    this.score += number;
    this.scoreText.setText(`Score: ${this.score}`);
  }
}
