//THe machanism the JS interpreter used to keep the track of its place in a script that calls multiple functions

//how JS "knows" what funtion is currently being run and what functuons are called from within that function etc

//when a script calls a function the interpreter adds it to the call stack then start carrying out the functions
//any function that are called by that function are added to the call stack surther up and run where their calls are reached

//when the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.