/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here

    //if lenght=0
    if(str.length === 0){
      return 0;
    }
    
    //remove space and special characters
    let result='';
    for(let i=0;i<str.length;i++){
      const char=str.charAt(i);
      if( (char === 'A') || (char === 'E') || (char ==='I')|| (char ==='O') || (char ==='U') || (char === 'a') || (char === 'e') || (char==='i')|| (char==='o') || (char==='u'))
      {
        result+=char;
      }
    }
    
    let count=0;
    for(let i=0;i<result.length;i++){
      const char=result.charAt(i);
      if( (char === 'A') || (char === 'E') || (char==='I')|| (char==='O') || (char==='U') || (char === 'a') || (char === 'e') || (char==='i')|| (char==='o') || (char==='u'))
      {
        count++;
      }
    }
    return count;
}

module.exports = countVowels;