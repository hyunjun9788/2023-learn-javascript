---------------------------비구조화 할당------------
const object = {a:1, b:2}
const {a,b}=object
console.log(a)
console.log(b)

function print({a,b=2}){
  console.log(a)
  console.log(b)
}
print(object)

const {a,b=2} = object
console.log(a)
console.log(b)

const animal={
  name:'멍멍이',
  type:'개'
}
const {name:nickname} = animal
console.log(nickname)

const array = [1,2]

const [one,two]=array

console.log(one)
console.log(two)

const deepObject = {
  state:{
    information:{
      name: 'velopert',
      languages: ['Korean','english']
    }
  },
  value:5
}

const {name, languages} = deepObject.state.information
const {value}= deepObject

const extracted = {
  name,
  languages,
  value
}
console.log(extracted)