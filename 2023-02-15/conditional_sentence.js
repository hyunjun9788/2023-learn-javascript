-----------------조건문 더 스마트하게 사용-----------
const isAnimal = text => ['고양이','개','거북이','너구리'].includes(text)
function isAnimal(text){
  const animals = ['고양이','개','거북이','너구리']
  return animals.includes(text)
}
console.log(isAnimal('개'))
console.log(isAnimal('노트북'))


function getSound(animal){
  const sounds = {
    개: '멍멍',
    고양이:'야옹',
    참새:'짹짹',
    비둘기: '구구구구'
  }
  return sounds[animal] || '...?'
}


function makeSound(animal){
  const tasks = {
    개: () => {
      console.log('멍멍!')
    },
    고양이(){
      console.log('야옹!')
    },
    비둘기(){
      console.log('구구구구')
    }
  }
  if (!tasks[animal]){
    console.log('...?')
    return
  }
  tasks[animal]()
}
makeSound('개')
makeSound('비둘기')
makeSound('인간')