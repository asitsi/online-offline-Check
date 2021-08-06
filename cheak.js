const status = window.navigator.onLine;

if (status) Online();
else offline();

window.addEventListener("online", Online);
window.addEventListener("offline", offline);

function Online() {
  document.getElementById("container").style.background = "#1b6535";
  document.querySelector("h1").textContent = "you are connected";
}

function offline() {
  document.getElementById("container").style.background = "#d71b3b";
  document.querySelector("h1").textContent = "you are disconnected";
}
