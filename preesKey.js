const messageElement = document.getElementById("message");
const keyDisplay = document.getElementById("key-display");
document.addEventListener("keydown", (e) => {
  messageElement.innerHTML = `You pressed: <span style="color: #4CAF50;">${e.key}</span>`;
  keyDisplay.innerText = e.keyCode;
  keyDisplay.style.display = "flex"; // Show
});
