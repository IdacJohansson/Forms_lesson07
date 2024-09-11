document.getElementById("sendMessage").addEventListener("click", function () {
  const message = document.getElementById("messageFromUser").value;
  event.preventDefault(); 

  if (message) {
    localStorage.setItem("message from user:", message);
    console.log("message saved in local storage");
  } else {
    console.log("please try again");
  }
});
