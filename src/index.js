import "./styles.css";
var ele = document.querySelector("div");
window.addEventListener("keypress", hlpr);
var curX = 0;
var curY = 0;
function hlpr(event) {
  let code = event.code;
  let width = window.innerWidth;
  let height = window.innerHeight;
  if (code == "KeyW") {
    if (curY > 9) {
      curY = curY - 10;
      ele.style.transform = "translate(" + +curX + "px" + "," + curY + "px)";
    }
    console.log(curY);
  }
  if (code == "KeyA") {
    if (curX > 9) {
      curX = curX - 10;
      ele.style.transform = "translate(" + +curX + "px" + "," + curY + "px)";
    }
    console.log(curX);
  }
  if (code == "KeyS") {
    if (curY < height - 115) {
      curY = curY + 10;
      ele.style.transform = "translate(" + +curX + "px" + "," + curY + "px)";
    }
    console.log(curY);
  }
  if (code == "KeyD") {
    if (curX < width - 115) {
      curX = curX + 10;
      ele.style.transform = "translate(" + +curX + "px" + "," + curY + "px)";
    }
    console.log(curX);
  }
}
