// ------------------spread-------------
const slime={
  name:'슬라임'
}
const cuteSlime = {
  ...slime,
  attribute:'cute'
}

const purpleCuteSlime={
  ...cuteSlime,
  color:'purple'
}
const greenCuteSlime = {
  color:'green',
  ...purpleCuteSlime,
}

console.log(greenCuteSlime)

const animals = ['개','고양이','참새']
const anotherAnimals=[...animals,'비둘기']

const numbers=[1,2,3,4,5]
const spreadNumbers = [...numbers,1000,...numbers]

// --------------------rest--------------------

const purpleCuteSlime = {
  name : '슬라임',
  attribute : 'cute',
  color:'purple'
}

const {color,...cuteSlime}=purpleCuteSlime
console.log(cuteSlime)

const { attribute,...slime}=cuteSlime
console.log(slime)

const numbers = [0,1,2,3,4,5,6]

const [one, ...rest] = numbers
console.log(one)
console.log(rest)

function sum(...rest){
  return rest.reduce((acc,current) => acc + current,0)
}
console.log(sum(1,2,3,4,5,6,7,8))

function sum(...rest){
  return rest.reduce((acc,current)=>acc+current,0)
}
const numbers=[1,2,3,4,5,6,7,8]
console.log(sum(...numbers))