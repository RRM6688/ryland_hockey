const answer = ('blues');
var guess;

alert("You have 3 trys to guess Rylands favorite team. Please only use lowercase until my javascript skills imroves.");
  
for(i=0; i<3; i++){ 
     guess = prompt('What is Rylands favorite team?');
        if(answer == guess){
            alert('You got it!');
            break;
        }
    }
