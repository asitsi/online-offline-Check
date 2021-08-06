const status = window.navigator.online;

if (status) Online();
else offline();

window.addEventListener("online", Online);
window.addEventListener("offline", offline);

function Online() {
  doncument.getElenmentById("container").style.background = "green";
  document.querySelector("h1").textContent = "you are connected";
}

function offline() {
  document.getElementById("container").style.background = "red";
  document.querySelector("h1").textContent = "you are disconnected";
}
