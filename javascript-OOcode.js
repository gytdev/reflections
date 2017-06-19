//checks if the string is a palindrome

function palindrome(str) {
  str=str.toLowerCase();
  str=str.replace(/\W+/g, "").replace(/\d+/g, "");
  console.log(str);
  // Good luck!
  return true;
}



palindrome("eye453$!@$#$$^&(*&#");
