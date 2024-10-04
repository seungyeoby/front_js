// 이름 : 여러분들의 성함
// 국어 : 80점
// 수학 : 70점
// 영어 : 90점
// 과학 : 20점

// 평균, 총점, 구하기
// if문을 사용해서 평균이 60점이면 합격, 60점 이하는 불합격을 출력하기

// 최종 문장
// OOO님의 이번 총점은 OO, 평균은 OO점으로 (합격 또는 불합격)입니다.

let name = "홍길동";
let kor = 80;
let math = 70;
let eng = 90;
let sci = 20;
let pass = "";

let sum = kor + math + eng + sci ;
let avg = sum / 4;

if(avg > 60){
     pass = "합격";
}else if(avg == 60){
      pass = "합격";
}else {
     pass = "불합격";
}


console.log(`${name}님의 총점은 ${sum}점, 평균은 ${avg}점으로 (${pass})입니다.`);

// switch문

switch(2){
    case 1:
        console.log("1번");
        break;
    default:
        console.log("1번 아님");
        break;
}