//!Create Html elements
//*we can create html elements using javascript by 2 ways. Check it out
//?By innerHTML method (not recommanded because vulnerable to xss attacks)

const h1=document.createElement("h1")//we've created an h1 tag
h1.innerHTML = "<u>hello there</u>";//we put some texts between our h1 tag, like: <h1>hello there</h1>
                                    //we can also add others tags if we want
document.body.append(h1)//we need to add h1 to the html's file body

//*the innerHTML method is too old. Here's a new way:

const h2 = document.createElement("h2"); //we've created an h2 tag
const underline = document.createElement("u")//we create a underline tag like <u></u>
underline.innerText = "hello there"; //and we put our text between our u tag
h2.append(underline)//then we append this to h2 tag. This will result like: <h2><u>hello there</u></h2>
document.body.append(h2);//and finally we put all of that into our html's file body'

const p=document.createElement("p")
const bold = document.createElement("strong")
bold.innerText="Bye..."
p.append(bold)
h2.append(p)
document.body.append(h2)