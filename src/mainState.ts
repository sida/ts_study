/// <reference path="../node_modules/phaser/typescript/phaser.d.ts"/>

class MainState extends Phaser.State {
    constructor() {
        super();
    }

    // init() -> preload() -> create()の順に呼び出され、
    // update()がメインループとなる

    init() {
        console.log("init()");
    }

    // おもにリソースファイルのダウンロードを行う
    preload() {
        console.log("preload()");
        // 背景画像.
        this.game.load.image('blue', 'images/blue.png');
        // キャラチップ.
        this.game.load.spritesheet('char', 'images/charactors32x32.png', 32, 32);

    }

    // おもにゲームオブジェクト関連の初期化を行う
    create() {
        console.log("create()");

        // 物理エンジンを有効にする
//        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        // 背景画像
        var background = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'blue');
        background.anchor.setTo(0.5, 0.5);
        background.scale.x = 6; // 6倍
        background.scale.y = 6; // 6倍

        // アニメーション
        var t = this.game.add.sprite(100, 100, 'char');
        t.anchor.setTo(0.5, 0.5);
        t.animations.add('wild_left', [21, 22, 23]);
        t.play('wild_left', 10, true);

        // アニメーション
        var t2 = this.game.add.sprite(200, 100, 'char');
        t2.anchor.setTo(0.5, 0.5);
        t2.animations.add('b_left', [90, 91, 92]);
        t2.play('b_left', 10, true);

        // 文字
        this.game.add.text(50,50,"123あいうえお", { font: "24px", fill: "#F00" });
    }

    // メインループ
    update() {
        console.log("update()");
    }
}

export { MainState };
