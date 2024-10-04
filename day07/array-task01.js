// 고차함수 사용
// 35분
// 1) 1~10까지 Array객체에 담은 후 짝수만 출력하기
const arr = new Array(10).fill(0);

const arr1 = arr.map((data,i,arr1) => {
     return i+1;
})
console.log(arr1);

const result1 = arr1.filter((data,i,arr)=>data%2 == 0);
console.log(result1);

// 2) 한글을 숫자로
// ex) "일이삼사" -> "1234"

const strings = "일이삼사" 
const kor = "영일이삼사오육칠팔구";
const number = "0123456789"

const numbers = new Array(10).fill(0);

const arr2 = numbers.map((data,i)=>{
    return number.slice(i,i+1);
})

const han = strings.split("");

const result2 = han.map((data,i)=>{
 return arr2[data]
})
console.log(result2);
// 3)숫자를 한글로
// ex) "1234" -> "일이삼사"

const string = "24750"

// const kor = "영일이삼사오육칠팔구";

const data3 = new Array(10).fill("");

const arr3 = data3.map((data,i)=>{
    return kor.slice(i,i+1);
})

// console.log(arr2);

const num = string.split("")
console.log(num);

const result3 = num.map((data,i)=>{
   
 return arr3[data]
})
console.log(result3);


// 1~100까지 합을 출력
// 100칸짜리 배열을 만든다.

const arr4 = new Array(100).fill(0);
 let result4 = 0;
arr4.map((data,i,arr)=>{
    return data +i+1;
}).forEach((data)=> result4 += data);
console.log(result4);

// 문자열을 반대로 출력하기 .reverse()
// "apple"

const input = "apple".split("");


// 전화번호를 파라미터로 받아서 파싱하기
// ex) 010-1111-4455
// result) 010-****-4455

