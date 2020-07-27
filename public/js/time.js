

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



// stopwatch functions

var time=0;
var work=0;


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
           work=0;
           
        
    }
    
}
 }

stop=()=>{
    if(work===0){
       stopwatch();
work=1;
document.getElementById("resetbtn").disabled=false;


    }

    
}
