function inequality(num1, num2) {
    if(num1>num2){
        console.log("큰 값은"+num1+", 작은값은"+num2);
    }else if(num1== num2){
        console.log("두 값은 같습니다.");
    }else {
        console.log("큰 값은"+num2+", 작은값은"+num1);
    }
}

inequality("10","10")

const oddOrEven = (number) => {
    if(number%2 == 0){
        console.log("이 숫자는 짝수 입니다.");
    }else{
        console.log("이 숫자는 홀수 입니다.")
    }
}

// oddOrEven(10001)

 const numberingZeroOrOne = (num1,num2,num3,num4,num5) => {
    
    const arr = [num1,num2, num3, num4, num5];
    let countZero = 0;
    let countOne = 0;
    for(let i =0; i<arr.length; i++){

        if(arr[i] == 0 ){
            countZero++;
        }else if(arr[i] == 1) {
            countOne++;
        }else {
            console.log("0,1 을 적어 주십시오");
        }
    }
    console.log("0의 개수는"+countZero+"개, 1의 개수는"+countOne+"개 입니다.");
 }



 numberingZeroOrOne(0,1,1,1,2);