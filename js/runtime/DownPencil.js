//下半部分铅笔类
import Sprite from "../base/Sprite.js";
import Pencil from "./Pencil.js";

export default class DownPencil extends Pencil{
    constructor(top) {
        const image = Sprite.getImage('pencilDown');
        super(image, top);
    }

    draw() {
        let gap = window.innerHeight / 5;
        this.y = this.top + gap;
        super.draw();
    }
}