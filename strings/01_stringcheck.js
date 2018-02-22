function strCheck() {
  var userInput = prompt("Please input a string", "");
  
  inputArr = userInput.split("");
  
  if ((inputArr[0] == '"' && inputArr[inputArr.length - 1] == '"') || (inputArr[0] == '\'' && inputArr[inputArr.length - 1] == '\'')) {
    alert("Thank you.");
  }else {
    alert("That is not a string.");
  }
}

strCheck()


