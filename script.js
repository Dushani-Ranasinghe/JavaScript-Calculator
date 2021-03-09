  //function to clear the display 
  function clear() 
  { 
      document.getElementById("result").value = "" 
  } 
//function to display value 
 function display(val) 
 { 
     document.getElementById("result").value+=val 
 } 
   
 //function to get the value and return the result 
 function calculate() 
 { 
     let x = document.getElementById("result").value 
     let y = eval(x) 
     document.getElementById("result").value = y 
 } 
   
