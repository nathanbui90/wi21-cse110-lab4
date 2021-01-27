Part 1 Questions:

1. The value stored in i will be printed to the console. For each iteration of the for loop, i is increased by one until the condition i is less than prices.length is false, which then stops the for loop. Based on the function, i will be equal to the length of prices when the for loop stops because that is the first case where the condition i < prices.length is false. The reason as to why i is still defined outside the scope of the for loop is because it is defined as a var type. The type var is function scoped. Based on the arguments from question 4, console.log(i) will print out 3 because that is the length of prices.

2. The value stored in the variable discountedPrice is printed to the console. Within the for loop, discountedPrice is continuously being assigned an element within prices times (1-discount). On the last iteration, it is assigned the product of the value of the last element within prices and 1 - discount. Based on the arguments from question 4, discountedPrice will be equal to 150 because the last element in prices is 300 and the discount is 0.5. So, console.log(discountedPrice) will print out 150.

3. The value stored in the variable finalPrice is printed to the console. On the last iteration of the for loop, finalPrice is equal to discountedPrice rounded to the hundreths place. As explained in question two, discountedPrice will be equal to the last element within prices times (1 - discount). For finalPrice, Math.round(discountedPrice * 100) multiplies discounted price by 100 and then the function Math.round() rounds that product to the nearest integer. The returned value from Math.round() is then divided by 100, which is then what finalPrice is set equal to. Based on the arguments in the question 4, console.log(finalPrice) will print 150.

4. The function returns an array that is like prices, but each element is multiplied by 1 - discount. In this case, prices is [100,200,300] with discount equaling .5. So, the return value is the array [50, 100, 150]. To explain the function, it takes in an array and iterates through each element using a for loop. Starting from index 0, it takes the element at that index  

5. 
