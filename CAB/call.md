# Function.prototype.call()
# syntax : call(thisArg)

# thisArg
the value to use as this when calling func, 
if the function is not in # strict mode, null and undefined will be replaced with the global object, and primitive values will be converted to object 
ex

# using call() method to invoke a function without specifying the first argument

# global object is an object that always exists in the global scope
# The global object's interface depends on the execution context in which the script is running

# it defaults to undefined, in non-strict mode, the this value is then substituted with globalThis(which is akin to the global object)

