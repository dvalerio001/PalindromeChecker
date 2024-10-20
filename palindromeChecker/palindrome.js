// This project checks if a string is a palindrome. A string is a palindrome if it is read the same way forwards or backwards. (i.e MADAM backwards is MADAM)

//Get DOM elements to reference
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const submitBtn = document.getElementById("submitBtn");
const wordInput = document.getElementById("wordInput"); // Input field for the word
const result = document.getElementById("result"); // element to display result
const closeModalBtn = document.querySelector(".modal__button_close");
const palindromeForm = document.getElementById("palindromeForm"); // form element

//Open Modal
openModalBtn.addEventListener("click", () => {
  modal.classList.add("modal--visible"); // add class to see modal
  result.textContent = ""; // Clear any previous result
  wordInput.value = ""; // Clear the input field
  submitBtn.disabled = true; // Disable submit button initially
});

//Close Modal

closeModalBtn.addEventListener("click", () => {
  closeModal();
});

function closeModal() {
  modal.classList.remove("modal--visible"); // remove to hide
  wordInput.value = ""; //reset input
}

//function to check the entered word. Will check for single word w/ no spaces.
function checkWord() {
  const word = wordInput.value.trim().toLowerCase(); // get input and remove whitespace with .trim() and set to lowercase()
  const isPalindrome = checkPalindrome(word); //will return true or false
  updateResult(
    `"${word}" ${isPalindrome ? "is" : "is not"} a palindrome.`,
    isPalindrome ? "success" : "failure"
  );
}

function checkPalindrome(word) {
  const cleanWord = word.replace(/[^a-z0-9]/g, ""); //removes symbols and numbers in input
  return cleanWord === cleanWord.split("").reverse().join(""); // seperate each character(split), reverse them, then combine back to one word.
}

function updateResult(message, type) {
  result.textContent = message; // set result text
  result.className = `result result--${type}`; // template literal to set appropriate class
}

//Validate Word
wordInput.addEventListener("input", () => {
  const isValid = wordInput.checkValidity() && wordInput.value.length >= 2;
  submitBtn.disabled = !isValid;

  if (isValid) {
    wordInput.classList.remove("invalid");
    wordInput.classList.add("valid");
  } else {
    wordInput.classList.remove("valid");
    wordInput.classList.add("invalid");
  }
});

palindromeForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission
  checkWord();
  closeModal();
});

// Allow Enter key to submit when input is valid
wordInput.addEventListener("keyup", (event) => {
  const value = wordInput.value.trim();
  let errorMsg = "";
  let isValid = false;

  if (value.length === 0) {
    // Do nothing, keep error message empty
  } else if (value.length === 1) {
    errorMsg = "Please enter at least 2 characters.";
  } else if (!/^[a-zA-Z]+$/.test(value)) {
    errorMsg = "Please use only letters.";
  } else {
    isValid = true;
  }

  errorMessage.textContent = errorMsg;
  errorMessage.style.display = errorMsg ? "block" : "none";
  wordInput.classList.toggle("invalid", !isValid);
  wordInput.classList.toggle("valid", isValid);
  submitBtn.disabled = !isValid;
});
/*prompt user to enter a string
const string = prompt("Enter a string: ");

//call checkPalindrome
const value = checkPalindrome(string);

function checkPalindrome(word) {
  //find the length of a string
  let len = word.length;
  // loop through half of the string
  for (let i = 0; i < len / 2; i++) {
    //check if first or last string are the same
    if (string[i] !== string[len - 1 - i]) return "This is not a palindrome";
  }
  return "This is a palindrome";
}

//print answer
console.log(value);
*/
