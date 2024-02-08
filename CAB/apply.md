# function.prototype.apply()

# what is array
Array is ordered list of values that refer to with a name and an index
# Javascript does not have an explicit  array data type.
# Number of concepts similar typed array as well array

# The apply() method of function instances call this function with a given this value, and arguments provided as an array (or an array-like object)

#apply(thisarg)

# Do not use apply() method to chain constructors and inheritance
# This invokes the constructor function as a plan function , which means new.target is undefined and classes throw an error because they can't be called without new. 

# Using apply() to append an array to another
we can use Array.prototype.push()
push accepts a variable number of arguments, and push accepts multiple elements at once
Array.prototype.concat() , but does not append to the existing array - it create new array and return new array

# in this case we can use implicitly "spread" an array an a series of arguments
