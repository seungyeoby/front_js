// let user = {
//     age: 20,
//     name :"염승엽",
//     height : 200,
//     mbti : "infj"
// };

// console.log(user.mbti);

// let user2 = new Object(); = {}

// user["mbti"]

// const post = {
//     id : 1,
//     title : "오늘은 즐거운 금요일 또 공부중! ",
//     content : "자바스크립트 객체 연습하면서 공부하는 프론트엔드",
//     name : "홍길동"
// }

// post.title = "와 불금엔 치킨"

// const products = {
//     product1 :"지우개",
//     product2 :"키보드",
//     product3 :"마우스",
//     product4 :"연필",
//     product5 :"책",
//     product6 :"노트"
// }

// 향상된 for문 , 빠른 for문  for in , for of

// for(let i in products){
//     console.log(products[i]);
// }

// const users = {
//     user1 : {
//         name : "홍길동",
//         age : 20,
//         point : 3000

//     },
//     user2 : {
//         name : "이순신",
//         age : 30,
//         point : 5000

//     },
//     user3 : {
//         name : "장보고",
//         age : 25,
//         point : 10000
//     }
// }


// let price = 0;
// for(let i in users){
//     // console.log(user[i])
// //    price += user[i]["point"];
//    price += users[i].point; 
// }
// console.log(price);



const user1 = {name : "홍길동"};
const user2 = {name : "이순신"};
const user3 = {name : "장보고"};
const user4 = {name : "김철수"};
const user5 = {name : "김영희"};
const user6 = {name : "흰둥이"};



// 프로토타입 (prototype)
// 객체 생성자 함수에 의해 생성되는 객체들이 공유하는 속성과 매소드를 저장하는 특수한 객체

function User(name) {
    this.name = name;
}

const user7 = new User("유지민");
console.log(user7);