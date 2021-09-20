/*
//Creates the neccessary variables and assignes them the value given by the user. 
let userName = prompt("What is your name?")
let userState = prompt("What state do you live in? (use two letters: FL, NE, etc.)")
let userTemp = prompt("What tempreture is it outside in Fahrenheit? (use a number)")

//Creates a dictionary that contains the messages we use to output to the user.
let theMessages = [" wear a warm coat, hat, scarf and gloves.", "wear a warm coat but you won't need a hat, scarf or gloves.", "wear your warmest coat, a warm hat, a scarf, and warm gloves.", "wear a warm coat, hat and gloves. Maybe a scarf too."]



//creates a conditional statement that if all the conditions below are met, will output a message to the user.
//if not, will resort to the next list of conditions to see of they are met.
if (userState === "NE" && userTemp < 32){
  console.log(`${userName} ${theMessages[0]}`)
}

//creates another conditional statement that if all the conditions below are met, will output a message to the user.
//analyzes the variables and their assingned data, and compares them with conditions, this happens with all the blocks below.
//if not, will resort to the next list of conditions to see of they are met.
else if (userState === "NE" && userTemp > 32 && userTemp <50){
  console.log(`${userName} ${theMessages[1]}`)
}

//just like the above, the code creates a conditional statement that if all the conditions below are met, will output a message to the user.
//if not, will resort to the next list of conditions to see of they are met.
else if (userState === "FL" && userTemp > 32 && userTemp <50){
  console.log(`${userName} ${theMessages[2]}`)
}

//creates a final conditional statement that if all the conditions below are met, will output a message to the user.
//if not, will resort to the next list of conditions to see of they are met.
else if (userState === "FL" && userTemp > 50 && userTemp <70){
  console.log(`${userName} ${theMessages[3]}`)
}

//if none of the outlined conditions are met, the code will resort to the else statement as a default.
//outputs a message to user. 
else{
  console.log('Your state has no data.')
  }
  
  */