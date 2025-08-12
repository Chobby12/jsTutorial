const person = {
    name: "Emeka",
    age: 30,
    isMarried: false,
    children: ["Uba","Kofi", "Amara", "lo"],
    address:  {
        "street": "Odunukwe",
        "house number" : 45
    }
}

console.log(Object.keys(person))
console.log(Object.assign(person, {church: "St Mulumba"}))
console.log("values",Object.values(person))
person.village = "Ikwo"
console.log(person.address["house number"])

// delete person.address
// console.log(person)


const school = new Object()

school.name = "Great Minds"

school.name = "Free Minds"

console.log(Object.assign(school,{'no of students':20}))
console.log(Object.keys(school))
console.log(Object.values(school))

// console.log(Object.create())

// console.log(animal)/
console.log(school)

const speaker = {
    name: "Hannibal",
    speak: function(){
        console.log(`Nemo dat quod non habet.`)
    }
}

const junior = {
    interpret: function(...words){
        console.log(...words)
    }
}

console.log(speaker)
console.log(typeof console)

speaker.speak()

junior.interpret(1+1)
junior.interpret("Hello, world")