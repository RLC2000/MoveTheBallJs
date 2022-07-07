/*

 NOTE FOR FUTURE ME:
transform: translate() does not alter the document flow. The element's original space is 
unaffected and still visible in it's original position.


Normally in css when we do a translate of xad y axis we move form old position to new position just 1 transform 
but in javascript here we want to attempt multiple transform for translateX and translateY so if we
do a translateX of constant data then in that case motion will be consatant only once as the orifinal position remains unaffected
so for the logic to work we perform :
  original position+current postion+expected motion.
*/

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
