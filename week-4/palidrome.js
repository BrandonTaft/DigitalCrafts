
let array = [9,1,5,2,11,5,8]
let  smallest = [0]


for (index = 0; index >= smallest; index++){
   if (array[index] < smallest) {
      smallest = array[index];
   }

}
console.log(smallest)





let array = [9,1,5,2,11,5,8]
let  largest = [0]
    for (index = 0; index <= largest; index++){
    if (array[index] > largest) {
    largest = array[index];
       }
     }
    console.log(largest)   




function fizzBuzz(number){
if(number % 3 == 0 || number % 5 == 0){
    console.log("fizzbuzz")
            }
    else if(number % 5 == 0){
        console.log("buzz")
            }
    else if(number % 3 == 0){
        console.log("fizz")
            }
    else{
        console.log("NOPE")
            }
        }
        
let result = fizzBuzz(1)




function odd_Even(number){
    if (number % 2 == 0){
    console.log("this number is even")
    }
    else{
    console.log("this number is odd")
    }
  
  }
  let result = odd_Even(8)
        






function  palindrome(word){

    let reverse_Word = word[::--]
    if (word == reverse_Word){
      console.log("This is a Palindrome")
    }
    
    else {
      console.log("This is not a Palindrome")
    }  
}