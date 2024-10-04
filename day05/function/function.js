
//  이름을 한번 출력해주는 함수

//  function printName(){
//     console.log("염승엽");
//  }

//  printName();


// function get100(){
//     return 100;
// }
//  get100();

// console.log( get100());

// 두 수를 합쳐서 결과값을 주는 함수
// function add(num1,num2){

//     return num1+num2;
// }

// console.log(add(10,20));

// 성과 이름을 받아서 붙여주는 함수


// function nameMake(name1,name2){
//     return name1+ name2;
// }


// nameMake("염","승엽");
// console.log(nameMake("염","승엽"));

// function showName(name){
//     console.log(name);
// }

// showName("홍길동");

// function nameTenTimes(name){
//     for(let i=0; i<10; i++){
//         console.log(name)
//     }
// }

// nameTenTimes("홍길동");
// 매개 변수,인자, 파라미터, 파람 
// 디폴트 파라미터 = 매개변수에 디폴트 값을 넣음
function addNum5(num1, num2, num3, num4, num5){
    return num1 + num2 + num3 + num4 + num5;
}

addNum5(2,2,2,2,2)
// console.log(addNum5(2,2,2,2,2));


function gopNum3(num1,num2,num3){
    return num1 * num2 * num3;
}

gopNum3(2,3,4)
// console.log(gopNum3(2,3,4));

function addNumPrint(num1,num2){
    let sum =  num1 + num2;
    console.log(sum);
}

addNumPrint(2,3);


// 즉시 사용함수 ()()
    (
        function(){
            console.log("선언과 동시에 사용")
        }
    )();
// 화살표 함수 () => {} (es6)

function addPrintNum(num1,num2){

};

const addPrintNum = (num1,num2) => {
    
};



