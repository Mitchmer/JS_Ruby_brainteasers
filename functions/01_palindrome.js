function palCheck(strArr) {
  var initArr = strArr.slice()
  var chkArr = []
  var arrLength = strArr.length
  for (i = 0; i < arrLength ; i++) {
    chkArr.push(strArr.pop())
  }
  if (chkArr.join('') === initArr.join('')) {
    alert("Nice Palindrome!")
  } else {
    alert("Thats not a Palindrome.")
  }
}

function input() {
  var userInput = prompt("Please input a palindrome:", "")
  var userArr = userInput.split('')
  palCheck(userArr)
}

input()

