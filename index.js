// Conditionals

// if; else if; and else


let customer = prompt("What is your name?")
let price=257_000
let age = Number(prompt("Enter age"))
if (age<=18){
    price = price - ((20/100) * price)
    console.log(`Hello ${customer}, you are expected to pay: ${price}`)
}
else if(age>18 ){

}
else{
    console.log(`Hello ${customer}, you are expected to pay: ${price}`)
}
// console.log(price)