function toggleNav() {
  let getSidebarUl = document.querySelector(".nav-sidebar ul");

  if (getSidebarUl.style.visibility === "visible") {
      getSidebarUl.style.visibility = "hidden";
  } else {
      getSidebarUl.style.visibility = "visible";
  }
}




document.querySelector("#li-home").addEventListener("click", function () {
  document.body.style.backgroundColor = "white";
  toggleNav();
});

document.querySelector("#li-red").addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
  toggleNav();
});

document.querySelector("#li-orange").addEventListener("click", function () {
  document.body.style.backgroundColor = "orange";
  toggleNav();
});

document.querySelector("#li-purple").addEventListener("click", function () {
  document.body.style.backgroundColor = "purple";
  toggleNav();
});

document.querySelector("#li-green").addEventListener("click", function () {
  document.body.style.backgroundColor = "green";
  toggleNav();
});





document.querySelector("#li-home").addEventListener("mouseover", function (mouseover) {
  mouseover.target.style.backgroundColor = "white";
});

document.querySelector("#li-red").addEventListener("mouseover", function (mouseover) {
  mouseover.target.style.backgroundColor = "red";
});

document.querySelector("#li-orange").addEventListener("mouseover", function (mouseover) {
  mouseover.target.style.backgroundColor = "orange";
});

document.querySelector("#li-purple").addEventListener("mouseover", function (mouseover) {
  mouseover.target.style.backgroundColor = "purple";
});

document.querySelector("#li-green").addEventListener("mouseover", function (mouseover) {
  mouseover.target.style.backgroundColor = "green";
});