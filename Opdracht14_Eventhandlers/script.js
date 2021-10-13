/* 

var myButton = document.getElementById("mybutton");

myButton.addEventListener("click", function(){
    alert("button clicked");
})


const changeBackground = document.getElementById("background");

changeBackground.addEventListener("click", function(){
    changeBackground.classList.add("red-background");
})

*/




function start() {
    var submit = document.getElementById("background");
    submit.addEventListener("click", toggle);
  };
  
  function toggle() {
    var color = document.getElementById("background");
    color.classList.toggle('red-background');
  };
  
  
  start();
  