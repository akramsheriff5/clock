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

