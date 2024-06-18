// const h1=document.querySelector(".heading1");
// setTimeout(()=>{
//     h1.textContent="HELLO WORLD hOW ARE YOU 1 "
// },1000)

// const h2=document.querySelector(".heading2");
// setTimeout(()=>{
//     h2.textContent="HELLO WORLD hOW ARE YOU 2 "
// },2000)

// const h3=document.querySelector(".heading3");
// setTimeout(()=>{
//     h3.textContent="HELLO WORLD hOW ARE YOU 3 "
// },3000)

// const h4=document.querySelector(".heading4");
// setTimeout(()=>{
//     h4.textContent="HELLO WORLD hOW ARE YOU 4 "
// },4000)

// const h5=document.querySelector(".heading5");
// setTimeout(()=>{
//     h5.textContent="HELLO WORLD hOW ARE YOU  5"
// },5000)

// const h6=document.querySelector(".heading6");
// setTimeout(()=>{
//     h6.textContent="HELLO WORLD hOW ARE YOU 6"
// },6000)

// const h7=document.querySelector(".heading7");
// setTimeout(()=>{
//     h7.textContent="HELLO WORLD hOW ARE YOU 7"
// },7000)

const group=document.querySelectorAll(".one");
console.log(group);
 
// const group1=document.getElementsByClassName("one");
// console.log(group1)
group.forEach((heading,index)=>{
    setTimeout(()=>{
        console.log(index)
        heading.textContent=`HELLO WORLD HOW ARE YOU  ${index+1}`
    },`${(index+1)*1000}`)

});
