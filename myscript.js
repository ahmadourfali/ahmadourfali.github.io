
count = 0;
z = count % 3;
function myfunction() {
document.getElementById("counter").innerHTML = count;
count += 1;
if (z == 0) {document.getElementById("counter").style.color = "red";}
}
