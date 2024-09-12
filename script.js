document.getElementById("sendMessage").addEventListener("click", function () {
  const message = document.getElementById("messageFromUser").value;
  event.preventDefault();

  if (message) {
    localStorage.setItem("message from user:", message);
    console.log("Message:", message, ",saved in local storage;");
  } else {
    console.log("please type in a message");
  }
});
