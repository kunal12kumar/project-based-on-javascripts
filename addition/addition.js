// programme to add more text element
// line to return the store the value after submit on console

// here inputb class is selected because this contain both the button and the input part to access both we take class inputb. if we take only button this input not get seleted and e also get return and also the e.preventDefault will not work.
const textstore=document.querySelector(".inputb");
const button=document.querySelector(".sbtn")
const text=document.querySelector("#inputbox");
const class1=document.querySelector(".unlist");
// using event listener to submit 
textstore.addEventListener("submit",function(e){
    e.preventDefault();
    const lit=document.createElement("li");
    const data=text.value
    litInnerHTML=`<span id="text">${data}</span>
    <div>
      <button class="btn Done">Done</button>
      <button class="btn Remove">Remove</button>
    </div>`;
    lit.innerHTML=litInnerHTML;
    class1.append(lit);
    console.log(class1);
    text.value="";
});


// NOw to do underline when we press done and delete it when press remove
const done=document.querySelector(".Done");
const remove=document.querySelector(".Remove");

class1.addEventListener("click",(e)=>{
    console.log(e.target);
    console.log(e.target.classList);
    if (e.target.classList.contains("Done")){
        console.log("doneclicked")
        console.log(e.target.parentNode.parentNode.children[0]);
        e.target.parentNode.parentNode.children[0].style.textDecoration="underline";
    }

    if (e.target.classList.contains("Remove")){
        console.log("Remove clicked");
        console.log(e.target.parentNode.parentNode);
        e.target.parentNode.parentNode.remove();
    }
})

