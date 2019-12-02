//精灵的基类，负责初始化精灵加载的资源和大小以及位置
// alt + j 选中多个相同字符串
import DataStore from "./DataStore.js";

/**
 * ctx : canvas画布
 * img : 图片资源
 * srcX : 要剪裁的x坐标
 * srcY : 要剪裁的y坐标
 * srcW : 要剪裁的宽度
 * srcH : 要剪裁的高度
 * x : 中心资源在canvas上的摆放x坐标
 * y : 中心资源在canvas上的摆放y坐标
 * width：剪裁完后要使用的宽度
 * height：剪裁完后要使用的高度
 */
export default class Sprite {
    constructor(img = null, srcX = 0, srcY = 0, srcW = 0, srcH = 0, x = 0, y = 0, width = 0, height = 0) {
        //赋值到类的原型链上
        this.dataStore = DataStore.getInstance();
        this.ctx = this.dataStore.ctx;
        this.img = img;
        this.srcX = srcX;
        this.srcY = srcY;
        this.srcW = srcW;
        this.srcH = srcH;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height
    }

    static getImage(key) {
        return DataStore.getInstance().res.get(key);
    }

    draw(img = this.img,
         srcX = this.srcX,
         srcY = this.srcY,
         srcW = this.srcW,
         srcH = this.srcH,
         x = this.x,
         y = this.y,
         width = this.width,
         height = this.height
         ) {
        this.ctx.drawImage(img, srcX, srcY, srcW, srcH, x, y, width, height)
    }
}