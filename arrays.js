/*Practice using a T-diagram to go through the following code snippets and predict the output.  Once you're done run your code and see if your prediction was correct.  Create a .js file with the code snippets and your predicted output and upload it once you're done. */

//Predict 1
function predict1() {
  var arr = [8, 6, 7, 5, 3, 0, 9];
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
//predict1();
//My Prediction
/*It appers that we have a for each loop that is looping through an Array called arr. It appears that the only instructions are to console.log teh value of each index Array arr has.Arrays having a index that starts at 0, the arr.legnth, shouldnt be a proplem as 6 indexes will be looped through even though the Array has teh length of 7.*/

//The Outcome
/*My prediction was corect the Output was teh value of each index found in the Array.*/

//Predict 2
function predict2() {
  var arr = [7, 3, 8, 4, 2, 0, 1];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      console.log(arr[i]);
    } else {
      console.log("That is odd!");
    }
  }
}
//predict2();

//My Prediction
/*I believe that the loop is looping through the Array arr, to find even and odd numbers. My prediction is that for index(0,1,and 6 ) will apply to the else statment, causing the console.log to display the"That is odd!" output. The other indexs will apply to the if statement, resulting the (i) values to dispay in the terminal.*/

//The Outcome
/* I was right!!! The odd numbers caused the console.log to display the"That is odd!" and the even nubers were also displayed*/

//Predict 3
function predict3() {
  var arr = [1, 3, 8, -5, 0, -2, 4, -1];
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      newArr.push(arr[i]);
      arr[i] = arr[i] * -1; //turns into positive number
    } else if (arr[i] == 0) {
      arr[i] = "Zero";
    } else {
      arr[i] = arr[i] * -1;
    }
  }
  console.log(arr);
  console.log(newArr);
}
predict3();

//My Prediction
/*It appears that this is a for lop with a  if ,else if ,else statment inside of it. I belive that the positive numbers within the arr array will push past the if and else if of the stament and will be converted into negative numbers due to the * -1 in the last else. The index in the array that hold negative numbers will fail the first if, pushing the value into the new Array and then having them converted into positive numbers. The 0 valued indexes will only apply to the else if whic will have teh output of "Zero"!
Output will be: arr = [-1,-3,-8,5,"Zero",2,-4,1] and newArr = [-5,-2,-1]*/

//The Outcome
/*My predictions of the Outcome was correct!!! it was: 
[-1, -3, -8, 5,  'Zero', 2, -4, 1]
[ -5, -2, -1 ]*/
