import Sprite from "../base/Sprite.js";
import Director from "../Director.js";

export default class Pencil extends Sprite{
    constructor(image, top) {
        super(image, 0, 0,
            image.width, image.height,
            //刚好在右侧看不见的位置
            window.innerWidth, 0,
            image.width,
            image.height
            );
        this.top = top;
    }

    draw() {
        this.x = this.x - Director.getInstance().landSpeed;
        super.draw(this.img, 0, 0, this.img.width, this.img.height, this.x, this.y, this.img.width, this.img.height);
    }
}