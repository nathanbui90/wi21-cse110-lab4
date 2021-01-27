Part 1 Questions:

1. The value stored in i will be printed to the console. For each iteration of the for loop, i is increased by one until the condition i is less than prices.length is false, which then stops the for loop. Based on the function, i will be equal to the length of prices when the for loop stops because that is the first case where the condition i < prices.length is false. The reason as to why i is still defined outside the scope of the for loop is because it is defined as a var type. The type var is function scoped. Based on the arguments from question 4, console.log(i) will print out 3 because that is the length of prices.

2. The value stored in the variable discountedPrice is printed to the console. Within the for loop, discountedPrice is continuously being assigned an element within prices times (1-discount). On the last iteration, it is assigned the product of the value of the last element within prices and 1 - discount. Based on the arguments from question 4, discountedPrice will be equal to 150 because the last element in prices is 300 and the discount is 0.5. So, console.log(discountedPrice) will print out 150. Since discountedPrice is of type var then is it defined throughout the entire program.

3. The value stored in the variable finalPrice is printed to the console. On the last iteration of the for loop, finalPrice is equal to discountedPrice rounded to the hundreths place. As explained in question two, discountedPrice will be equal to the last element within prices times (1 - discount). For finalPrice, Math.round(discountedPrice * 100) multiplies discounted price by 100 and then the function Math.round() rounds that product to the nearest integer. The returned value from Math.round() is then divided by 100, which is then what finalPrice is set equal to. Based on the arguments in the question 4, console.log(finalPrice) will print 150. Since finalPrice is of type var and var is function scoped then it is defined within the scope of line 13.

4. The function returns an array that is like prices, but each element is multiplied by 1 - discount. In this case, prices is [100,200,300] with discount equaling .5. So, the return value is the array [50, 100, 150]. This works because discounted is of type var and var is function scoped. So, discounted is defined throughout the entire program.

5. Line 11 will throw a reference error because i was not declared in that scope. Even though i is defined in the for loop, it is of type let and let is block scoped. So, i is only defined within that for loop.

6. Line 12 will throw a reference error because discountedPrice was not declared in that scope. Even though discountedPrice is declared within the for loop, it is of type let and let is block scoped. So, discountedPrice is only defined within that for loop.

7. Line 13 will print out the value stored in finalPrice. On the last iteration of the for loop, finalPrice is equal to discountedPrice rounded to the hundreths place. As explained in question two, discountedPrice will be equal to the last element within prices times (1 - discount). For finalPrice, Math.round(discountedPrice * 100) multiplies discounted price by 100 and then the function Math.round() rounds that product to the nearest integer. The returned value from Math.round() is then divided by 100, which is then what finalPrice is set equal to. Based on the arguments in the question 4, console.log(finalPrice) will print 150. This line works because, although finalPrice is type let and let is block scoped, it is declared in the same scope as console.log(finalPrice).

8. The function returns an array that is like prices, but each element is multiplied by 1 - discount. In this case, prices is [100,200,300] with discount equaling .5. So, the return value is the array [50, 100, 150]. This works because, even though discounted is of type let and let is block scoped, discounted was declared in the same scope as the line return discounted.

9. Line 11 will throw a reference error because i was not declared in that scope. Even though i is defined in the for loop, it is of type let and let is block scoped. So, i is only defined within that for loop.

10. Assuming the previous lines worked, Line 12 will throw a reference error because it was not declared in the scope. This is because discountedPrice is of type const and const is block scoped. Since discountedPrice is declared within the for loop then it is only defined within the for loop. 

11. Assuming the previous lines worked, console.log(finalPrice) will print the value stored in final price. Even though finalPrice is of type const and const is block scoped, finalPrice is declared within the same scope.

12. The function wouldn't be able to return anything because an Assignment to constant variable error would be thrown. finalPrice is defined as a const variable before the for loop, but within the for loop the program tries to assign something to finalPrice. This will cause an error to be thrown.

13.
    A) student.name
    B) student['Grad Year']
    C) student.greeting()
    D) student['Favorite Teacher'].name
    E) student.courseLoad[1]
    
14.
    A) '32'
    B) 1
    C) 3
    D) '3null'
    E) 4
    F) 0
    G) '3undefined'
    H) NaN
    
15.
    A) true
    B) false
    C) true
    D) false
    E) false
    F) true

16. The "==" operator compares only the values of two operands or variables. As long as the values of what is being compared is the same then the "==" operator will return true even if the types are different. However, for "===", both the values and types of what is being compared is checked. For example, 0 == false will be true because they both have the value of 0. However, 0 === false will return false because they are different types.

17. 'How are you?' gets printed. For the first condition for the if statement, 2 == true will return false because the value of true is 1 and 1 is not the same value as 2. For the else if condition statement, there is a 2 and that will be converted to a boolean value. Positive numbers converted to a boolean value will be true so the contents of the else if will be executed. Since the else if condition statement was true then we skip the else statement and its contents that follow the else if statement.    
    
