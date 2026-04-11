
// Hi chicken, or whoever is reading this, i added some notes just in case you need to change something ill just explain how you can modify it //



// Hi chicken, this is the shop pop up i just added this while we get a shop //
document.addEventListener('DOMContentLoaded', function() {
    var shopLink = document.querySelector('a[href="shop.html"]');
    var modal = document.getElementById('shop-modal');
    var closeBtn = document.getElementById('close-modal');
    if (shopLink && modal && closeBtn) {
        shopLink.addEventListener('click', function(e) {
            e.preventDefault();
            modal.style.display = 'flex';
        });
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});


// Hi chicken, this will change the flickering of the logo in the main page just change the values near math.random() if you want to adjust the frequency or just outright delete it //
const logo = document.querySelector(".welcomelogo");

function flicker() {
  logo.style.opacity = "0.6";

  setTimeout(() => {
    logo.style.opacity = "1";
  }, 80);

  setTimeout(flicker, Math.random() * 5000 + 2000);
}
setTimeout(flicker, 1500);



// Hi chicken, this is the particle animation for the background you can modify the values to change the appearance and behavior //


const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 60; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 0.5,
    vx: (Math.random() - 0.5) * 0.8, // horizontal speed
    vy: (Math.random() - 0.5) * 0.8, // vertical speed
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.shadowBlur = 10;
  ctx.shadowColor = "red";

  particles.forEach(p => {
    // movement 
    p.x += p.vx;
    p.y += p.vy;

    // slight random drift
    p.vx += (Math.random() - 0.5) * 0.05;
    p.vy += (Math.random() - 0.5) * 0.05;

    // modify speed
    p.vx = Math.max(Math.min(p.vx, 1), -1);
    p.vy = Math.max(Math.min(p.vy, 1), -1);

    // wrap around screen
    if (p.x < 0) p.x = canvas.width;
    if (p.x > canvas.width) p.x = 0;
    if (p.y < 0) p.y = canvas.height;
    if (p.y > canvas.height) p.y = 0;

    // draw (dont touch this chicken, just the fillstyle if you want to change the color)
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 0, 0, 0.6)";
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

animate();

// hi chicken, this is the glitch effect for the logo, you can adjust the values in math.random to change the intensity and frequency of the glitch, or just delete it if you dont want it //
//please dont break this chicken, its really hard to make and i spent a lot of time on it, just change the values if you want to adjust it or delete it if you dont want it, but please dont break it, its really hard to make and i spent a lot of time on it //

const logoglitch = document.querySelector(".welcomelogo");


// create glitch layers
const red = document.createElement("span");
const white = document.createElement("span");

red.className = "glitch-layer glitch-red";
white.className = "glitch-layer glitch-white";

red.textContent = logoglitch.textContent;
white.textContent = logoglitch.textContent;

logoglitch.appendChild(red);
logoglitch.appendChild(white);

function glitch() {
  // random offsets (you can add a y variable if you want vertical glitch)

  
  const x1 = (Math.random() * 30 - 17).toFixed(1);  
  const x2 = (Math.random() * 30 - 17).toFixed(1);


  // show layers
  red.style.opacity = "0.8";
  white.style.opacity = "0.8";

  red.style.transform = `translate(${x1}px, 0)`;
  white.style.transform = `translate(${x2}px, 0)`;
  logoglitch.style.filter = "blur(1px)";


  // slight shake on main text
  logoglitch.style.transform = `translate(${(Math.random()*4-2)}px, ${(Math.random()*4-2)}px)`;

  setTimeout(() => {
    red.style.opacity = "0";
    white.style.opacity = "0";

    red.style.transform = "translate(0,0)";
    white.style.transform = "translate(0,0)";
    logoglitch.style.transform = "translate(0,0)";
    logoglitch.style.filter = "none";
  }, 150);

  // random interval 
  setTimeout(glitch, Math.random() * 875 + 375);
  
}

// wait until typing animation finishes
setTimeout(glitch, 1500);





// dont touch this chicken, 🥺
document.addEventListener('DOMContentLoaded', function() {

  const videoCards = document.querySelectorAll('.video-card');
  videoCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      const overlay = card.querySelector('.video-overlay');
      if (overlay) overlay.style.opacity = '0.12';
      const playBtn = card.querySelector('.video-play');
      if (playBtn) playBtn.style.transform = 'translate(-50%, -50%) scale(1.18)';
    });
    card.addEventListener('mouseleave', () => {
      const overlay = card.querySelector('.video-overlay');
      if (overlay) overlay.style.opacity = '0.32';
      const playBtn = card.querySelector('.video-play');
      if (playBtn) playBtn.style.transform = 'translate(-50%, -50%) scale(1)';
    });
  });
});
