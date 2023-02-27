1.
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function sumSalaries(data){
    let sum=0
    for(let salary of Object.values(salaries)){
        sum+=salary}
    return sum}

alert(sumSalaries(salaries))

2.
function count(obj){
    return Object.keys(obj).length}

let user = {
    name:'John',
    age:30
}

alert(count(user))