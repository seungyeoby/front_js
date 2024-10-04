// async await (ES8)
const getUesrs = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const datas = await response.json()
    return datas;
}

getUesrs().then((result)=>console.log(result))