

const printtime=()=>{
var now=new Date();
var hours=now.getHours();
var mins =now.getMinutes();
var sec=now.getSeconds();

document.getElementById("demo").innerHTML=hours+":"+mins+":"+sec;
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

timer=()=>{
    // var hours=document.getElementById("hours").value;
// var minutes=document.getElementById("minutes").value;
// var seconds=document.getElementById("sec").value;
var minutes=document.getElementById("minutes").value;
var seconds=minutes*60||document.getElementById("sec").value;

    // document.getElementById("timersec").innerHTML=(minutes+":"+seconds)

        
           mysec=  setInterval(() => {
            if(seconds>=0){
                seconds=seconds--;
                document.getElementById("timersec").innerHTML=("00"+":"+second)
            }
            },1000);
    
    
  

         mymin=setInterval(() => {
            if(minutes<=60&&minutes>=0){
            if(seconds>=0){   
                second=Math.floor(seconds%60)
                minutes = Math.floor(seconds / 60); 
                //  seconds - Math.round(minutes * 60);    
            
              seconds=seconds-1;
              document.getElementById("timersec").innerHTML=(minutes+":"+second)
            }
        }
            
        },1000);
    }
    
reset=()=>{
clearInterval(mymin)
clearInterval(mysec)
document.getElementById("timersec").innerHTML=(00+":"+00)
}




 


















