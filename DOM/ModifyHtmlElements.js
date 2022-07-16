//!Modifying html elements
//*2 ways:
//*by document.getElementById() (older)
//*by document.querySelector() (newer, more powerful)

//?This js file is connected to test2 html file. Let's say we want to change texts on click me button

document.querySelector("#mybutton").onclick = function() { //when we click on the button
const h1=document.querySelector("#myh1")
const underline=document.createElement("u")
underline.innerText="You clicked on the button"
h1.innerText = ""
h1.append(underline)
const h2=document.querySelector("#myh2")
h2.innerText="Congratulation"
const p=document.querySelectorAll(".myp")//the querySelectorAll() method selects all the elements with the same classe/id 
p[0].innerText=""//as we have 2 paragraphs with the same classe, we have to specify which one we want to get into 
const bold=document.createElement("b")
bold.innerText="You did it"
p[1].innerText=""
p[1].append(bold)
}
   