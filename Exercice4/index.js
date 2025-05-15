const button = document.getElementById("myButton");

button.addEventListener("click", () => {
  const message = document.getElementById("message");
  message.textContent = "Bonjour, vous avez cliqué sur le bouton !";
});
