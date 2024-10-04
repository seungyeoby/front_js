// https://jsonplaceholder.typicode.com/users


fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=> response.json())
.then((result)=> console.log(result))
.catch((error)=> console.error(error)) 


fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    if(!response.ok){
        throw new Error(`respons Error : ${response.status}`)
    }
    return response.json();
}).then((result)=>result.map((user)=>user.name))
.then((name)=>{console.log(name)}).catch((error)=> console.error(error)) 