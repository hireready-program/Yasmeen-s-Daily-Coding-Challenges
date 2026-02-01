/* 

** General Information

  Platform: Leetcode
  
  Date: 31/1/2026
  
  Language: JavaScript
  
  Collaboration: Individual
  
  Challenge Name: Palindrome Number
  
  Challenge Link:
  https://leetcode.com/problems/palindrome-number/description/

** Problem Description:

Given an integer x, return true if x is a palindrome, and false otherwise.
Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1


** The Solution:

  var isPalindrome = function(x) {
  x=String(x);
  let right_pointer=0
  let left_pointer= x.length-1;
  while(left_pointer>right_pointer){
                if(x[left_pointer]!==x[right_pointer]){
          return false
      }
      right_pointer++;
      left_pointer--;
  }
  return true
  
};
    
** Logic Explanation:

The function utilizes a Two-Pointer Technique to verify the symmetry of the input,
After converting the value to a string, it initializes two pointer: one at the beginning
and one at the end of the sequence. The algorithm then iterates toward the center, comparing the characters at each pointer.
If at any point the characters do not match, the function immediately returns false.
This process continues until the pointers meet or cross; if no mismatches are found,
the input is confirmed as a palindrome and returns true.
  
