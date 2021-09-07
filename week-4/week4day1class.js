
let friends = ["bob", "mary", "sue"]
console.log(friends)


for (let index = 0; index < friends.length; index++){
    console.log(friends[index])
}


function add(a,b){
    let result = a + b
    if ( result <= 50 || result >= 80 ){
        console.log(80)}
 
    else {
        console.log(65)
    }  
}

 add(30,30)


 function isVowel(letter) {

    letter = letter.toLowerCase() 

    if(letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
        return true 
    } 

    return false 
}

console.log(isVowel("a"))
console.log(isVowel("b"))
console.log(isVowel("c"))
console.log(isVowel("u"))
console.log(isVowel("A"))

class BankAccount{
  constructor(balance,type){
  this.balance = balance
  this.type = type
}

   deposit(amount){
    this.balance += amount
       
}
   withdraw(amount){
   this.balance -= amount
}
}
let  bankAccount = new BankAccount(500, "checking")
bankAccount.deposit(100)
bankAccount.withdraw(50)


console.log(bankAccount.balance)
   