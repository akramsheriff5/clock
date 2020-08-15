

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
var timer=0
start=()=>{
    if(timer===0){
    var  hr=document.getElementById('hours').value
    var min=document.getElementById('minute').value
    var sec=document.getElementById('seconds').value
    
    
    
    this.state={
        hours:hr,
        minute:min,
        seconds:sec
    
    }

mytimer=setInterval(()=>{
  this.state={
 seconds:this.state.seconds===0?59:parseInt(this.state.seconds-1),
 minute:this.state.hours>0&&this.state.minute===0?59:(this.state.seconds===0?parseInt(this.state.minute-1):this.state.minute),
 hours: this.state.hours===0?0:(this.state.minutes===0?parseInt(this.state.hours-1):this.state.hours)
}
 document.getElementById("timer").innerHTML=(this.state.hours+":"+this.state.minute+":"+this.state.seconds)
 if(this.state.hours==0&&this.state.minute==0&&this.state.seconds<=0) {
     
     clearInterval(mytimer)
}

},1000)
document.getElementById("timer_reset").disabled=false;
    }
}
reset=()=>{
    timer=1
    document.getElementById("timer").innerHTML="00:00:00"
    timer=0;
    clearInterval(mytimer)
    document.getElementById("timer_reset").disabled=true;
   
}
timer_load=()=>{
    document.getElementById("timer_reset").disabled=true;
}






    




 


















