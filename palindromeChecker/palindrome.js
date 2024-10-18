// This project checks if a string is a palindrome. A string is a palindrome if it is read the same way forwards or backwards. (i.e MADAM backwards is MADAM)

//prompt user to enter a string
const string = prompt('Enter a string: ');

//call checkPalindrome
const value = checkPalindrome(string);

function checkPalindrome(string){
    //find the length of a string
    let len = string.length;
    // loop through half of the string
    for ( let i = 0; i < len / 2; i++){
        //check if first or last string are the same
        if(string[i] !== string[len -1 -i])
            return "This is not a palindrome";
    }
    return "This is a palindrome";


}

//print answer
console.log(value);