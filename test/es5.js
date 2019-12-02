(function () {
    'use strict';
    //函数声明

    //不推荐
    // function Animal() {
    //
    // }

    var Animal = function (name, age) {
        this.name = name;
        this.age = age;
        // this.say = function () {
        //     console.log(this.name + '   ' + this.age);
        // }
    };
    Animal.prototype.say = function () {
        console.log(this.name + '   ' + this.age);
    }

    var cat = new Animal('小猫', 5);
    cat.say();

    //call(), apply()
    //调用一个对象的一个方法，用另一个对象替换当前对象

    Animal.prototype.say.call(cat);
    var params = {
        name: '小猫2',
         age: 4
    };
    cat.say.call(params);

    //寄生组合继承
    var Dog = function (name, age) {
        Animal.apply(this, arguments);
    };
    //浅克隆
    Dog.prototype = Object.create(Animal.prototype);
    Dog.prototype.say = function () {
        Animal.prototype.say.apply({name: '父类名字', age: 10});
        console.log('这是子类的名字' + this.name);
    };

    var dog = new Dog('小狗', 4);
    dog.say();
})();