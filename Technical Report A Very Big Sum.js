/* 

** General Information

  Platform: Hacker Rank
  
  Date: 2/2/2026
  
  Language: JavaScript
  
  Collaboration: Team
  
  Challenge Name: A Very Big Sum
  
  Challenge Link:
  https://www.hackerrank.com/challenges/a-very-big-sum/problem?isFullScreen=true

** Problem Description:

 In this challenge, you need to calculate and print the sum of elements in an array, considering that some integers may be very large.

Function Description

Complete the  function with the following parameter(s):

: an array of integers
Return

: the sum of the array elements
Input Format

The first line of the input consists of an integer .
The next line contains  space-separated integers contained in the array.

Output Format

Return the integer sum of the elements in the array.

Constraints


Sample Input

STDIN                                                   Function
-----                                                   --------
5                                                       arr[] size n = 5
1000000001 1000000002 1000000003 1000000004 1000000005  arr[...]  
Output

5000000015
Note:

The range of the 32-bit integer is .

When we add several integer values, the resulting sum might exceed the above range. You might need to use long int C/C++/Java to store such sums.


** The Solution with js:

    let sum = 0
    for(let i = 0; i<ar.length;i++){
        sum += ar[i]
    }
    return sum

** The Solution with C++:
    long aVeryBigSum(vector<long> ar) {
    long sum = 0;
    for(int i = 0;i<ar.size();i++){
        sum += ar[i];
    }
    return sum;
}

** Logic Explanation:
We initially attempted to solve this problem using JavaScript and were surprised by how simple the solution was.
As a result, one of our teammates, Salman, suggested trying a different language that requires explicit data type definitions.
We chose C++, and while implementing the solution, we noticed an issue when using the int data type due to integer overflow.
To address this, we switched to the long data type, which supports a larger range and better fits the constraints specified in the problem description
  
*/
let sum = 0
for(let i = 0; i<ar.length;i++){
    sum += ar[i]
}
return sum
