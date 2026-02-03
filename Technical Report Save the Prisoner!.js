/* 

** General Information

  Platform: HackRank
  
  Date: 3/2/2026
  
  Language: JavaScript
  
  Collaboration: Team
  
  Challenge Name:Save the Prisoner!
  
  Challenge Link:
  https://www.hackerrank.com/challenges/save-the-prisoner/problem?isFullScreen=true

** Problem Description:

A jail has a number of prisoners and a number of treats to pass out to them. Their jailer decides the fairest way to divide the treats is to seat the prisoners around a circular table in sequentially numbered chairs. A chair number will be drawn from a hat. Beginning with the prisoner in that chair, one candy will be handed to each prisoner sequentially around the table until all have been distributed.

The jailer is playing a little joke, though. The last piece of candy looks like all the others, but it tastes awful. Determine the chair number occupied by the prisoner who will receive that candy.

Example
There are  prisoners,  pieces of candy and distribution starts at chair . The prisoners arrange themselves in seats numbered  to . Prisoners receive candy at positions . The prisoner to be warned sits in chair number .

Function Description

Complete the saveThePrisoner function in the editor below. It should return an integer representing the chair number of the prisoner to warn.

saveThePrisoner has the following parameter(s):

int n: the number of prisoners
int m: the number of sweets
int s: the chair number to begin passing out sweets from
Returns

int: the chair number of the prisoner to warn
Input Format

The first line contains an integer, , the number of test cases.
The next  lines each contain  space-separated integers:

: the number of prisoners
: the number of sweets
: the chair number to start passing out treats at
Constraints

Sample Input 0

2
5 2 1
5 2 2
Sample Output 0

2
3
Explanation 0

In the first query, there are  prisoners and  sweets. Distribution starts at seat number . Prisoners in seats numbered  and  get sweets. Warn prisoner .

In the second query, distribution starts at seat  so prisoners in seats  and  get sweets. Warn prisoner .

Sample Input 1

2
7 19 2
3 7 3
Sample Output 1

6
3
Explanation 1

In the first test case, there are  prisoners,  sweets and they are passed out starting at chair . The candies go all around twice and there are  more candies passed to each prisoner from seat  to seat .

In the second test case, there are  prisoners,  candies and they are passed out starting at seat . They go around twice, and there is one more to pass out to the prisoner at seat .



** The First Solution:

  let pointer = s
  for(let i=1; i<= m;i++){
      
      if(pointer >n){
          pointer = 1;
      }
      pointer++;
   }
   return pointer-1 ;
    
** Logic Explanation:
We initially tried to solve the problem using this approach, and it worked correctly for the first few sample test cases.
However, when we submitted the code, it failed due to a time complexity limit exceeded error. As a result,
we started exploring an alternative solution that optimizes the time complexity.

** The Seconed Solution:

  let start = s + m-1
    let result = start % n
    
    if(result == 0){
        return n
    }
    return result
    
** Logic Explanation:
At this point, we started thinking about reducing the number of loops by using division. After that, our teammate joined and suggested thinking in terms of mathematical equations,
giving us hints by visualizing the structure of the problem.
From this visualization, we figured out the key trick: we need to add the starting chair to the number of candies, but also subtract it later
to ensure we get the correct final position. Then, we modeled the result using the number of prisoners.
If the result equals 0, that means the last prisoner receives the bad candy; otherwise, the result directly indicates which prisoner gets it.
  
