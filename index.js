var authors = ["Thomas Mann","G.K. Chesterton","Louisa May Alcott","Dr Roopleen","Flannery O'Connor","Carlos Ruiz Zafón"];

var quotes = ["A writer is someone for whom writing is more difficult than it is for other people.","A good novel tells us the truth about its hero; but a bad novel tells us the truth about its author.","I've got the key to my castle in the air, but whether I can unlock the door remains to be seen.","If you have a dream, don’t just sit there. Gather courage to believe that you can succeed and leave no stone unturned to make it a reality.","Anybody who has survived his childhood has enough information about life to last him the rest of his days.","A story is a letter that the author writes to himself, to tell himself things that he would be unable to discover otherwise."];

  var startingNumber = Math.floor(Math.random() * 6);
  
  document.getElementById('author').innerHTML = authors[startingNumber];
  
    document.getElementById('text').innerHTML = quotes[startingNumber];

function newQuote(){
  var number = Math.floor(Math.random() * 6);
  
  document.getElementById('author').innerHTML = authors[number];
  
    document.getElementById('text').innerHTML = quotes[number];
}