--------------반복문 for----------------------
for  (let i =0; i < 10; i++){
  console.log(i)
}

const names = ['멍멍이','야옹이','멍뭉이']

for (let i = 0; i<names.length;i++){
  console.log(names[i])
}


---------------반복문 while-----------------
let i = 0;
let isFun = false

while (!isFun){
  console.log(i)
  i++
  if (i === 30){
    isFun=true
}
}

-------------------for..of, for..in-------------
const numbers = [10, 20, 30, 40, 50]

for (let number of numbers){
  console.log(number)
}


const doggy = {
  name: '멍멍이',
  sound: '멍멍',
  age: 2
}

for (let key in doggy) {
  console.log(`${key}: ${doggy[key]}`)
}

console.log(Object.entries(doggy))
console.log(Object.keys(doggy))
console.log(Object.values(doggy))

-------------------break, continue----------------

for(let i = 0; i<10; i++){
  if (i===2) continue;
  console.log(i)
  if( i===5) break
}
-------------------퀴즈------------------

function sumOf(numbers){
  let sum =0
  for (let i=0; i< numbers.length;i++){
    sum += numbers[i]
  }
  return sum
}

const result = sumOf([1,2,3,4,5])
console.log(result)
