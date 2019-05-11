export default class Title extends Phaser.Scene {
  /**
   *  My custom scene.
   *
   *  @extends Phaser.Scene
   */
   constructor() {
    super({key: 'Title'});
  }

  /**
   *  Called when this scene is initialized.
   *
   *  @protected
   *  @param {object} [data={}] - Initialization parameters.
   */
   init(/* data */) {
   }

  /**
   *  Used to declare game assets to be loaded using the loader plugin API.
   *
   *  @protected
   */
   preload() {
  }

  /**
   *  Responsible for setting up game objects on the screen.
   *
   *  @protected
   *  @param {object} [data={}] - Initialization parameters.
   */
   create(/* data */) {

    const particule = this.add.particles('red');
    const flame = particule.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD'
    })
    const x = this.cameras.main.width / 2;
    const y = this.cameras.main.height / 2;
    const bg = this.add.image(x, y, 'bg');
    const logo = this.physics.add.image(x, y - 100, 'start_bee')
      .setVelocity(100, -100)
      .setBounce(1, 1)
      .setCollideWorldBounds(true)
    flame.startFollow(logo);

    const label = this.add.text(300, 400, 'Pollinize All the things !', {
      font: '50px Arial',
      color: 'yellow',
      stroke: 'yellow',
      strokeThickness: 6
    });

    label
      .setOrigin(0.5, 0.5)
      .setInteractive();
    label.on('pointerup', ()=> this.scene.start('Game'));

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
