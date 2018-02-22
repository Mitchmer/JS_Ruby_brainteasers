function initInput() {
  var userInput = []
  userInput.push(prompt("please input a number", "default"))
  userInput.push(prompt("please input a second number", "default"))
  if (userInput[0] < userInput[1]) {
    largeNum = userInput[1]
  } else if (userInput[0] === userInput[1]) {
    alert("please input different numbers.")
    initInput()
  } else {
    largeNum = userInput[0]
  }
  alert(largeNum + " is the bigger number")
}

initInput()