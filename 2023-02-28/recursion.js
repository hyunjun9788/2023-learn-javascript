


function sumTo(n){
    let sum = 0
    for (let i =1; i<=n;i++){
        sum+=i
    }
    return sum
}

alert(sumTo(100))


function sumTo(n){
    if(n==1) return 1;
    return n + sumTo(n-1)
}

alert(sumTo(100))
-----------팩토리얼--------------------

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

alert( factorial(5) ); // 120
-----------------------------------------
재귀

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};


function printReverseList(list){
    if(list.next){
        printReverseList(list.next)}
    alert(list.value)
}

printReverseList(list)

반복문

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printReverseList(list){
    let arr =[]
    let tmp = list

    while (tmp){
        arr.push(tmp.value)
        tmp = tmp.next}

    for (let i = arr.length-1;i>=0;i--){
        alert(arr[i])
    }
}
printReverseList(list)