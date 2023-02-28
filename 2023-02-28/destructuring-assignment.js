// 1.
//
// undefined
// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// }
//
// function toSalary(salaries){
//     let max = 0;
//
// }
// undefined
//
// 2.
// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// }
//
// function toSalary(salaries){
//     let max = 0;
//     let maxName = null
//
//     for(const [name, salary] of Object.entries(salaries)){
//         if(max<salary){
//             max = salary
//             maxName = name
//
//         }
//     }
//
//     return maxName
// }