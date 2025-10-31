// Cursor effect
let cursor = document.getElementById("cursor");
let blur = document.getElementById("cursor-blur");

document.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
  blur.style.left = dets.x - 200 + "px";
  blur.style.top = dets.y - 200 + "px";
});

// Navbar fade
window.addEventListener("scroll", function () {
  const nav = document.getElementById("nav");
  if (window.scrollY > 100) nav.style.backgroundColor = "rgba(0,0,0,0.9)";
  else nav.style.backgroundColor = "transparent";
});

// Chatbot logic
const chatbotButton = document.querySelector(".chatbot-button");
const chatbotContainer = document.querySelector(".chatbot-container");
const sendBtn = document.querySelector("#send-btn");
const inputField = document.querySelector("#user-input");
const chatBody = document.querySelector(".chat-body");

chatbotButton.addEventListener("click", () => {
  chatbotContainer.classList.toggle("active");
});

function addMessage(sender, message) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.innerHTML = `<p>${message}</p>`;
  chatBody.appendChild(msg);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function aiResponse(userMsg) {
  userMsg = userMsg.toLowerCase();
  let response;

  if (userMsg.includes("malware")) {
    response = "🧬 Detect malware by scanning unknown files and checking processes. Tools like VirusTotal help a lot!";
  } else if (userMsg.includes("phishing")) {
    response = "⚠️ Look for suspicious URLs or urgency in emails. Always verify sender identity!";
  } else if (userMsg.includes("incident")) {
    response = "🚨 Isolate affected systems, preserve logs, and alert your SOC immediately!";
  } else if (userMsg.includes("hello") || userMsg.includes("hi")) {
    response = "👋 Hello! I’m your AI Cyber Responder. Ask about 'malware', 'phishing', or 'incident'!";
  } else {
    response = "🤔 I’m not sure about that. Try keywords like 'malware', 'incident', or 'phishing'.";
  }

  setTimeout(() => addMessage("bot", response), 800);
}

sendBtn.addEventListener("click", () => {
  const userMsg = inputField.value.trim();
  if (!userMsg) return;
  addMessage("user", userMsg);
  inputField.value = "";
  aiResponse(userMsg);
});

inputField.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendBtn.click();
});


