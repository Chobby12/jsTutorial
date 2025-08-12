const numbers = [1,2,3,4,5]
const names = ["Okoro", "Damian", "Cosmos"]
names[0]="jude"
// const indices = [0, 1, 2, ...]
console.log(names[0])
console.log(names)

numbers.push(6)
numbers.pop()
numbers.unshift(1)
numbers.shift()

console.log(numbers)
console.log(typeof numbers)
console.log(Array.isArray(numbers))
// console.log(Array.isArray(person))


function range(start=1, end=10, step=1){
    step = Math.abs(step)
    let nums = []
    if(start>end){
        for(let i=start; i>=end; i-=step){
            nums.push(i)
        }
    }else{
       for(let i=start; i<=end; i+=step){
            nums.push(i)
       } 
    }
    return nums
}

console.log(range(1,100,2))

let oddNumbers = range(1,200,2)

console.log(oddNumbers)

console.log(oddNumbers[99])
console.log((oddNumbers.length-1)/2)
console.log(oddNumbers[Math.ceil((oddNumbers.length-1)/2)])
