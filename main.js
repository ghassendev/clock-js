
function showTime(){

'use strict'



let now=new Date();

let hours=now.getHours()-1;
let minutes=now.getMinutes();
let secondes=now.getSeconds();

if (secondes<10){
    secondes="0"+secondes;
}
if (minutes<10){
    minutes="0"+minutes;
}
if (hours<10){
    hours=+"0"+hours;
}






document.getElementById('clock').textContent = hours+':'+minutes+':'+secondes;

}

window.onload=function () {


    'use strict'

    this.setInterval(this.showTime,200)



}




