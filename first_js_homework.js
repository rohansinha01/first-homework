//Section 1

/* 1. What does the acronym DRY stand for? Why should we pay attention to it? What programming tools have we learned to write DRY code?
 Answer: Don't Repeat Yourself. When we write code, we want to be concise and clear and not cause any confusion when we run our code by potentially putting the same code twice. We used the let function to run the same code multiple time.
 2. What is the difference between const and let and var? Please limit your answer to no more than three short sentences. Don't be afraid to research using google and other resources
 Answer: Const variables cannot change once defined or an error will occur. Let variables can change, but only in the block they are defined in. Var variables can change throughout the function they are in.*/

//Section 2

  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kelvin';
  const f = false;
  console.log(a < b) // a is less than b
  console.log(c > d) // c is greater than d
  console.log('Name' == 'Name') // The text 'Name' does in fact equal 'Name'
  console.log(a < b < c) // a is less than b which is less than c
  console.log(a + a < d) // 2 a's are less than 1 d
  console.log(e != 'Kevin') // The name Kelvin is not Kevin
  console.log(48 !== '48') // The number 48 does not exactly match the text 48
  console.log(f != e) // The text Kelvin is not false
  let g = 0; // using let because we are going to change it later
  console.log(g)
  g = (b + c); // using const and let here gives an error.
  console.log(g)

  
/*Answer: 1. Did you use const, let or var? Why did you choose the one you chose? 
          //I used let for g = 0 because we needed to change the value of g in the next step. 
          Const gives an error because in this function const g = 0 means g is always defined as 0. 
          Var works as well for me.
//Answer: 2. What happens if you don't use const , let or var? Do you get an error? If so what does it say?
          // I did not get an error if I just put g = 0 and then g = (b + c).
//Answer: 3. What happens if you write 10 = g
          // I got the error "Invalid left-hand side in assignment". 
          I entered 'g = 10' to make sure that worked and it did.*/

  console.log(a < (b || f) === !f && e !== c) /* I read this as a < (b || f) 'a is less than 53, so the statement is false' 
  which is the exact same answer the right side of the equation 
  which I read as false and Kelvin does not equal 57, but because of the !, renders a false statement.*/


// Section 3

/* Answer:
Is the code below an infinite loop? Why or why not?

 while (true) {
	console.log('Do not run this loop');
}
 Yes, this is a infinite loop. The loop will run if the statement is true, which the condition says is always.

/*Infinite loop II
Is this loop an infinite loop? Why or why not?

const runProgram = true;

while (runProgram) {
	console.log('Do not run this loop');
	runProgram = false;
}

No, this is not an infinite loop. The while loop has runProgram = false, so the most local function has it set to false.*/


let letters = "A"; //Letters begin with A
let i = 0; // we are starting with 0
//start a while loop that will run as long as i is less than 20
while (i < 20) { 
//this wants to increase the text of A by 1 until we get to 19, but I don't think it will go to B because we haven't added that to this function.
	letters += "A";
  //this will give us 0-19 of this function, which equals A
	i++;
}
//I believe this will give us 20 As
console.log(letters);

/*The code gave us 'AAAAAAAAAAAAAAAAAAAAA' which is what I thought would happen, but I thought it would be As on different lines. This gave it on one line.*/

//Section 4

/*Answer:
A for loop performs the same operation as a while loop. But what are the key differences, if any? What are the similarities?

For Loops will be written on one line, so it's cleaner and leaner. While Loops will require multiple lines, but you can add additional variables.


*/

for (let i = 0; i < 100; i++) {
	console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
}
/* The first part of the control panel is: let i = 0, which means we are starting with 0.
The second part of the control panel is: i < 100, which means we are going to print this message starting with 0 and all the way until 99 (less than 100), which means we got 100 messages (because we are starting with 0)
The third part of the control panel is: i++, which means we are increasing 1 by 1
*/


//Write a for loop that will console.log the numbers 0 to 999.
for (let i = 0; i < 1000; i++) {
  console.log(i)
} // starting the loop at 0; run this loop as long as i is less than 1000; increase i by 1

//Bonus: What is the difference between \ (backslash, above the enter/return key) and / (forward slash or just slash, shares the key with the ?)? What is \ doing in the string?
console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
console.log("Without you, today's emotions are the scurf of yesterday's");
//The backslash zeroes out the potential of any format inconsistencies

//Using a postfix operator i-- instead of i++, write a for loop that iterates in reverse. Console.log a countdown from 999 to 0.
for (let i = 999; i > -1; i--) {
  console.log(i)
} //starting the loop with 999; run this loop as long as i is greater than -1; decrease i by 1

/*Write a for loop that uses string concatenation to send a message to the console as well as the current value of i.
The loop should run from 1 to 10.*/

for (let i = 1; i < 11; i++) {
  console.log('The value of i is: ' + i + ' of 10') // we are starting at 1 and going until 11 one at a time. The text needs spaces around the quotation marks for space.
}

//Rewrite the above loop using String Interpolation/Template Literals instead of concatenation
for (let i = 1; i < 11; i++) {
  console.log(`The value of i is: ` + i + ` of 10`) }// I just added back ticks, not sure if that's all I had to do.



const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];

for (let i = 0; i < StarWars.length; i++) {
  console.log(StarWars[i]); // we starting the index off at 0 for i and then going up until the end of the length of the array one at a time.
}

/*Bonus Challenge (optional):

Figure out how to iterate over every second element of the StarWars array, starting with the first element.*/

{{const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];

for (let i = 0; i < StarWars.length; i += 2) {
  console.log(StarWars[i]);}}} //The += 2 increases from the start of 0 by 2
