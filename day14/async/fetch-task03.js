// 1번 문제
// https://jsonplaceholder.typicode.com/comments
// email 10개만 가져온 후 email에서 아이디만 가져오기
// ex) ["Eliseo@gardner.biz"] => ["Eliseo"]
// 아이디만 출력



// 2번 문제
// https://jsonplaceholder.typicode.com/users
// 이름만 가져와서 이름을 거꾸로 뒤집어서 출력하기
// ["Leanne Graham", ...] => ["maharG ennaeL", ...]




// const getEmails = async  () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/comments")
//     if(!response.ok) return
//     const data = await response.json();
//     return data
// }

//  const emails =  getEmails().then((datas) => datas.map((ids) => ids.email))
//  emails
// .then((emails)=> emails.slice(0,10))
// .then((mails) => mails.map((mails)=>mails.split("@")))
// .then((userId)=> userId.forEach((userId)=>console.log(userId[0])))
// .catch((error)=>{console.error(error)})


const getName = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    if(!response.ok) return
    const data = await response.json();
    return data
}

const userName = getName().then((datas)=> datas.map((user)=> user.name));
userName
.then((names)=>names.map((names)=>{
    // let result = "";
    // for(let i = 0; i < names.length; i++){
    //     result += names.charAt(names.length -i -1);
    //     return result
    // }
    return names.split("").reverse().join("")
}))
.then(console.log)
.catch(console.error)

// 참조형
// .then(console.log)
// .catch(console.error)