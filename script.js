const canvas = document.getElementById('snow');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const snowflakes = [];

function createSnowflakes() {
  for (let i = 0; i < 100; i++) {
    snowflakes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 4 + 1,
      speed: Math.random() * 2 + 1,
    });
  }
}

function drawSnowflakes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white';
  ctx.beginPath();
  snowflakes.forEach(snowflake => {
    ctx.moveTo(snowflake.x, snowflake.y);
    ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
  });
  ctx.fill();
}

function moveSnowflakes() {
  snowflakes.forEach(snowflake => {
    snowflake.y += snowflake.speed;
    if (snowflake.y > canvas.height) {
      snowflake.y = 0;
      snowflake.x = Math.random() * canvas.width;
    }
  });
}

function updateSnowfall() {
  drawSnowflakes();
  moveSnowflakes();
  requestAnimationFrame(updateSnowfall);
}

createSnowflakes();
updateSnowfall();

const playMusicButton = document.getElementById('playMusic');
const backgroundMusic = document.getElementById('backgroundMusic');

playMusicButton.addEventListener('click', () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    playMusicButton.textContent = '⏸ Pause Music';
  } else {
    backgroundMusic.pause();
    playMusicButton.textContent = '🎶 Play Music 🎶';
  }
});
