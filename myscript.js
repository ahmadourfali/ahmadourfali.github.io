
count = 0;
function myfunction() {
  count += 1;
  z = count % 3;
  y = count % 5;
  document.getElementById("counter").innerHTML = count;
  if (z == 0 && y == 0) {
   document.getElementById("counter").style.color="green";
 } else if (y == 0) {
   document.getElementById("counter").style.color="red";
 } else if (z == 0) {
 document.getElementById("counter").style.color="blue";
 } else {
   document.getElementById("counter").style.color="black";
 }
}
