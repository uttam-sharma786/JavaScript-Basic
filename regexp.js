// Search in javascript method of the string object. 
// It used to identify the presence and position of the starting point of a matching pattern 
// or a regular expression in the textual given

// regular expression also called regexp  is a pattern of characters creating a search pattern

let regexp = /A-Z98-Atf-@45/;
console.log(regexp);

// syntax : str.search(regexp)

// if a non-regexp object is passed as a parameter, it is converted into a regexp object first
// syntax : new RegExp(pattern, flags)
// The search() method is used to locate the index of a matched regular expression
// The return value is a number corresponding to the index of the regexp

// Note if a match is found for the exprssion , the return value is the index
// Note if a match is not found in the string, the retrun value is -1

// Used Cases: Whan a pattern of characters has to be identified in a given string.
// if found , then the index of the beginning of the pattern in the string

// if the user only intends to know whether the pattern is present or not,the test() method may be put to use on the regexp
// the boolean value is returned.
// syntax: regexp.test(string)

// Search()
//a. It is used when the index location of the regexp is to be known
//b. Search() return a numeric value

//test()
//a.It is used when only the presence of the regexp is to be known
//b. test() returns a boolean values

// syntax: string.match(regexp);
//note: execution time a lot more compare between test() and search()
// syntax: string.indexof(searchval,starting)


//Ex:

var str = "Wraptron Topics is the ultimate destination for development new tools"
console.log(str.search("is")); // output return numeric value , 16
// if charcater not present the string?

console.log(str.search("z")); // output return value -1

console.log(str.search(/[A-Z]/));