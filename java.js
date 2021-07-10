let time = prompt("Enter time in seconds : ");
id = document.getElementById("counter");
id.innerHTML = time;
function start() {
  setInterval(() => {
    time--;
    if (time >=0) {
      id = document.getElementById("counter");
      id.innerHTML = time;
    } 
    else
    alert("Time Completed");
}, 1000);
}