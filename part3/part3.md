DevTools - Debugging
    
    What was the bug?

        The bug was that, in caculatedSum, num1 and num2 were treated as strings. So, when you do num1 + num2 the program concantenates the strings. For example, if num1 is 1 and num2 is 2 then doing num1 + num2 would output 12.

     How would you fix it?

        I would fix it by calling the function parseInt() on both num1 and num2 within the function calculatedSum. So, the original line, let result = num1 + num2, would become let result = parseInt(num1) + parseInt(num2);.

DevTools - Network Tab

    1. citylots.json
    2. part2.js
    3. 11.7 MB
    4. 1.66 s
    5. Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36
    6. Apache
    7. Tue, 26 Jan 2021 22:14:13 GMT
    8. application/json
    9. fetchData@part2.js:2