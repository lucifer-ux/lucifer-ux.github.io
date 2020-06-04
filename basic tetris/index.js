function welcome(){
  let val=document.getElementById("namef").value;
  var msg= "HOWDY " + val;
  document.getElementById("demo").textContent=msg;
}