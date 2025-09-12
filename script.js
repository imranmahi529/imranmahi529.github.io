// Typing Animation
const text = "Imran Hussain Mahi";
let i = 0;
function type() {
  if (i < text.length) {
    document.querySelector(".typing-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}
type();

// Accordion
let acc = document.getElementsByClassName("accordion");
for (let j = 0; j < acc.length; j++) {
  acc[j].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    panel.style.display = (panel.style.display === "block") ? "none" : "block";
  });
}

// Scroll to Top Button
let mybutton = document.getElementById("scrollTopBtn");
window.onscroll = () => {
  mybutton.style.display = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? "block" : "none";
};
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Cookie Consent
function acceptCookies() {
  document.getElementById("cookieConsent").style.display = "none";
}

// Dark Mode
document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

function openFeature(id) {
  document.querySelectorAll('.feature-section').forEach(sec => sec.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

function playGame() {
  document.getElementById("gameArea").innerHTML = "<p>🎮 Snake Game Coming Soon!</p>";
}


// Simple Game (Demo)
function playGame() {
  document.getElementById("gameArea").innerHTML = "<p>🎮 Snake Game Coming Soon!</p>";
  alert("Snake Game Coming Soon!");
}

// Fan Comments
function addComment() {
  let commentBox = document.getElementById("fanComment");
  let commentsList = document.getElementById("commentsList");

  if (commentBox.value.trim() !== "") {
    let newComment = document.createElement("p");
    newComment.textContent = "⭐ " + commentBox.value;
    commentsList.appendChild(newComment);
    commentBox.value = "";
  } else {
    alert("Please write something before submitting!");
  }
}