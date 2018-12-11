
const keys = 'LEFT,RIGHT,UP,DOWN,SPACE,W,A,S,D'
let pl, plats, k

function preload() {
  this.load.image('bg', './assets/background.png')
  this.load.image('pl', './assets/ship.png')
  this.load.image('plat', './assets/platform.png')
}

function create() {
  this.add.image(0, 0, 'bg').setOrigin(0, 0)

  pl = this.physics.add.sprite(100, 100, 'pl')
  pl.setCollideWorldBounds(true)
  pl.setBounce(0)

  plats = this.physics.add.staticGroup()
  plats.create(300, 300, "plat")
  plats.create(200, 200, "plat")

  this.physics.add.collider(pl, plats)

  k = this.input.keyboard.addKeys(keys)
}

function update() {

    if (k.down.LEFT.isDown)
    pl.setVelocityX(-300)
 }

 else if (k.RIGHT.isDown) {
   pl.setVelocityY(300)
 }





let config = {
  width: 683,
  height: 384,
  scene: { preload, create, update },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 1800 },
      debug: false,
    },
  },
}

new Phaser.Game(config)
