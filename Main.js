//初始化整个游戏的精灵
import ResourceLoader from "./js/base/ResourceLoader.js";
import Director from "./js/Director.js";
import BackGround from "./js/runtime/BackGround.js";
import Land from "./js/runtime/Land.js";
import DataStore from "./js/base/DataStore.js";
import {Birds} from "./js/player/Birds.js";
import StartButton from "./js/player/StartButton.js";
import Score from "./js/player/Score.js";

export default class Main {
    constructor() {
        this.canvas = document.getElementById('game_canvas');
        this.ctx = this.canvas.getContext('2d');
        this.dataStore = DataStore.getInstance();
        this.director = Director.getInstance();
        const loader = ResourceLoader.create();
        loader.onLoaded(map => this.onResourceFirstLoaded(map));
    }


    onResourceFirstLoaded(map) {
        this.dataStore.ctx = this.ctx;
        this.dataStore.res = map;
        this.init();
    }

    init() {
        //先初始化游戏是没有结束的
        this.director.isGameOver = false;

        this.dataStore
            .put('pencils', [])
            .put('background', BackGround)
            .put('birds', Birds)
            .put('score', Score)
            .put('startButton', StartButton)
            .put('land', Land);
        //创建铅笔要在游戏运行之前
        this.director.createPencil();
        this.registerEvent();
        this.director.run();
    }

    registerEvent() {
        this.canvas.addEventListener('touchstart', e => {
            e.preventDefault();
           if (this.director.isGameOver) {
                this.init();
           } else {
               this.director.birdsEvent();
           }
        });
    }
}