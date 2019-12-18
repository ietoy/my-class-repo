# INTERVIEW QUESTIONS

## Instructions

### Pseudocoding

Complete the Pseudocode for the following Algorithmic Prompts. Pseudocode entails *describing the necessary steps to solve the problem using programming principles* as opposed to *hard-coding* it out. 

**No Coding**

Each step of your algorithm you should make the following items clear: 

```
What are you going to do?
How are you going to do it? 
Why are you going to do it?
```

<hr>

## Prompt #1 `sum`

Create a function `calculateSum` that takes in an array of integers. 

Your function returns the sum of all integers within the input array.

Note: Complete only the Pseudocode.

### Example

Test Case 1: [1, 2, 5]  
*Expected Output: **8***

Test Case 2: [1, 2, 3, 4]  
*Expected Output: **10***

Test Case 3: [100, 50, 75, 80]  
*Expected Output: **305***

## List You Pseudocode Below: `sum`

<!-- for (var i = 0; i < arr.length; i++ ) {
        var sum;
        sum = 0;
        sum += arr[i]
        return sum-->

Step One: Look at every item in the array using a for loop

Q: What are you going to do? 

A: I am going to look at every item in the array that my function takes in.

Q: How are you going to do it? 

A: Using a for loop, I will look at each array item.

Q: Why are you going to do it? 

A: In order to get the sum of all numbers in the array, I must know what each of those numbers are

Step Two: I will find the sum of all numbers in the array

Q: What are you going to do? 

A: First, I will define a new variable, sum, and set its starting value to 0

Q: How are you going to do it? 

A: within the for loop, I will issue this new definition using var sum;

Q: Why are you going to do it? 

A: In order to return the sum of the integers in the array, we must have a place to "save" that information so to speak. using a variable lets me store this information in the code.

Step Three: I will add all of the numbers together and return the variable, sum

Q: What are you going to do? 

A: within my for loop, i am going to add all of the values together, one by one, to the variable sum, which has the initial value of 0

Q: How are you going to do it? 

A: By using the += operator to define the sum variable as equal to itself, plus the next number in the array

Q: Why are you going to do it? 

A: I need to do this so that all of the array integers are added together and stored as a variable, which can then be returned.



<hr>


## Prompt #2 `mean`

Create a function `mean` that takes in an array of integers as an argument. 

Your function returns the `mean` / `average` for all integers within the input array.

The mean is the average of a set of numbers, so use your `calculateSum` function defined in Prompt #1 and sum all numbers and then divide by the total number of integers in the input array. 


Note: Complete only the Pseudocode.

### Example
Test Case 1: [1, 2, 5]  
*Expected Output: **2.666...***

Test Case 2: [1, 2, 3, 4]   
*Expected Output: **2.5***

Test Case 3: [100, 50, 75, 80]  
*Expected Output: **76.25***

## List You Pseudocode Below: `mean`


Step One: look at all of the variables

Q: What are you going to do? 

A: I will write a for loop that looks at every item in the array

Q: How are you going to do it? 

A: by writing a for loop that moves through each item in the array one by one.

Q: Why are you going to do it? 

A: In order to obtain the mean, I must first obtain the sum, which will require that I know each number in the array.

Step Two: add them together

Q: What are you going to do? 

A: Add all of the numbers together.

Q: How are you going to do it? 

A: Similar to the sum function above, I will define a new variable, sum, with a starting value of 0. Then, I will add each item in the array to the sum and store that value.

Q: Why are you going to do it? 

A: To obtain the mean, I must first have the sum. Storing the added values of the array will allow me to determine the average value later.

Step Three: 

Q: What are you going to do? 

A: I will divide the sum of all of the integers in the array, then divide them by how many numbers there were in the array.

Q: How are you going to do it? 

A: I will take the sum, which I had determined earlier, then divide it by the length of the array.

Q: Why are you going to do it? 

A: the length of the array tells me how many items were in it. Dividing the sum by this number will give me the mean.


<hr>

## Prompt #3 `median`

Create a function `median` that takes in an array of integers as an argument. 

Your function returns the median of your input array.

The median is the middle value, so first you will have to sort the numbers then find the middle value


Note: Complete only the Pseudocode

## List You Pseudocode Below: `median`


Step One:

Q: What are you going to do? 

A: sort the items of the array

Q: How are you going to do it? 

A: bubble sort the integers to be arranged in ascending order

Q: Why are you going to do it? 

A: in order to find the median, we must have all numbers in the array sorted from least to gratest.

Step Two: 

Q: What are you going to do? 

A: find the middle index of the array

Q: How are you going to do it? 

A: Divide the length of the array in half, then find the [i] item of the array that would match this position

Q: Why are you going to do it? 

A: the median is the middle value of a set of ordered numbers. finding the center indicies of the array gives us that value

Step Two: 

Q: What are you going to do? 

A: if theere is a middle number of the array return this number, if not, return the sum of the two adjacent numbers around what would be the middle

Q: How are you going to do it? 

A: Using the % operator, i will check to see if the [i] generated from dividing the array length in half is a whole number. If it is, i will find [i] in the array then return that number. If there is not  and exact middle of the array, i will take the average of the adjacent array indecies and return that value.

Q: Why are you going to do it? 

A: In odd numbered sets of numbers, there will be an exact median. In even numbered sets there is not. This allows us to return the real median if there is one and find an average value for those that dont have a real median.

### Example


Test Case 1: [12, 3 ,5]    
*Expected Output: **5***

Test Case 2: [3, 13, 7, 5, 21, 23, 39, 23, 40, 23, 14, 12, 56, 23, 29]  
*Expected Output: **23***

Test Case 3: [3, 5, 7, 12, 13, 14, 21, 23, 23, 23, 23, 29, 40, 56]  
*Expected Output: **22***

*Note:* In the case where the total number of data points is even, take the average of the two middle numbers.

Test Case 4: [3, 4, 7, 9]  
*Expected Output: **5.5***



<hr>


<hr>

## Prompt #4 `mode`

Create a function `mode` that takes in an array of integers as an argument. 

Your function returns the mode of your input array.


The mode is the number that is repeated more often than any other.


Note: Complete only the Pseudocode.

## List You Pseudocode Below: `mode`


Step One:

Q: What are you going to do? 

A: 

Q: How are you going to do it? 

A: 

Q: Why are you going to do it? 

A: 

Step Two: 

Q: What are you going to do? 

A: 

Q: How are you going to do it? 

A: 

Q: Why are you going to do it? 

A: 

Step Three: 

Q: What are you going to do? 

A: 

Q: How are you going to do it? 

A: 

Q: Why are you going to do it? 

A: 

### Example
Test Case 1: [13, 18, 13, 14, 13, 16, 14, 21, 13]  
*Expected Output: **13***

Test Case 2: [1, 3, 1, 1, 8]  
*Expected Output: **1***

Test Case 3: [2, 14, 9, 10, 18, 14]  
*Expected Output: **14***

Test Case 4: [2, 3, 4, 5, 6]   
*Expected Output: **2*** 

*Note:* In the case where all the integers appear with the same frequency, take the first one.

<hr>
