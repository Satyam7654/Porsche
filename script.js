var menubtn = document.getElementById("menubtn");
var sideMenu = document.getElementById("sideMenu");
var menu = document.getElementById("menu");
menubtn.onclick = function () {
  if (sideMenu.style.left == "-250px") {
    sideMenu.style.left = "0";  
  }
  else {
    sideMenu.style.left = "-250px";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const loadingBar = document.getElementById("loadingBar");

  // Simulate loading progress
  let width = 0;
  const interval = setInterval(function () {
    width += 1;
    loadingBar.style.width = width + "%";

    // Stop when loading is complete (for demonstration purposes)
    if (width >= 150) {
      clearInterval(interval);
      loadingBar.style.opacity = 0;
    }
  }, 20);
});

