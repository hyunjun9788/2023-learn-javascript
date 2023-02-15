----------------------map-------------------
const array = [1,2,3,4,5,6,7,8]

const squared =[]
array.forEach(n=>{
  squared.push(n*n)
})
for(let i =0; i< array.length; i++){
  squared.push(array[i]*array[i])
}

const square = n => n*n
const squared = array.map(square)
console.log(squared)


const items = [
  {
    id:1,
    text:'hello'
  },
  {
    id:2,
    text:'bye'
  }
]
const texts = items.map(item => item.text)
console.log(texts)

-------------------------indexOf, findIndex, find -----------------

const superheroes = [
  '아이언맨',
  '캡틴 아메리카',
  '토르',
  '닥터 스트레인지'
]
const index = superheroes.indexOf('토르')
console.log(index)

const todos = [
  {
    id:1,
    text: '자바스크립트 입문',
    done:true
  },
  {id:2,
  text:'함수 배우기',
  done:true,
},
{
  id:3,
  text:'객체와 배열 배우기',
  done:true,
},
{
  id:4,
  text: '배열 내장함수 배우기',
  done: false
}
]

const index = todos.findIndex(todo => todo.id ===3)
console.log(index)

const index = todos.find(todo => todo.done ===false)
console.log(index)

------------------------filter------------------
const todos = [
  {
    id:1,
    text: '자바스크립트 입문',
    done:true
  },
  {id:2,
  text:'함수 배우기',
  done:true,
},
{
  id:3,
  text:'객체와 배열 배우기',
  done:true,
},
{
  id:4,
  text: '배열 내장함수 배우기',
  done: false
}
]

const tasksNotDone = todos.filter(todo => todo.done)
console.log(tasksNotDone)


---------------------------splice와 slice(기존 배열 바뀌지 않음)-----------------

const numbers = [10, 20, 30, 40]
const index = numbers.indexOf(30)
const spliced = numbers.splice(index, 2)
console.log(spliced)
console.log(numbers)

const sliced = numbers.slice(0,2)
console.log(sliced)
console.log(numbers)

--------------------shift(맨 앞 제외), pop(맨 뒤 제외, push랑 쌍), unshift(맨 앞 추가), ------------------
const numbers = [10,20,30,40]

const value = numbers.shift()
console.log(value)

const value = numbers.pop()

numbers.unshift(5)
console.log(numbers)

---------------------concat(기존의 배열 수정X), join------------------
const arr1= [1,2,3]
const arr2 = [4,5,6]

const concated =arr1.concat(arr2)
console.log(concated)
console.log(arr2)

const array = [1,2,3,4,5]
console.log(array.join())
console.log(array.join('  '))

-------------reduce--------------

const numbers = [1,2,3,4,5]

let sum = 0
numbers.forEach(n => {
  sum += n;
})
console.log(sum)

const avg = numbers.reduce((accumulator, current, index, array)=> {
  if(index === array.length-1){
    return (accumulator + current) / array.length
  }
  return accumulator + current
}, 0)
console.log(avg)