const quotes=[
    "What really knocks me out is a book that, when you're all done reading it, you wish the author that wrote it was a terrific friend of yours and you could call him up on the phone whenever you felt like it. That doesn't happen much, though",
     "A writer is someone for whom writing is more difficult than it is for other people",
     "A good novel tells us the truth about its hero; but a bad novel tells us the truth about its author.",
     "I've got the key to my castle in the air, but whether I can unlock the door remains to be seen.",
     "Anybody who has survived his childhood has enough information about life to last him the rest of his days.",
     "If you have a dream, don’t just sit there. Gather courage to believe that you can succeed and leave no stone unturned to make it a reality.",
     "A story is a letter that the author writes to himself, to tell himself things that he would be unable to discover otherwise.",
     "If you have any young friends who aspire to become writers, the second greatest favor you can do them is to present them with copies of The Elements of Style. The first greatest, of course, is to shoot them now, while they’re happy.",
     "There's an epigram tacked to my office bulletin board, pinched from a magazine -- Wanting to meet an author because you like his work is like wanting to meet a duck because you like pâté.",
     "Authors like cats because they are such quiet, lovable, wise creatures, and cats like authors for the same reasons"
 ];
 
 const Authors=[
  "-J.D. Salinger",
  "-Thomas Mann",
   "-G.K. Chesterton",
   "-Louisa May Alcott",
   "-Flannery O'Connor",
  "-Dr Roopleen",
 "-Carlos Ruiz Zafon",
 "-Dorothy Parker",
 "-Margaret Atwood",
 "-Robertson Davis"      
 ];
  colors=[
      "blue",
      "green",
      "yellow",
      "cyan",
      "red",
      "orange",
      "purple",
      "grey",
      "pink"
 ];
 const val=Math.floor(Math.random()*10);
   
 //   console.log(quotes[index]);
 
   const init=()=>{
     const index=Math.floor(Math.random()*10);
   document.getElementById("text").innerText=quotes[index];
   document.getElementById("author").innerText=Authors[index];
   document.body.style.backgroundColor = colors[val];
     document.getElementById("new-quote").style.backgroundColor=colors[val];}
   init();