

const printtime=()=>{
var now=new Date();
var hours=now.getHours();
var mins =now.getMinutes();
var sec=now.getSeconds();
//console.log(hours+":"+mins+":"+sec,"\n")
document.getElementById("demo").innerHTML=hours+":"+mins+":"+sec+"</br>";
}

setInterval(()=>{
printtime()
},1000)

