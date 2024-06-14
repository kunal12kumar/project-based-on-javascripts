
//creating an object
// const key1="Name";
// const key2="Gender";
// const key3="Section";

// const value1="kunal";
// const value2="Male";
// const value3=3;
// let value4;

// const inform={

// }
// console.log(inform);

// inform.Name="Kunal";
// console.log(inform)

// inform.Gender="Male";
// console.log(inform);

// inform[key3]=value3;
// console.log(inform)

// inform[key3]=3;
// console.log(inform);

// inform[key3]=value4;
// console.log(inform)

// let k="kunal";
// console.log(k)
// k="shivam";
// console.log(k)
// const j="jetha";
// console.log(j)

// // j="Daya"
// // console.log(j)

//working on array

//             // let array=["kunal","jay","Aryan"];
//             // console.log(array);
//             // console.log(array.length);
//             // let [var1,...var2]=array;
//             // console.log(var1);
//             // console.log(var2);
//             // array[3]="ganesh";
//             // console.log(array)

// // working on object
// let Information="Fathername";

// const Employee={
//     Name:"Kunal",
//     Gender:"Male",
//     Employement: "Government Service",
// }

// console.log(Employee);

// Employee.Desigination="Software Engineer";
// Employee["Salary"]=250000;
// Employee[Information]="Santosh Kumar";
// console.log(Employee);
// for (let key in Employee){
// //     console.log(Employee[key])
// //     console.log(`${key} : ${Employee[key]}`)
// // }

// // console.log(Employee.hat);

// // const {Name,detail2}=Employee;
// // console.log(Name())

// // objects under the array

// list=[
//     {id: 1, name:"Kunal"},
//     {id:2 ,name:"Jay"},
//     {id:3, name:"Aryan"}
// ]

// console.log(list[0]);
// for (let i of list){
//     console.log(i);
// };
// for (let i of list){
//     console.log(i.name)

// }

// function which will return a passed no.

// function matchno(array,num){
//     for (let i of  array){
//         if (i==num){
//             console.log("No. found");
//         }
//     };
    
    
// };
// let array=[23,34,545,56,123,76,86 ,34];
// console.log(matchno(array,2));

// function to find the multiple of the each element of the array by for each function

// let arr=[23,45,65,2,4,7,8];
// function multiplyby2(number,index){
//     console.log(`on ${index} index of array has number ${number}`);
//     console.log(`number after multiply by 2 is ${number*2}`);
// }

// arr.forEach(multiplyby2);

//programm to use map funcion in array to print objects key and its value.

// const obj=[
//     {Name: "Kunal", Class:10 ,per: 92},
//     {Name: "Ganesh", Class:10 ,per:93},
//     {Name: "Aryan" , Class:10, per:76}
// ]

// function printing(student,index){
//     return `${index} : ${student.Name} : ${student.Class} :${student.per}` 
// }

// const result=obj.map(printing);
// console.log(result)

// //forming a row function

// const t=obj.map((student,index)=>{
//     return `${index} : ${student.Name} : ${student.Class} :${student.per}` 
// })

// console.log(t)


//programme to find the total price of item purchased and the total item:

// const usercart=[
//     {productid:1 , Name:"TV" , price:20000},
//     {productid:2 , Name:"Fridge" , price:23544},
//     {productid:3 , Name:"AC" , price:90000},
//     {productid:4 , Name:"utensils" , price:69054},
//     {productid:5 , Name:"Pen" , price:500},
//     {productid:6,  Name:"clothes" , price:10000},
// ] 

// const result=usercart.reduce((item,index)=>{
//     return  item + index.price;
// },0);

// console.log(result); 

// // to compare the price of the products by using sort method.......
// // In this we use slice to store new array into new variable so that original array does not get affect
// const lowtohigh=usercart.slice(0).sort((a,b)=> a.price- b.price);
// console.log(lowtohigh);

// // const hightolow=usercart.slice(0).sort((a,b)=>b.price- a.price);
// // console.log(hightolow);

// // to find the userid  by using find method form usercart.
   
// const found=usercart.find((product)=>product.productid===4);
// console.log(found);
// const sea=usercart.find((product)=>product.price>30000);
// console.log(sea);

// // to check the price to 
// const check=usercart.every((product)=> product.price<300000);
// console.log(check)

// practices

// ternary operators

// const array=[];
// array.push(23);
// array.push(45);
// console.log(array);

// array.push([74,52,6,54]);
// console.log(array);
// console.log(array.pop());
// array.unshift(34);
// array.unshift(53);
// console.log(array);

// const [var2,var3,...cat]=array;
// console.log(var2,var3);
// console.log(cat)
// let array2=[...array, "item2"];
// console.log(array2)

// // objects.

// const obj={
//     Employeeid: 345345,
//     Name: "Kunal kumar",
//     Desigination: "Software Engineer",
// }

// console.log(obj.Employeeid);
// console.log(obj["Name"]);
// console.log({Desigination}=obj);
// obj.salary=34545;
// obj["Email"]="mrkunalkr01@gamil.com";
// const promotion="Salary Increment";
// obj["promotion"]="by 4%";

// console.log(obj);

// for (let key in obj){
//     console.log(`${key} : ${obj[key]}`);
// }

// // function and its types
// // 1. normal fun

// function check(user,index=0){
//     console.log(user.Name);
//     console.log(user.Desigination)
// }
// check(obj);


// function state(user,in5=0){
//     console.log(user.salary);
// };
// state(obj);

// // arrow function
// const shiv=(user) =>{
//     console.log(user.Email);
// };
// shiv(obj);

// // funciton Expression 
// const high=function(user){
//     console.log(user.Employeeid);
// }
// high(obj);

// programme to find the length of the set 

// function size(newset){
//     var l=0;
//     for (let i of newset){
//         if (i!==undefined){
//             l+=1;
//         }else{
//             continue;
//         }
//     }
//     return l;
// }

// const a=[23,45,65,85,12,44,44,45,77,77];
// const newset= new Set(a);
// console.log(newset);
// console.log(size(newset));

// function to create a obj on the basis of arguments given and return it ;

// function createobj(EmployeeId,Name,Gender,Desigination,sarlary){

//     const user= {};
//     user.EmployeeId= EmployeeId;
//     user.Name= Name;
//     user.Gender= Gender;
//     user.Desigination= Desigination;
//     user.sarlary= sarlary; 
//     return user
// };

// const user1=createobj(2345,"Kunal","Male","Software",2353567);
// console.log(user1);

// // creating a class animal

// class Animal{
//     constructor(Name,Nature,Sound){
//         this.Name=Name;
//         this.Nature=Nature;
//         this.Sound=Sound;
//     };

//     info(){
//         return `${this.Name} has Nature of ${this.Nature} and sound of ${this.Sound}`
//     }
// }

// const animal1=new Animal("Goat","Hervivores","Main")
// console.log(animal1);
// console.log(animal1.info());  
   

// using map 

// const Employee= new Map();

// Employee.set("Id",34523);
// Employee.set("Name","KUNAL");
// Employee.set("Desigination","Software Engineer");
// Employee.set("Salary",345246);
// Employee.set("Gender","Male");

// console.log(Employee);

// const extra=new Map();
// extra.set(Employee,{dgp:8,Josh:"High"})

// console.log(extra);

// const house={
//     Address: "Railway Colony",
//     No : "52 A",
//     Owner: "Santosh Kumar",

//     info: function()
// }

