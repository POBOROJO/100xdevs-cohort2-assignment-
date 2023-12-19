/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  //lowercase
  const toLCstr1 = str1.toLowerCase();
  const toLCstr2 = str2.toLowerCase();

  //check lenght
  if(toLCstr1.length !== toLCstr2.length){
    return false;
  }

  //remove spaces and special characters
  const removeSpace = str =>{
    let result = '';
    for(let i=0;i<str.length;i++){
      const char=str.charAt(i);
      if((char >= 'a' && char <= 'z') || (char>= '0' && char <= '9')){
        result+=char;
      }
    }
    return result;
  }

  const cleanedStr1 = removeSpace(toLCstr1);
  const cleanedStr2 = removeSpace(toLCstr2);

  //spilt -> breaks the string into array of individual characters 
  //sort -> it sorts the characters in order (i.e a,b,c,...)
  //join -> it joins the sorted characters in that order

  // e.g -> (say ball -> ['b' , 'a' , 'l', 'l'] -> ['a', 'b', 'l', 'l'] -> 'abll')
  const sortedstr1=cleanedStr1.split('').sort().join('');
  const sortedstr2=cleanedStr2.split('').sort().join('');

  if(sortedstr1 === sortedstr2){
    return true;
  }
  return false;
}

module.exports = isAnagram;
