/* 

** General Information

  Platform: HackRank
  
  Date: 2/11/2026
  
  Language: JavaScript
  
  Collaboration: Team
  
  Challenge Name: Circular Array Rotation
  
  Challenge Link:
  https://www.hackerrank.com/challenges/circular-array-rotation/problem?isFullScreen=true

** Problem Description:

John Watson knows of an operation called a right circular rotation on an array of integers. One rotation operation moves the last array element to the first position and shifts all remaining elements right one. To test Sherlock's abilities, Watson provides Sherlock with an array of integers. Sherlock is to perform the rotation operation a number of times then determine the value of the element at a given position.

For each array, perform a number of right circular rotations and return the values of the elements at the given indices.

Example

Here  is the number of rotations on , and  holds the list of indices to report. First we perform the two rotations: 

Now return the values from the zero-based indices  and  as indicated in the  array.


Function Description

Complete the circularArrayRotation function in the editor below.

circularArrayRotation has the following parameter(s):

int a[n]: the array to rotate
int k: the rotation count
int queries[1]: the indices to report
Returns

int[q]: the values in the rotated  as requested in 
Input Format

The first line contains  space-separated integers, , , and , the number of elements in the integer array, the rotation count and the number of queries.
The second line contains  space-separated integers, where each integer  describes array element  (where ).
Each of the  subsequent lines contains a single integer, , an index of an element in  to return.

Constraints

Sample Input 0

3 2 3
1 2 3
0
1
2
Sample Output 0

2
3
1
Explanation 0

After the first rotation, the array is .
After the second (and final) rotation, the array is .

We will call this final state array . For each query, we just have to get the value of 


** The First Solution:

    for(let i = 1 ; i<=k;i++){
        a.unshift(a[a.length-1]);
        a.pop();
    }
    let result = [];
    for(let i = 0 ; i< queries.length;i++){
        // result[i] = a[queries[i]]
        result.push(a[queries[i]]);
    }
    return result;
    
** Logic Explanation:
   we start solving this problem by thinking on add the last element at the first position after that removing it from the last. 



** Optimal Solution:
   let rotats = k%a.length;
      
     let result = new Array(a.length);
     for(let i = 0; i<a.length; i++){
        result[(i+rotats)%result.length] = a[i];
     }
    
    let final_res=[]
    for(let i = 0 ; i< queries.length;i++){
        final_res.push(result[queries[i]]);
    }
    return final_res;


** Logic Explanation:
   Instead of rotating the array repeatedly, we compute where each element will land after all rotations using modular arithmetic,
   build the rotated array once, and answer each query in constant time.
*/

let rotats = k%a.length;
      
     let result = new Array(a.length);
     for(let i = 0; i<a.length; i++){
        result[(i+rotats)%result.length] = a[i];
     }
    
    let final_res=[]
    for(let i = 0 ; i< queries.length;i++){
        final_res.push(result[queries[i]]);
    }
    return final_res;
