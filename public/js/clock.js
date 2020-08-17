

const printtime=()=>{
var now=new Date();
var hours=now.getHours();
var mins =now.getMinutes();
var sec=now.getSeconds();

document.getElementById("demo").innerHTML=hours+":"+mins+":"+sec
}

setInterval(()=>{
printtime()
},1000)









    




 


















