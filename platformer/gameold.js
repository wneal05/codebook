let pl, curs, plats

new Phaser.Game({
    width: 683,
    height: 384,

    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 1800 },
            debug: false,
        },

    },

    scene: {
        preload() { //functions can be values
            this.load.image('bg', './assets/background.png')
            this.load.image('pl', './assets/ship.png')
            this.load.image('plat', './assets/platform.png')
        },

        create() {
            this.add.image(0, 0, 'bg').setOrigin(0, 0)
            pl = this.physics.add.sprite(100, 100, 'pl')
            pl.setCollideWorldBounds(true)
            pl.setBounce(0)

            plats = this.physics.add.staticGroup()
            plats.create(300, 300, "plat")
            plats.create(200, 200, "plat")
           

            this.physics.add.collider(pl, plats)

            curse = this.input.keyboard.createCursorKeys()

        },

        update() {
            if (curs.left.isDown) {
                pl.setVelocityX(-300)
            } else if (curs.right.isDown) {
                pl.setVelocityX(300)
            }

            if (pl.body.onFloor()) {
                pl.setDragX(1200)
                if (curs.up.isDown) {
                    pl.setVelocityY(-900)
                }
            } else {
                pl.setDragX(0)
            }


        }


     }
})

