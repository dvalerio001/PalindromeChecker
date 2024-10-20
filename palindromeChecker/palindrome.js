// This project checks if a string is a palindrome. A string is a palindrome if it is read the same way forwards or backwards. (i.e MADAM backwards is MADAM)

//Get DOM elements to reference
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const submitBtn = document.getElementById("modal__button_submit");
const wordInput = document.getElementById("wordInput"); // Input field for the word
const result = document.getElementById("result"); // element to display result
const closeModalBtn = document.querySelector(".modal__button_close");

//Open Modal
openModalBtn.addEventListener("click", () => {
  modal.classList.add("modal--visible"); // add class to see modal
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
  if (word === "") {
    //display error and return
  }
  if (word.includes(" ")) {
    //display error and return
  }
}

function checkPalindrome(word) {}

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
