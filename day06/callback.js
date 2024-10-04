// 두 수를 더해서 출력 하기 

// const add = (num1, num2, callback)=> {
//      callback(num1 + num2);
// }

// const print = (value) => {
//     console.log(value);
// }


// 성과 이름을 받아서 연결하고 출력해주는 함수

// function getFullName(lastName, firstName,callback){
//      callback(lastName + firstName);
// }



// 두 수를 더하고 홀짝 비교 후 출력

// function add(num1,num2,callback){
//     callback(num1 + num2);
// }

// function isOdd(num1,callback){
//     let result = num1%2 ==0 ? "짝수" : "홀수";
//     callback(result);
// }



// const sum = (num1, num2, callback) => {
//     callback(num1 + num2);
// }

// sum(10,20,print);

// const mul = (num1, num2, callback) =>{
//     callback(num1*num2);
// }

// mul(10,20,print);


// function getFullName(lastName,firstName,callback){
//     callback(lastName + firstName);
// }

// function welcome(name) {
//     console.log(name +"님 환영합니다.");
// }

// getFullName("염","승엽",welcome);



// function isOdd(num1, callback){
//     let result = "";
//     if(num1%2 ==1) {
//         result = "이 수는 홀수 입니다."
//     }else{
//         result = "이 수는 짝수 입니다."
//     }
//     callback(result);
// }

// function print1 (result) {
//     console.log(result);
// }

// sum(11,20, (result) => {
//     isOdd(result,print1);
// });


// =================================================

//  두 정수의 곱셈을 구한뒤 결과에 2를 곱해서 출력
 function multy(num1, num2 ,callback){
    callback(num1*num2);
 }

 function double(num3, callback){
    callback(num3*2);
 }

 function print2(result,callback){
    console.log(result);
 }

//  multy(2,10,(num3)=>{
//     double(num3,print2)
//  });

//  multy(2,10,function(num3){
//     double(num3,print2)
//  });


//  두 정수의 값 중 작은 값을 반환하여 출력
// function minNum(num1,num2,callback){
//     let result = "";
//     if(num1>num2){
//         result = "작은 값은"+num2+"입니다."
//     }else if (num1==num2){
//         result = "두 수는 같습니다."
//     }else {
//         result = "작은 값은"+num1+"입니다."
//     }
//     callback(result);
// }

// const print3=(result, callback) => {
//     console.log(result);
// }

// minNum(21,31, print3);

// 결제 상품이름과, 결제 상태를 전달 받아서  결제 상태가 true일 경우 결제 완료, false일 경우 결제 취소를 출력

// function pay(product,bol,callback) {
//     let result = "";
//     if(bol == true) {
//         result = "결제 완료";
//     }else {
//         result = "결제 취소"
//     }
//     callback(result);
// }

// function print4(result,callback) {
//     console.log("이 물건은 " + result);
// }


// pay("김",false,print4);

// 4) 문자열을 받아서 순서를 반대로 바꾼 후 출력
// 문자열을 받음, 순서를 바꿈, 출력
const  getWord = (string,callback) => {
    let result = " ";
    for(i =0; i<string.length; i++){
        result += string.charAt(string.length-1-i);
    }
    callback(result);
}

function print5(result,callback) {
    console.log(result);
}


getWord("acsfgsa",print5);


// 5) 사용자가 입력한 값까지 누적합 후 5의 배수인지 확인 후 출력

// function sum(num ,callback){
//     let num2 =0;
//     for(i=0; i<=num;i++){
//         num2 += i;
//     }
//     console.log("누적합은"+num2);
//     callback(num2);
// }

// const isFive = (num2, callback) => {
//         let result = "";
//     if(num2%5 == 0) {
//         result = "5의 배수 입니다."
//     }else{
//         result = "5의 배수는 아닙니다."
//     }
//     callback(result);
// }

// sum(9,(result)=>{
//     isFive(result,print5);
// })


// 6) 1~100까지 짝수만 더한 후 결과 값의 2를 곱한 후 출력
// function addOneToHundsred(callback){
//     let result= 0;
//     for(i=1; i<=100;i++){
//         if(i%2==0){
//             result += i;
//         }else {
//             result +=0;
//         }
//     }
//     console.log(result);
//     callback(result);
// }
// function resultBy2(num,callback){
//     callback(num*2);
// }

// addOneToHundsred((result)=>{
// resultBy2(result,print5)
// });


// 7) 2개의 정수 중 최소 값과 최대 값을 비교 후 큰 값에 2를 곱해서 출력

// 2개의 정수를 받아서 최소값 최대값을 비교 
// 큰값에 2를 곱해서 출력

// function getMinMax(num1, num2, callback) {
//     let max = 0;
        // if(typeof(num1)!=="number" || typeof(num2)!=="number"){
        //     return console.log("잘못 입력하셨습니다.");
        // }
        // if(num1 == num2){
        //     return console.log("두 수는 같습니다.");
        // }
//      else if(num1>num2){
//         max = num1;
//     }else{
//         max = num2;
//     }

//     callback(max);
// }

// getMinMax(100,50,(callback)=>{
//     resultBy2(callback,print5);
// });

// getMinMax(100,20,function(callback){
//     resultBy2(callback,print5);
// });
