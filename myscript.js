
count = 0;
function myfunction() {
  document.getElementById("counter").innerHTML = count;
  count += 1;
  z = count % 3;
  if (z == 1) {
    document.getElementById("counter").style.color = "red";
  } else {
    document.getElementById("counter").style.color ="black";
  }
}
