### Ternary operator
It is special operator which has three operands.
There is only one such operator i.e Conditional Operator (?:)
Ternary operator is an alternative for an if-else statement

## Three operands
## 1. Conditional Operator or Question Mark Operator(?:)

## Syntax
### condition ? expression_if_true : expression_if_false
The ternary operator combination of a question mark and a colon.To use this opertor, to write a conditional expression (?)
Then, we provide two statements or expressions separated by a colon 
The first expression (expression_if_true) evaluates when the condition results in a true value.
The second expression (expression_if_false) evaluates when the condition results in a false value

### Example1
 var marks = 50
 if(marks>50) {
    console.log("passed);
 } else {
    console.log("Faild")
 }

 ## Using the ternary operator
 console.log((marks >= 40) ? "Passed" : "Failed");


 ## Chaining in the ternary operator

 ## example2
 var AQI = 340;
 if(AQI > 300) {
    result = "Air quality is BAD";
 }else if (AQI > 200) {
    result = "Air Quality is Good";
 } else {
    result = "Air Quality is Excellent";
 }


## using ternary operator
AQI > 300 ? "Air Quality is BAD" : AQI >200 ? "Air Quality is Normal" : AQI>100 ? "Air QUality is good": "Air Quality is Excellent";

### It also used for checking null values in javascript