/* 

** General Information

  Platform: HackerRank
  
  Date: 27/1/2026
  
  Language: JavaScript
  
  Collaboration: Individual
  
  Challenge Name: Super Reduced String
  
  Challenge Link:
  https://www.hackerrank.com/challenges/three-month-preparation-kit-reduced-string/problem

** Problem Description:

  Reduce a string of lowercase characters in range ascii[‘a’..’z’]by doing a series of operations. In each operation, select a pair of adjacent letters that match, and delete them.
  
  Delete as many characters as possible using this method and return the resulting string. If the final string is empty, return Empty String
  
  Example.
  
  
  aab shortens to b in one operation: remove the adjacent a characters.
  
  
  Remove the two 'b' characters leaving 'aa'. Remove the two 'a' characters to leave ''. Return 'Empty String'.
  
  Function Description
  
  Complete the superReducedString function in the editor below.
  
  superReducedString has the following parameter(s):
  
  string s: a string to reduce
  Returns
  
  string: the reduced string or Empty String
  Input Format
  
  A single string,s .
  
  Constraints
  1 <=length of s <=100

** The First Solution:

      for (let i = 0; i < s.length - 1; ) {
      if (s[i] !== s[i + 1]){
        i++;
        continue ;
      }
      s = s.slice(0, i) + s.slice(i + 2);
      if (i > 0) i--;
       else i++;
    }
    return s !== "" ? s : "Empty String";
    
** Logic Explanation:

  - The initial idea was to compare each character with the next adjacent character.
  
  - Iterate through the string while avoiding out-of-bounds access.
  
  - If two adjacent characters are equal, remove them using slice.
  
  - After deletion, move the index back one step (if possible) to re-check newly adjacent characters.
  
  - Continue until no more adjacent duplicates exist.

** Optimal Solution:

  let new_str = "";
    for (let ch of s) {
      if (new_str[new_str.length-1] === ch) {
        new_str = new_str.slice(0, new_str.length - 1);
  
      } else new_str += ch;
    }
    return new_str !== "" ? new_str : "Empty String";

** Logic Explanation:

  Instead of modifying the original string repeatedly, a new string is used:
  
  - Traverse the input string character by character.
  
  - Compare the current character with the last character in new_str.
  
  - If they match, remove the last character from new_str.
  
  - Otherwise, append the current character to new_str.
  
  - At the end, return the resulting string or "Empty String" if empty.

*/
let new_str = "";
  for (let ch of s) {
    if (new_str[new_str.length-1] === ch) {
      new_str = new_str.slice(0, new_str.length - 1);

    } else new_str += ch;
  }
  return new_str !== "" ? new_str : "Empty String";
