/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/
console.log(largeInteger(2,10));
function largeInteger(int1,int2){
    if(int1>int2){
        return int1;
    }else return int2;
}


 /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
let arr=[3,-7,2];
console.log(findProductSign(arr));
function findProductSign(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            return alert("The sign is -");
        }
    }
}


 /******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
console.log(sortNum(0,-1,4));
  function sortNum(int1,int2,int3){
      if(int1>int2 && int1>int3){
         if(int2>int3){
             alert(`${int1},${int2},${int3}`);
         }else  alert(`${int1},${int3},${int2}`);
            
      }else if(int2>int1 && int2>int3){
          if(int1>int3){
            alert(`${int2},${int1},${int3}`); 
          }else  alert(`${int2},${int3},${int1}`); 
      } 
      else if(int3>int2 && int3>int2){
        if(int2>int1){
            alert(`${int3},${int2},${int1}`);
        }else  alert(`${int3},${int1},${int2}`);
  }}
 /******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
let arr=[-5,-2,-6,0,-1];
console.log(largestNum(arr));
  function largestNum(arr){
      let max=0;
      for(let i=0;i<arr.length;i++){
          if(max<arr[i]){
              max=arr[i];
          }
      }
      return alert(max);
      
  }
 /******* End Your Code ********* */

 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
console.log(comparingNum(5,6));
  function comparingNum(num1,num2){
      if(num1>num2){
          return alert("Hello world");
      }else return alert("Good bye");
  }
 /******* End Your Code ********* */



