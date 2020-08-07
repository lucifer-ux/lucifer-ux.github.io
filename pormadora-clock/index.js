let timer=59;
let val=5;
let minute=25,seccond='00';
document.getElementById("break-length").value=5;
var el = document.getElementById("break-decrement");

//decrease break
el.onclick = function() {
    if(val==1){return 0}
    val=val-1;
    document.getElementById("break-length").innerText=val;  
    document.getElementById("break-length").value-=1;

};
//increase break
var sd=document.getElementById("break-increment");
sd.onclick=function(){
    if(val==60)
    {return 0;}
    val=val+1;
    document.getElementById("break-length").innerText=val;
}
//decrease session
var dec=document.getElementById("session-decrement");
dec.onclick= function(){
    if(minute==1){
        return 0;
    }
    minute-=1;
    document.getElementById("session-length").innerText=minute;
    document.getElementById("time-left").innerText=minute+":"+seccond;
}
//increase session
var inc=document.getElementById("session-increment");
inc.onclick=function(){
    if(minute==60){
        return 0;
    }
    minute+=1;
    document.getElementById("session-length").innerText=minute;
    document.getElementById("time-left").innerText=minute+":"+seccond;
}

//reset
var rst=document.getElementById("reset");
rst.onclick= function(){
document.getElementById("time-left").innerText=25+":"+seccond;
document.getElementById("session-length").innerText=25;
document.getElementById("break-length").innerText=5;
timer=59;
minute=25;
myaudio.pause();
}

// start stop
var exit;
var ss=document.getElementById("start_stop");
ss.onclick=()=>{
    exit=setInterval(repeat,1000);
}
function repeat(){
    if(timer<10&&timer>0){
        document.getElementById("time-left").innerText=(minute-1)+":"+'0' + timer;
    }
    else if(timer==0)
    {minute--;
    timer=59}
    
    else{
    document.getElementById("time-left").innerText=(minute-1)+":"+timer;}
    timer--;
    
    
if(minute==0){
    minute=seccond;
    timer=seccond;
    clearInterval(exit);
    var myaudio=document.getElementById("beep");
    myaudio.play();
}

}
var pse=document.getElementById("start_stop1");
pse.onclick=function pause(){
    clearInterval(exit);
}
