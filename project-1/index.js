let arr=[
    'Rock',
    'Pop',
    'Hip-Hop',
    'drumroll',
    'Hitch-Hicker',
    'vivid-roll',
    'pop',
    'avenge',
    'finale'
];


function play1() {
    let audio1 = document.getElementById("Q");
    audio1.play();
    document.getElementById("what").innerHTML=arr[0];
  }
  function play2(){
      let audio2=document.getElementById("W")
      audio2.play();
      document.getElementById("what").innerHTML=arr[1];
  }
  function play3(){
    let audio3=document.getElementById("E")
    audio3.play();
    document.getElementById("what").innerHTML=arr[2];
}
function play4(){
    let audio4=document.getElementById("A")
    audio4.play();
    document.getElementById("what").innerHTML=arr[3];
}
function play5(){
    let audio5=document.getElementById("S")
    audio5.play();
    document.getElementById("what").innerHTML=arr[4];
}
function play6(){
    let audio6=document.getElementById("D")
    audio6.play();
    document.getElementById("what").innerHTML=arr[5];
}
function play7(){
    let audio7=document.getElementById("Z")
    audio7.play();
    document.getElementById("what").innerHTML=arr[6];
}
function play8(){
    let audio8=document.getElementById("X")
    audio8.play();
    document.getElementById("what").innerHTML=arr[7];
}
function play9(){
    let audio9=document.getElementById("C")
    audio9.play();
    document.getElementById("what").innerHTML=arr[8];
}   





window.document.onkeyup = function(event){
    if(event.key==='q'||event.key==='Q')
    {
        play1('Q');
    }
else if(event.key==='w'||event.key==='W')
{
    play2('W');
}
else if(event.key==='e'||event.key==='E'){
    play3('E');
}
else if(event.key==='a'||event.key==='A')
{play4();}
else if(event.key==='s'||event.key==='S'){
    play5();
}
else if(event.key==='d'||event.key==='D'){
    play6();
}
else if(event.key==='z'||event.key==='Z'){
    play7();
}
else if(event.key==='x'||event.key==='X'){
    play8();
}
else if(event.key==='c'||event.key==='C'){
    play9();
}
}

