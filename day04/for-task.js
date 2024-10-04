// for(i = 0; i<100; i++) {
//     console.log(i);
// }

// for(i = 0; i<50; i++) {
//     let j = (i+1) * 2;
//     console.log(j);
// }

// for(i = 0; i<100; i++) {
//     if(i%2 == 1){
//         console.log(i)
//     }
// }

// for(i = 0; i <= 10; i++){
//     if(i == 5){
//         continue;
//     }
//     console.log(i);
// } 


// let sum = 0;
// for(let i = 0; i<10; i++){
//     let j = i + 1;
//         sum += j;
// }
// console.log(sum);


// 골드
// 1~n까지 합의 출력
// 012340123401234 출력

// 012340123401234 출력

let num = " ";
for(i=0; i<15; i++){
    let j = i%5;
    num += j;
}
console.log(num);


// 1~10까지 짝수면 짝수입니다, 홀수면 홀수입니다. 출력
// ex) 1는 홀수입니다.
// ex) 2는 짝수입니다.
// ...

for(i=1; i<11; i++) {
    if(i%2 == 1){
        console.log(i+"는 홀수 입니다.");
    } else {
        console.log(i+"는 짝수 입니다.");
    }

}

// 100 ~ 1까지 출력

for(i = 100; i>0; i--){
    console.log(i);
}

// 1~10까지 5부터는 +2를 시켜서 출력

for(i =1; i<=10; i++){
    if(i<5){
        console.log(i);
    }else {
        console.log(i+2);
    }
}

