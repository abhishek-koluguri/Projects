var max = function() {
  if(arguments.length > 0)
    return Math.max.apply(null, arguments);
  else
    throw "input is empty";
}

var printMax = function() {
  try {
    console.log(max.apply(null, arguments));
  } catch(ex) {
    console.log("oops: " + ex);
  } finally {
    console.log("finally called...");
  }
}

printMax(1, 2);
printMax(3, 1);
printMax(1, 2, 5, 0);
printMax();

//much like in Java/C# except
//1. you can throw anything you like
//2. no type information needed in the catch