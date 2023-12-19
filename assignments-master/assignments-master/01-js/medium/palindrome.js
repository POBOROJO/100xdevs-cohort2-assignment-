/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  //if length=0
  if(str.length===0){
    return true;
  }

  //if length=1
  if(str.length===1){
    return true;
  }
  // Uppercase to Lowercase
  const toLCstr = str.toLowerCase();

  //remove the spaces and special characters
  let result='';
  for(let i=0;i<toLCstr.length;i++){
    const char = toLCstr.charAt(i);
    if((char >= 'a') && (char <='z') ){
      result+=char
    }
  }
  //reverse the string and checked with original one 
  const temp=result;
  const rev=result.split('').reverse().join('');

  if(rev === temp){
    return true;
  }
  return false;
}

module.exports = isPalindrome;
