class Animal {
    constructor (name='无姓名', age = 0) {
        this.name = name;
        this.age = age;
    }
    say () {
        console.log(this.name, this.age);
    }
}
let cat = new Animal();
cat.say();

class Dog extends Animal{
    constructor(name, age) {
        super(name, age);
    }

    say() {
        super.say();
        console.log('汪汪汪');
    }
}

const dog = new Dog('狗狗', 2);
dog.say();