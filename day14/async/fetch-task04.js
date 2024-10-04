// https://jsonplaceholder.typicode.com/users
// city를 가져와서
// 모두 대문자로 바꾸고,
// 알파벳 중 A의 개수를 세서 콘솔에 출력



// 도시별로 구하기 
const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if(!response.ok) return
    const datas = await response.json()
    return datas
}

const citys= getUsers().then((users)=>users.map((users)=>users.address))
.then((address)=>address.map((address)=>address.city))

citys
.then((citys)=>citys.map((city)=>city.toUpperCase()))
.then((city)=>city.map((data)=>{
    return data.split("")
}))
.then((datas)=>datas.map((datas)=>{
     let count = 0;
    for(let i =0; i<datas.length;i++){
        if(datas[i]==="A"){
            count++;
        }
    }
    return count;
   }
))
.then(console.log)
.catch(console.log)




// const getUsers = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const datas = await response.json();
//     return datas;
//   }
  
//   // 1번째 방법
//   // getUsers()
//   //   .then((datas) => datas.map((data) => data.address.city.toUpperCase()))
//   //   .then((datas) => datas.join("").split(""))
//   //   .then((datas) => datas.filter((data) => data === 'A').length)
//   //   .then(console.log)
//   //   .catch(console.error)
  
//   getUsers()
//     .then((datas) => datas.map((data) => data.address.city.toUpperCase()))
//     .then((datas) => datas.filter((data) => data.includes("A")))
//     .then((datas) => datas.map((data) => {
//       let result = "";
//       for(let s of data){
//         if(s === "A"){ result += s }
//       }
//       return result
//     }))
//     .then((datas) => datas.join("").length)
//     .then(console.log)
//     .catch(console.error)
  
