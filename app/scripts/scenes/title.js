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
   init(data) {
    this.data.music = this.sound.add('startup_sound');
    this.data.x = this.cameras.main.width / 2;
    this.data.y = this.cameras.main.height / 2;
    this.data.bg = this.add.image(this.data.x, this.data.y, 'bg1');
    this.data.play_button = this.add.image(this.data.x, this.data.y, 'play').setInteractive();
    this.data.logo = this.physics.add.image(this.data.x, this.data.y - 100, 'start_bee')
    .setVelocity(100, -100)
    .setBounce(1, 1)
    .setCollideWorldBounds(true);
    
    this.data.titre = this.add.text(this.data.x, 80, 'Polliclicker', {
      font: '80px Arial',
      color: 'yellow',
      stroke: 'black',
      strokeThickness: 8
    }).setOrigin(0.5, 0.5);
    
    this.data.label = this.add.text(this.data.x, 200, 'Pollinize All the things !', {
      font: '60px Arial',
      color: 'yellow',
      stroke: 'black',
      strokeThickness: 5
    })      
      .setOrigin(0.5, 0.5)
      .setInteractive();
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

    this.data.music.play();
    this.data.label

    this.data.label.on('pointerover', () => {this.data.label.setAlpha(1)})
    this.data.label.on('pointerout', () => this.data.label.setAlpha(0.5))

    this.data.play_button.alpha = 0.6;

    this.data.play_button.on('pointerover', () => { this.data.play_button.setAlpha(1); });
    this.data.play_button.on('pointerout', () => this.data.play_button.setAlpha(0.6));
    this.data.play_button.on('pointerup', () => { 
      this.scene.start('Flower');
      this.data.music.stop();
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
    // this.logo.angle += 1;
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
