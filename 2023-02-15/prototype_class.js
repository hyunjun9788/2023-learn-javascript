---------------프로토타입-------------------

function Animal(type, name, sound){
  this.type =type
  this.name = name
  this.sound = sound
}

Animal.prototype.say = function() {
  console.log(this.sound)
}

Animal.prototype.sharedValue = 1

const dog = new Animal('개', '멍멍이' ,'멍멍')
const cat = new Animal('고양이',' 야옹이', '야옹')

dog.say()
cat.say()


function Animal(type, name, sound){
  this.type =type
  this.name = name
  this.sound = sound
}

Animal.prototype.say = function(){
  console.log(this.sound)
}

function Dog(name, sound){
  Animal.call(this, '개', name, sound)
}

function Cat(name, sound) {
  Animal.call(this, '고양이', name, sound)
}

Dog.prototype = Animal.prototype
Cat.prototype = Animal.prototype

const dog = new Dog('멍멍이','멍멍')
const cat = new Cat('야옹이','야옹')

dog.say()
cat.say()

------------------Class--------------------

class Animal {
  constructor(type,name,sound){
    this.type=type
    this.name = name
    this.sound = sound
  }
  say(){
    console.log(this.sound)
  }
}
class Dog extends Animal{
  constructor(name, sound){
    super('개',name, sound)
  }
}

class Cat extends Animal{
  constructor(name,sound){
    super('고양이',name,sound)
  }
}

const dog = new Dog('멍멍이','멍멍')
const cat = new Cat('야옹이','야옹')
const cat2 = new Cat('야오오오오옹이', '야오오오옹옹')
dog.say()
cat.say()

class Food {
  constructor(name){
    this.name =name
    this.brands =[]
  }
  addBrand(brand){
    this.brands.push(brand)
  }
  print (){
    console.log(`${this.name}을/를 파는 음식점들`)
    console.log(this.brands.join(', '))
  }
}

const pizza = new Food('피자')
pizza.addBrand('피자헛')
pizza.addBrand('도미노 피자')

const chicken = new Food('치킨')
chicken.addBrand('굽네치킨')
chicken.addBrand('BBQ')

pizza.print()
chicken.print()