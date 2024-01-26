const array = [1,2,3,4,5,6] 

function addme(a)  {
// var sum = 0
//    a.forEach(element => {
//     sum += element
//    });
//    console.log(this)
// return sum
    let sum = 0
    for (let i = 0; i < a.length; i++) {
        sum += a[i]  
    }
    return sum
}

console.log(addme(array))

// class Animal {
//     constructor(name, numOfLegs) {
//         this.name = name
//         this.numOfLegs = numOfLegs

//     }
//     sayName( ) {
//         console.log(`My name is ${this.name}`)
//     }
//     sayNumberOfLegs() {
//         console.log(`I have ${this.numOfLegs} legs`)
//     }
// }

// const Dog = new Animal("Bingo", 4)

// Dog.sayName()
// Dog.sayNumberOfLegs()

function stringIncludes(sentence, word) {
const tempString = sentence.toLowerCase()
const tempWord = word.toLowerCase()
    return sentence.toLowerCase().includes(word.toLowerCase())

}

console.log(stringIncludes("this is me","Me"))
const obj = [{a:1},{name:"Jane"}, {}, {name:"Mark"},{name: "Sophia"}, {b:2}]

function getNames(object) {
    // return object.filter(each => each.name).map(ob => ob.name)
    return object.map(each => {
        if (each.hasOwnProperty("name")) {
            return each['name']
        }
        
    }).filter(Boolean)
}

console.log(getNames(obj))


function delay(n) {
  return new Promise(resolve => setTimeout(resolve,n))
}

(async () => {
    console.time("testing delay")
    await delay(1000)
    console.timeEnd("testing delay")
})();