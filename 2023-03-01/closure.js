function sum(a){

    return function(b){
        return a+b
    }
}
alert(sum(1)(2))
alert(sum(5)(-1))
---------------------------------------------------
(1) Filter inBetween
let arr = [1,2,3,4,5,6,7]

function inBetween(a,b){
    return function(x){
        return x>=a && x<=b
    }
}
alert(arr.filter(inBetween(3,6)))

(2)Filter inArray

let arr = [1,2,3,4,5,6,7]
function inArray(arr) {
    return function (x) {
    }
    return arr.includes(x)
}
alert(arr.filter(inArray([1,2,10])))


------------------------------------------------------
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(fieldName){
    return (a,b) => a[fieldName]>b[fieldName]?1:-1}

users.sort((a,b) => a.name > b.name? 1:-1)

users.sort((a,b) => a.age > b.age ? 1 : -1)

users.sort(byField('name'))
users.sort(byField('age'))