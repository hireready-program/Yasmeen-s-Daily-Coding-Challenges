/* 

** General Information

  Platform: Leetcode
  
  Date: 28/1/2026
  
  Language: JavaScript
  
  Collaboration: Individual
  
  Challenge Name: Longest Common Prefix
  
  Challenge Link:
  https://leetcode.com/problems/longest-common-prefix/description/

** Problem Description:

  Write a function to find the longest common prefix string amongst an array of strings.

  If there is no common prefix, return an empty string "".
  
  
  Example 1:
  
  Input: strs = ["flower","flow","flight"]
  Output: "fl"
  Example 2:
  
  Input: strs = ["dog","racecar","car"]
  Output: ""
  Explanation: There is no common prefix among the input strings.
   
  
  Constraints:
  
  1 <= strs.length <= 200
  0 <= strs[i].length <= 200
  strs[i] consists of only lowercase English letters if it is non-empty.


** The First Solution:

    let counter = 0;
    let longest_pref = strs[0][counter];
    while(counter<strs[0].length){
        for(const str of strs){
            if(!str.startsWith(longest_pref)){
                return longest_pref.length ==1 ? "": longest_pref.slice(0,longest_pref.length-1)
            }
        }
    counter ++;
    longest_pref += strs[0][counter]
  }
  return longest_pref
    
** Logic Explanation:

  - A counter is used to track the current prefix length derived from the first string.

  - The variable longest_pref initially stores the first character of the first string.

  - While the counter does not exceed the length of the first string:

      - Iterate over all strings in the input array.

      - Check whether each string starts with the current longest_pref.

      - If any string does not match:

          - Return an empty string if the prefix length is 1.

          - Otherwise, remove the last character from longest_pref and return the result.

  - If all strings match the current prefix:

      - Increment the counter.

      - Extend longest_pref by appending the next character from the first string.

  - If the loop completes successfully, return the final longest_pref.

** Optimal Solution:
    let prefix = strs[0];
    for (let i=1; i<strs.length;i++) {
      while (!strs[i].startsWith(prefix)) {
        prefix = prefix.slice(0, -1);
        if (!prefix) return "";
      }
   }
   return prefix;

** Logic Explanation:
   - Initialize prefix with the first string in the input array.
   - Iterate through the remaining strings, starting from the second one.
   - For each string:
      - Check whether it starts with the current prefix.
      - If it does not, remove the last character from prefix and retry.
      - Continue shortening the prefix until:
         - The current string starts with prefix, or
         - The prefix becomes empty, in which case no common prefix exists and an empty string is returned.
  - Repeat this process for all strings.
  - After all iterations, the remaining value of prefix represents the longest common prefix shared by all strings.
*/
 for (const str in strs) {
    while (!str.startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
      if (!prefix) return "";
    }
}
return prefix;
