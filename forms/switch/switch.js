
//Creates the neccessary variables and assignes them the value given by the user. 
let userName = prompt("What is your name?")
let userState = prompt("What state do you live in? (use two letters: FL, NE, etc.)")
let userTemp = prompt("What tempreture is it outside in Fahrenheit? (use a number)")

//Creates a dictionary that contains the messages we use to output to the user.
let theMessages = ["wear a warm coat, hat, scarf and gloves.", "wear a warm coat but you won't need a hat, scarf or gloves.", "wear your warmest coat, a warm hat, a scarf, and warm gloves.", "wear a warm coat, hat and gloves. Maybe a scarf too."]


switch (true){
  case(userState === "NE" && userTemp < 32):
    console.log(`${userName}, ${theMessages[0]}`);
    break;
  case(userState === "NE" && userTemp > 32 && userTemp <50):
    console.log(`${userName}, ${theMessages[1]}`);
    break;
  case(userState === "FL" && userTemp > 32 && userTemp <50):
    console.log(`${userName}, ${theMessages[2]}`);
    break;
  case(userState === "FL" && userTemp > 50 && userTemp <70):
    console.log(`${userName}, ${theMessages[3]}`);
    break;
  default:
    console.log('Your state has no data.')
    break;
  }
 
  
  
  