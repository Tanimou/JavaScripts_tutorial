document.querySelector("#mybutton").onclick = function () {
  //when we click on the button
  const h1 = document.querySelector("#myh1");
  
  h1.innerText = "You clicked on the button";
 h1.style.color="blue"//here is how to change css property of h1 tag
 h1.style.backgroundColor="black"
 h1.style.textAlign="center"
 h1.style.border="4px solid"
  const h2 = document.querySelector("#myh2");
  h2.innerText = "Congratulation";
  const p = document.querySelectorAll(".myp"); //the querySelectorAll() method selects all the elements with the same classe/id
  p[0].innerText = ""; //as we have 2 paragraphs with the same classe, we have to specify which one we want to get into
  const bold = document.createElement("b");
  bold.innerText = "You did it";
  p[1].innerText = "";
  p[1].append(bold);
};
