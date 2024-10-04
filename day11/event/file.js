const file = require("fs");

const user =new Object();
user.name = "염승엽";
user.email = "ysy9536";
user.password = "1111";

const userJSON = JSON.stringify(user);
    // file.write("경로","내용","인코딩 방식","콜백함수");
// file.writeFile("user.json",userJSON,"utf-8",(err,content)=>{
//     if(err){
//         console.error(err)
//     }else {
//         console.log("출력 성공")
//     }
// })
let user2
// file.readFile("경로","인코딩","콜백함수");
// file.readFile("user.json","utf-8",(error,content)=>{
//     user2 = JSON.parse(content);
// })
user2 = JSON.parse(file.readFileSync("user.json","utf-8"));
console.log(user2);