var aktifnav = document.getElementById("aktifnav");
var link = aktifnav.getElementsByClassName("nav-link");
for (var i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}