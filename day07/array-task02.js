// 1) 1~10까지 누적합 구하기
// const arr1 = new Array(10).fill(0);
// let result1 = 0;
// arr1.map((data,i)=> data + i+1).forEach((data)=> result1 +=data);
// console.log(result1)



// 2) 1~50까지 짝수만 배열에 담고 배열 안에 값에 3을 곱한 값으로 변경 후 출력하기
// const arr2 = new Array(25).fill(0);

// const result2 = arr2.map((data,i)=>{
//     return (i+1)*2;
// }).map((data)=> 3 * data);

// console.log(result2);

// 3) 초기값으로 10, 20, 30, 40, 50 값을 넣고 내림차순 정렬 후 출력하기

// const arr3 = [10,20,30,40,50];

// const result3 = arr3.sort((a,b) => a-b).reverse();
// console.log(result3);

// 4) 1~10까지 배열에 담고 값이 5보다 크다면 값을 2배로 변경 후 원본 배열을 출력하기

// const arr4 = new Array(10).fill(0);
// const result = arr4.map((data,i)=> i+1);

// console.log(result);
// const arr04 = [1,2,3,4,5];
// const result4 = result.filter((data,i,datas)=> data > 5).map((data,i)=>2*data)
// console.log(result4);
// const result04 = arr04.concat(result4);
// console.log(result04);

// 5) 1~30까지 배열에 담고 홀수 값들만 "*"를 붙여서 출력하기

const arr5 = new Array(30).fill(0).map((data,i)=>data +i+1);
console.log(arr5)
const arrTask1 =arr5.map((data,i,arr)=>{
    if(i%2 ==0){
        return data;
    }else{
        return "*"
    }
}).join("")
console.log(arrTask1);

//  const arr05= new Array(30).fill(0).map((data,i)=>data +i+1)
//  const arrTask01 = arr05.filler((data,i,datas)=> data%2 == 1)
//  console.log(arrTask01)
// ex) let arrTask1 = 1*3*5*7*9...
// 6) arrTask1에 들어간 값에 "*"을 제거한 후 배열에 담아 arrTask1의 기존의 값을 2배로 변경 후
// 모든 값을 출력하기

const result6 = arrTask1.split("*").slice(0,15).map((data)=>2*data)
console.log(result6)
// 7) 1~20까지 배열에 담고 배열의 들어간 값 중 뒤에서 5개 값을 더한 후 출력

// const arr7  = new Array(20).fill(0).map((data,i)=> data +i+1)
// let result =0;
// const result7 = arr7.slice(-5).forEach((data)=> result += data);

// console.log(result);