var vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];

function vowelCheck(str) {
  var checkArr = []
  for (var i = 0; i < str.length; i++) {
    for (var o = 0; o < 10; o++) {
      if (str[i] === vowels[o]) {
        checkArr.push(str[i])
      }
    }
  }
  alert("Your sentence has " + checkArr.length + " vowels.")
}

function userInput() {
  var input = prompt("Enter your sentence.");
  inputArr = input.split('');
  vowelCheck(inputArr);
}

userInput()
