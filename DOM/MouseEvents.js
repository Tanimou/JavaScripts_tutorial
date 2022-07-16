//!Mouse events
//*element.addEventListener(type,function)
const div=document.querySelector("#mydiv")
div.style.backgroundColor="grey"
div.style.width="200px"
div.style.height="200px"
div.addEventListener("mousedown",e=>{div.style.backgroundColor = "green";})
//div.addEventListener("mouseup", (e) => {div.style.backgroundColor = "yellow";}); 
div.addEventListener("click", (e) => {div.style.backgroundColor = "red";} ) 
div.addEventListener("dblclick", (e) => {div.style.backgroundColor = "purple";}); 
div.addEventListener("mouseover", (e) => {
  div.style.backgroundColor = "yellow";
});
div.addEventListener("mouseleave", (e) => {
  div.style.backgroundColor = "blue";
});