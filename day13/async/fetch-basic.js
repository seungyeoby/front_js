// https://jsonplaceholder.typicode.com/posts

// get 요청-fetch(backendUrl)
// fetch(backendUrl, option)
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((response) => response.json())
// .then((result) => console.log(result))


// https://jsonplaceholder.typicode.com/albums
fetch("https://jsonplaceholder.typicode.com/albums")
.then((response) => {
    if(!response.ok){
        throw new Error(`response Error : ${response.status}`)
    }
    // .json() response객체를 -> object객체로 바꿔서 데이터를 리턴 해주는 매서드
    return response.json();
}).then((result)=>result.map((album)=> album.title))
.then((titles) => console.log(titles))
.catch((error) => {console.error(error)})