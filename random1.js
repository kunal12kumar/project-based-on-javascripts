// function to change the color of the background

// function to get color
const button=document.querySelector("#butt");

const randomcolor=function(){
    const c1=Math.floor(Math.random()*256);
    const c2=Math.floor(Math.random()*256);
    const c3=Math.floor(Math.random()*256);
    const randomcolor1=`rgb(${c1},${c2},${c3})`;
    console.log(randomcolor1);
    return randomcolor1;
}

// function to change the color



button.addEventListener("click",function(){
    const body=document.querySelector(".mainframe");
    const randomcolor2=randomcolor();
    console.log(randomcolor2)
    body.style.backgroundColor=randomcolor2;
})
