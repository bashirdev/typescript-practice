
let myTuple: [string, number, boolean] = ['Bashir', 23, true]

let newArr:any = ['some']

newArr = myTuple

let myObj:object
myObj=[]
console.log(typeof myObj);

const example={
    prop1:'dave',
    prop2:true
}

example.prop1= 'Bashir'


interface Guitarist{
    name?:string,
    active:boolean, //optional
    albums:(string | number) []
}

let evh:Guitarist={
    name:'Bashir',
    active:false,
    albums:[195, 165,'5dasdsa']
}
let jhm:Guitarist={
    name:'ahammed',
    active:false,
    albums:[195, 16555,'5dasdsahgjhg']
}

const greetGuiterist=(guiterist:Guitarist, secondGuiterRist:Guitarist)=>{
    return `Hello ${guiterist.name} and ${secondGuiterRist.name}`
}

console.log(greetGuiterist(evh, jhm));

//Enums
enum Grade {
    U=1,
    D,
    C,
    B,
    A,
}

console.log(Grade.U);

