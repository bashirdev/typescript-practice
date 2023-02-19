//Type Aliases
type stringOrNumber = string | number

type stringOrNumberArray= (string | number) []

type Guiterist = {
    name:'Bashir',
    active:true,
    albums:stringOrNumberArray
}

//Literal types

let myName:'Bash'
let userName:'Dave' | 'John' | 'amy'
userName= 'Dave'

// functions 
const add =(a:number,b:number): number=>{
    return a + b
}


const greet=(message:any):void=>{
    console.log(message); 
    
}
greet('Hello Bashir')
greet(add(45,85));

let substract= function(c:number, d:number):number{
     return c-d
}

greet(substract(5,2));

// type way
type mathFunction = (a:number , b:number) => number

// interface way
interface mathFunctions {(a:number , b:number) :number}
//
const multiply:mathFunctions=function(c,d){
    return c * d
}

greet(multiply(4,2))

//optional parameters
const addAll =(a:number, b:number, c?:number):number=>{
    if(typeof c !== 'undefined'){
        return a+b+c
    }
    return a+b

}
//default param value
const sumAll =(a:number, b:number, c:number=5):number=>{
    if(typeof c !== 'undefined'){
        return a+b+c
    }
    return a+b

}

greet(addAll(2,2))
greet(sumAll(2,2))

//Rest parameters
const total=(a:number, ...nums:number[]):number=>{
    return a * nums.reduce((prev, curr)=> prev + curr,0)
}

greet(total(2,1,4,6,5))

// never type == error 
const createError=(errMeg:string)=>{
    throw new Error(errMeg)
}

const infinite=()=>{
    let i:number=1
    while(true){
        i++
        if(i > 100) break
    }
}

//custom type guard
const isNumber=(value:any):boolean=>{
    return typeof value === 'number' ? true : false
}

//use of the never type
const numberOrString=(value:number | string): string=>{
    if(typeof value === 'string'){
        return 'string'
    }
    if(isNumber(value)) return 'number'

    return createError('This should never happen!')
}