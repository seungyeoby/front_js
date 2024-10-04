//  date 객체를 이용한 포멧팅

const { time } = require("console");

function timeForToday(datetime){
    const today = new Date();
    const date = new Date(datetime);
    
    let gap = Math.floor(today.getTime() - date.getTime())  /1000 /60

    if(gap < 1){
        return "방금 전";
    }

    if(gap < 60) {
        return `${gap}분 전`
    }

    gap = Math.floor(gap/60);

    if(gap < 24){
        return `${gap}시간 전`
    }

    gap = Math.floor(gap/24);

    if(gap < 32){
        return `${gap}일 전`;   
    }

    gap = Math.floor(gap/31);

    if(gap < 12){
        return `${gap}달 전`
    }

    gap = Math.floor(gap/12);

    return `${gap}년 전`
}

console.log(timeForToday("2024-9-18 18:00:00"));