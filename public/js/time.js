

const printtime=()=>{
var now=new Date();
var hours=now.getHours();
var mins =now.getMinutes();
var sec=now.getSeconds();

document.getElementById("demo").innerHTML=hours+":"+mins+":"+sec+"</br>";
}

setInterval(()=>{
printtime()
},1000)



// stopwatch functions

var time=0;
var work=0;
 
load=()=>{
    document.getElementById("stop").disabled=true;
    document.getElementById("resetbtn").disabled=true;
}

 stopwatch=()=>{
     if(work===0){
      
    setTimeout(() => {
       time++;
       var mins=Math.floor(time/10/60);
       var sec=Math.floor(time/10%60);
       var hours=Math.floor(time/10/60/60);
       var tens=time%10;
      
   
       document.getElementById("stopwatch").innerHTML=hours+":"+mins+":"+sec+":"+"0"+tens;
      

 stopwatch()




    },100)
    document.getElementById("startbtn").disabled=true;
    document.getElementById("stop").disabled=false;
    document.getElementById("resetbtn").disabled=true;

    reset=()=>{
        
           time=0;
           work=1
           document.getElementById("stopwatch").innerHTML="00:00:00:00";
           document.getElementById("startbtn").disabled=false;
           document.getElementById("stop").disabled=true;
           work=0; }
    }
 }

stop=()=>{
    if(work===0){
       stopwatch();
work=1;
document.getElementById("resetbtn").disabled=false;
}
}

// timer

// timer=()=>{
//     var hours=document.getElementById("hours").value;
// var minutes=document.getElementById("minutes").value;
// var seconds=document.getElementById("sec").value;


// setInterval(()=>{
//     if(seconds>0){
//     seconds=seconds-1;
//     // document.getElementById("timersec").innerHTML=(seconds)
//     document.getElementById("timersec").innerHTML=(hours+":"+minutes+":"+seconds)
//     }
// },1000)

// setInterval(()=>{
//     if(minutes>0){
//     minutes=minutes-1;
//     // document.getElementById("timermin").innerHTML=(minutes)
//     document.getElementById("timersec").innerHTML=(hours+":"+minutes+":"+seconds)
//     }
// },60000)

// setInterval(()=>{
//     if(hours>0){
//   hours=hours-1;
//   document.getElementById("timersec").innerHTML=(hours+":"+minutes+":"+seconds)
//   }
// },3600000)
// // document.getElementById("timersec").innerHTML=(hours+":"+minutes+":"+seconds)
// }


var userminutes=10;

//  const minutes=setInterval(()=>{
//     if(userminutes>0&&userminutes<59) {
//     userminutes--;
//      console.log(userminutes)
//     }
    
//  },600)


 


















