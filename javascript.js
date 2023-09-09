var colour="aliceblue";
document.addEventListener("DOMContentLoaded", function () {
    var okbtn=document.querySelector("#ok");
    okbtn.addEventListener("click",function(){
        let size=getsz()
        boardcontainer(size);
    });
    boardcontainer(16);
});

function boardcontainer(size)
{
    let board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let n=size*size;
    console.log(n);
for (let i = 0; i < n; i++) {
    var sq = document.createElement('div');
    sq.id="squarediv";
    sq.addEventListener("mouseover",colordiv);
    board.insertAdjacentElement("beforeend",sq);
    
}
}
function getsz()
{
    console.log("btn clicked");
    let sz = document.querySelector("input");
    let inp=sz.value;
    console.log(inp);
    let m=document.querySelector(".msg");
    m.style.width="100%";
    m.style.color="#541734";
        if (inp == "") {
            console.log("if1");
            m.innerHTML = "*Please enter a value*";
        } else if (inp <= 0 || inp > 100) {
            console.log("if2");
            m.innerHTML = "*Invalid input please enter a value between 1 to 100*";
        } else {
            return inp;
        }
}
function colordiv()
{
    if(colour=="random")
    this.style.backgroundColor=`hsl(${Math.random()*360},100%,50%)`;
else if(colour=="black")
this.style.backgroundColor="black";
else
this.style.backgroundColor='aliceblue';
}
function colorch(col)
{
    colour=col;
}
function reset()
{
    let divs=document.querySelectorAll("#squarediv")
    divs.forEach((div)=>div.style.backgroundColor="aliceblue");
}