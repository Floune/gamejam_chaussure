/* eslint-disable */
export default class SplashScreen extends Phaser.Scene {
  /**
   *  Takes care of loading the main game assets, including textures, tile
   *  maps, sound effects and other binary files, while displaying a busy
   *  splash screen.
   *
   *  @extends Phaser.Scene
   */
  constructor() {
    super({
      key: "SplashScreen",

      //  Splash screen and progress bar textures.
      pack: {
        files: [
          {
            key: "splash-screen",
            type: "image"
          },
          {
            key: "progress-bar",
            type: "image"
          }
        ]
      }
    });
  }

  /**
   *  Show the splash screen and prepare to load game assets.
   *
   *  @protected
   */
  preload() {
    //  Display cover and progress bar textures.
    this.showCover();
    this.showProgressBar();
    this.load
      .image("start_bee", "bee.png")
      .image("red", "red.png")
      .image("bee1", "bee_btn1.png")
      .image("bee2", "bee_btn2.png")
      .image("play", "PNG/btn/play.png")
      .image("plus", "PNG/settings/97.png")
      .image("minus", "PNG/settings/98.png")
      .image("bg1", "bg1.jpg")
      .image("aide", "aide.png")
      .image("close", "PNG/btn/close.png")
      .image("fleur2", "flower2.png")
      .image("fleur1", "flower3.png")
      .image("fleur3", "flower31.png")
      .image("bulle", "PNG/clouds/4.png")
      .image("fleur4", "flower4.png")
      .image("back", "PNG/btn/prew.png")
      .image("background", "layer07_Sky.png")
      .image("flower", "flower.png")
      .image("pause", "PNG/btn/pause.png");
    this.load.audio("startup_sound", "Bee-noise.mp3");

    //  HINT: Declare all game assets to be loaded here.
  }

  /**
   *  Set up animations, plugins etc. that depend on the game assets we just
   *  loaded.
   *
   *  @protected
   */
  create() {
    //  We have nothing left to do here. Start the next scene.
    this.scene.start("Title");
  }

  //  ------------------------------------------------------------------------

  /**
   *  Show the splash screen cover.
   *
   *  @private
   */
  showCover() {
    this.add.image(0, 0, "splash-screen").setOrigin(0);
  }

  /**
   *  Show the progress bar and set up its animation effect.
   *
   *  @private
   */
  showProgressBar() {
    //  Get the progress bar filler texture dimensions.
    const { width: w, height: h } = this.textures.get("progress-bar").get();

    //  Place the filler over the progress bar of the splash screen.
    const img = this.add.sprite(82, 282, "progress-bar").setOrigin(0);

    //  Crop the filler along its width, proportional to the amount of files
    //  loaded.
    this.load.on("progress", v => img.setCrop(0, 0, Math.ceil(v * w), h));
  }
}
