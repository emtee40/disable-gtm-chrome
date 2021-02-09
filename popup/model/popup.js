const toggle = document.getElementById('toggle');

let port = chrome.extension.connect({
  name: "Sample Communication",
});
port.postMessage("Hi BackGround from popup.js");
port.onMessage.addListener(function (msg) {
  console.log("Received from background.js: ", msg);
  toggle.checked = msg;
});

toggle.addEventListener('click', () => {
  port.postMessage(toggle.checked);
})
