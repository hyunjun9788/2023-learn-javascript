function add(a,b){
    return a+b;
}

const sum = add(1,2)
console.log(sum)

function hello(name){
    console.log('Hello, '+name+'!')
}

hello('nam')


----------------Template Literal------------
    function hello(name){
        return `Hello ${name}!`
    }

const result = hello('velopert')
console.log(result)


function getGrade(score){
    if (score === 100){
        return 'A+'
    } else if (score >= 90){
        return 'A'
    } else if (score === 89){
        return 'B+'
    } else if (score >= 80){
        return 'B'
    } else if (score ===79) {
        return 'C+'
    } else if (score >= 70) {
        return 'C'
    } else if(score ===69){
        return 'D+'
    } else if (score >= 60){
        return 'D'
    } else {
        return 'F'
    }
}

const grade = getGrade(89)
console.log(grade)

---------화살표 함수--------------
const add = (a,b) => {
    return a+b
}

const hello = (name) => {
    console.log(`Hello, ${name}!`)
}
hello('nam')

const sum = add(1,2)
console.log(sum)

const add = (a,b) => a+b
const sum = add(1,2)
console.log(sum)