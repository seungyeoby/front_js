// 1) 입력받은 3개 중 홀수만 모두 더해주는 함수
function addOdd(num1, num2, num3) {
   let result = 0;
   if(num1%2 == 1) {result += num1;}     
   if (num2%2 == 1) result += num2;
   if (num3%2 == 1) result += num3;
 
   return result;
}

// 2) 입력받은 수까지 반복 후 짝수의 합을 모두 더해주는 함수
function sumEven(num) {
   let countNum = " " ;
   let evenNumber = 0;
   for(let i = 0; i<=num; i++) {
      countNum += i;
      if(i%2 ==0) {
         evenNumber += i;
   }
}
   let result = countNum+"짝수의 합은,"+evenNumber
   return result;   
}

// 3) 입력한 값 중 a를 제거해주는 함수
// ex) "가a나a다a라a마a바" -> "가나다라마바"
function aDel(str1) {
   let result = "" ;
   for (let i =0; i<str1.length; i++) {
      if(str1.charAt(i) != "a") {
        result += str1.charAt(i) ;
}
   
}
return result;
}

// 4) 입력한 값이 실수인지 정수인지 알려주는 함수
// parseInt() : 정수로 바꿔주는 함수

function isIntNum(num) {
   let result = " " ;
   if(num>=0){
       if(parseInt(num) == num) {
          result = "이 수는 정수 입니다."
    }else{
       result = "이 수는 실수 입니다."
    }
   }
   return result;   
}
//  let data = isIntNum(-22);
//  console.log(data);

// 5) 입력받은 문자를 뒤집어주는 함수
// ex) "abcdefg" -> "gfedcba";

function reverseWord(str1) {
   let result = ""; 
   for(let i = 0; i<str1.length; i ++) {
   result += str1.charAt(str1.length - 1 - i); 
}
 return result;
}



