
// -------------비동기 처리------------

function work(callback) {
  setTimeout(() => {
    const start = Date.now()
    for (let i = 0; i < 1000000000; i++){
    }


  const end = Date.now()
  console.log(end - start +'ms')
  callback(end - start)
},0)
}

console.log('작업 시작!')
work((ms)=>{
  console.log('작업이 끝났어요!')
  console.log(ms + 'ms 걸렸다고 해요.')
})
console.log('다음 작업')

// ----------------promise-------------------

const myPromise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    reject(new Error())
  },1000)
})

myPromise.then(result=>{
  console.log(result)
}).catch(e=>{
  console.error(e)
})


function increaseAndPrint(n){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const value = n+1
      if(value===5){
        const error = new Error()
        error.name = 'ValueIsFiveError'
        reject(error)
        return
      }
      console.log(value)
      resolve(value)
    },1000 )
  })
}


increaseAndPrint(0).then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.catch(e=>{
  console.error(e)
})

// -----------------------async/await--------------

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve ,ms))
}

async function makeError(){
  await sleep(1000)
  const error = new Error()
  throw error
}

async function process(){
  try{
    await makeError()
  }catch(e){
    console.log(e)

  }
}

process()

// ------------------promise race, promise all-----------------

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve ,ms))
}

const getDog = async () =>{
  await sleep(1000)
  return '멍멍이'
}

const getRabbit = async() => {
  await sleep(500)
  return '토끼'
}

const getTurtle = async () => {
  await sleep(3000)
  return '거북이'
}
async function process(){
  const [dog, rabbit, turtle] =await Promise.all([getDog(),getRabbit(),getTurtle()])
  console.log(dog)
  console.log(rabbit)
  console.log(turtle)
}
async function process(){

    try{
      const rabbit = await Promise.race([getDog(), getRabbit(),getTurtle()])
    } catch(e){
      console.log(e)
    }
}

process()
