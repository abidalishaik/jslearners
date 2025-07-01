function buttonClicked() {
  console.log("button clicked");
  const btns = document.getElementsByClassName("btnclass");

  for (let i = 0; i < btns.length; i++) {
    btns[i].style.backgroundColor = "red";
    btns[i].style.color = "white";
    btns[i].innerText = "Clicked!";
    btns[i].removeEventListener("click", buttonClicked);
  }
}

// document.getElementById("btn").addEventListener("click", buttonClicked);

// const btns = document.getElementsByClassName("btnclass");
// for (let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", buttonClicked);
// }


let a=1;
function test() {
    isNaN(a) && console.log(a++);
    var a=2;
    console.log(a);
}
console.log(a);
test();