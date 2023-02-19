
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


type Guitarist={
    name:string,
    active?:boolean, //optional
    albums:(string | number) []
}

let evh:Guitarist={
    name:'Bashir',
    active:false,
    albums:[195, 165,'5dasdsa']
}
let jhm:Guitarist={
    name:'ahammed',
    albums:[195, 16555,'5dasdsahgjhg']
}


