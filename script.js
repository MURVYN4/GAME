
const bgm = document.getElementById('bgm');
const muteBtn = document.getElementById('mute-btn');

function startGame() {
  document.getElementById('start-screen').classList.add('hidden');
  document.getElementById('game-screen').classList.remove('hidden');
  bgm.play();
}

function showInstructions() {
  document.getElementById('start-screen').classList.add('hidden');
  document.getElementById('instructions-screen').classList.remove('hidden');
}

function showCredits() {
  document.getElementById('start-screen').classList.add('hidden');
  document.getElementById('credits-screen').classList.remove('hidden');
}

function backToStart() {
  document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
  document.getElementById('start-screen').classList.remove('hidden');
}

function toggleMute() {
  if (bgm.muted) {
    bgm.muted = false;
    muteBtn.textContent = '🔊';
  } else {
    bgm.muted = true;
    muteBtn.textContent = '🔇';
  }
}

function nextScene() {
  document.getElementById('scene').innerHTML = `
    <h2>Mission 1: Bank</h2>
    <p>Complete the simple interest puzzle to recover RoboBit’s first part.</p>
    <button onclick="loadPuzzle()">Start Puzzle</button>
  `;
}

function loadPuzzle() {
  document.getElementById('scene').innerHTML = `
    <h2>Simple Interest Puzzle</h2>
    <p>Find the interest for: Principal = RM1000, Rate = 5%, Time = 2 years</p>
    <input type="text" id="answer" placeholder="Your answer"> <button onclick="checkAnswer()">Submit</button>
    <div id="result"></div>
  `;
}

function checkAnswer() {
  const ans = document.getElementById('answer').value;
  const result = document.getElementById('result');
  if (ans.trim() === "100") {
    result.innerHTML = "✅ Correct! You’ve collected a robot part!";
  } else {
    result.innerHTML = "❌ Try again.";
  }
}
