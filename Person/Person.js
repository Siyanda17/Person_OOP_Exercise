class person{
    constructor(name,age,gender,interests){
        this.name = name
        this.age = age
        this.gender = gender
        this.interests = interests
    }
    hello(){
        let interest = ''
        for(let i = 0;i<this.interests.length-1;i++){
            interest += this.interests[i]
            if(i != this.interests.length-2 ){
                interest += ', '
            }
        }
        interest += ' and ' + this.interests[this.interests.length - 1]
        let greet = `Hello, my name is ${this.name} and I am ${this.age} years old. My interests are being a ${interest}`;
        return greet
    }
}

let being = new person("Ryan",30,"male",["being a hardarse", "agile", "ssd hard drives"])
let greeting = being.hello()
console.log(greeting)
