function myFunction(list) {
  
  for (var i = 0; i < list.length; i++) {

    setTimeout(function () {
      console.log(i);
    }, 3000)

  }
  
}


var testArray = [10, 20, 30, 40, 50];
myFunction(testArray);

// To run the script, open your terminal window, navigate to current directory and enter command below: 
// node script.js