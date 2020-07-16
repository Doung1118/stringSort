
let number = [5, 6, 0, 1, 2, 3, 12]


console.log(number.sort());


//[0, 1, 12, 2,3, 5, 6 ]

//發生：12會被排進去小於2  
//原因是 sort 語法是給予轉換成字串在排序



//Example: 

let number2 = [5, 6, 0, 1, 2, 3, 12]

function compareNumbers(a, b) {
  return a - b
}
//加入函數

console.log(number2.sort(compareNumbers));


//[0, 1, , 2,3, 5, 6 ,12 ]
//ok 排序ＯＫ