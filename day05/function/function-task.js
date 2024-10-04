
// .indexOf()
"abcdef".indexOf("c");
// .charAt()

"abcdef".charAt(2);


//  어떤 값을 받으면 값을 출력해주는 함수
// 홍길동을  n번 출력해주는 함수

function printString(string) {
    console.log(string);
}

function subtract(num1, num2, num3) {
    let result = num1 - num2 - num3;
    return result;
}


// 실버
// 홍길동을 n번 출력해주는 함수

function printAnyTime(num) {
    for(let i=0; i<num; i++){
        console.log("홍길동");
    }
}



// 골드
// 1~n까지 홀수만 출력해주는 함수

function oddPrint(num) {
    for(let i =0; i<num; i++) {
        if(i%2 ==1) {
            console.log(i);
        }
    }
}


function getCount(string,word) {
    let countNum = 0;
    for(let i = 0; i<string.length; i++){
        if(string.charAt(i) == word) {
            countNum++;
        }
    }
    return countNum;
}
// console.log(getCount("asdfkldsfqo","f"));

// 문자열을 입력받고 원하는 문자의 개수를 구해주는 함수
// ex) getCount("abcabc", "a") -> return 2

// 플레티넘
// 한글을 정수로 바꿔주는 함수 (일공이사 -> 1024)


const changeToInt = (hangle) => {
    let hangles = "공일이삼사오육칠팔구";
    let result = " ";
    for(let i=0; i<hangle.length; i++){
       result +=  hangles.indexOf(hangle.charAt(i));    
    }
    return result;
}

// console.log(changeToInt("공일이사"));


// 정수를 한글로 바꿔주는 함수 (1024 -> 일공이사)

// 정수를 받는다
// 비교군을 만든다 . ex) hangles = "공일이삼사오육칠팔구";
// 빈 문자열을 만든다 
// 반복문을 돌려서 정수의 자릿수별 숫자를 뽑아내고 문자열  hangles 에 맞춰 문자열 result에 추가한다.
//   결과값  result를 return 받아 출력한다.
const changeToKor = (num) => {
    let hangles = "공일이삼사오육칠팔구";
    let result = "";
    for(let i =0; i<num.length; i++){   
        result+= hangles.charAt(num.charAt(i));
    }
    return result;
}

console.log(changeToKor("9999"));
// getCount("abcaaabc","b");

// changeNum("일");

// console.log(changeNum("일공이사"));

// console.log(changeKor(1024));

// console.log(getCount("abcabc","a"));