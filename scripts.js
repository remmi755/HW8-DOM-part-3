function increaseAndDecrease (a, b) {
    if ( a === b) {
        console.log(a)
    } else if(a < b) {
        a =  increaseAndDecrease(a, b-1)
        console.log(b)
        return a
    } else if (a > b) {
        console.log(a)
        b = increaseAndDecrease(a - 1, b)
    return b
}
}
increaseAndDecrease(13,7)


let timeShow = document.getElementById('clock');

function createFullFormat (){
    let now = new Date()

    let hh =  now.getHours();
    if (hh < 10) hh = '0' + hh;

    let mm = now.getMinutes();
    if (mm < 10) mm = '0' + mm;

    let ss = now.getSeconds()

    if (ss < 10) ss = '0' + ss;
    return  `${hh}:${mm}:${ss}`
}

function creatShotFormat (){
    let now = new Date()

    let hh =  now.getHours();
    if (hh < 10) hh = '0' + hh;

    let mm = now.getMinutes();
    if (mm < 10) mm = '0' + mm;

    return  `${hh}:${mm}`
}
timeShow.classList.add('full')

setInterval(function (){
    if (timeShow.classList.contains('full')) {
        timeShow.innerHTML = createFullFormat()
    } else {
        timeShow.innerHTML = creatShotFormat()
    }
},250)

timeShow.addEventListener('click',function () {

    timeShow.classList.toggle('full')

})





