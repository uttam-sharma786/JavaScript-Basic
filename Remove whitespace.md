### How to remove whiteSpace from string
## We can remove the leading and trailing whtitspaces using the trim() method

## Indrodution

# WhiteSpace is just unnecessary space. It can be in front,back,or both in a string

# To trim() method . It returns a new string with no whiteSpaces

# ex trim() method

let myStr = "    this is my string  "
let trimStr = myStr.trim();  //return => "This is my string"
console.log(trimStr);

## Syntax
## let trimmedVar = var_name.trim();

## note : trim method onle work with the string value
## Time and space complexity of trim() is O(N) where N is size of string
## trim() return a new string, withour modify original string
## trim() is a pre-defined method in javascript