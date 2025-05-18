let maxParticleCount = 150;
let particleSpeed = 2;
let colors = [
  "DodgerBlue", "OliveDrab", "Gold", "Pink", "SlateBlue", "LightBlue",
  "Violet", "PaleGreen", "SteelBlue", "SandyBrown", "Chocolate", "Crimson"
];

let streamingConfetti = false;
let animationTimer = null;
let particles = [];
let waveAngle = 0;

function resetParticle(particle, width, height) {
  particle.color = colors[(Math.random() * colors.length) | 0];
  particle.x = Math.random() * width;
  particle.y = Math.random() * height - height;
  particle.diameter = Math.random() * 10 + 5;
  particle.tilt = Math.random() * 10 - 10;
  particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
  particle.tiltAngle = 0;
  return particle;
}

function startConfettiInner() {
  let width = window.innerWidth;
  let height = window.innerHeight;

  window.requestAnimFrame = (function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame || window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame || function (callback) {
        return window.setTimeout(callback, 16.6666667);
      };
  })();

  let canvas = document.getElementById("confetti-canvas");
  if (canvas === null) {
    canvas = document.createElement("canvas");
    canvas.setAttribute("id", "confetti-canvas");
    canvas.setAttribute("style", "display:block;z-index:999999;pointer-events:none;position:fixed;top:0;left:0;");
    document.body.appendChild(canvas);
    canvas.width = width;
    canvas.height = height;

    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }, true);
  }

  let context = canvas.getContext("2d");

  while (particles.length < maxParticleCount)
    particles.push(resetParticle({}, width, height));

  streamingConfetti = true;
  if (animationTimer === null) {
    (function runAnimation() {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      if (particles.length === 0) {
        animationTimer = null;
      } else {
        updateParticles();
        drawParticles(context);
        animationTimer = requestAnimFrame(runAnimation);
      }
    })();
  }
}

function stopConfettiInner() {
  streamingConfetti = false;
}

function removeConfettiInner() {
  stopConfettiInner();
  particles = [];
  const canvas = document.getElementById("confetti-canvas");
  if (canvas) canvas.remove();
}

function toggleConfettiInner() {
  if (streamingConfetti) {
    stopConfettiInner();
  } else {
    startConfettiInner();
  }
}

function drawParticles(context) {
  for (let i = 0; i < particles.length; i++) {
    let particle = particles[i];
    let x = particle.x + particle.tilt;
    context.beginPath();
    context.lineWidth = particle.diameter;
    context.strokeStyle = particle.color;
    context.moveTo(x + particle.diameter / 2, particle.y);
    context.lineTo(x, particle.y + particle.tilt + particle.diameter / 2);
    context.stroke();
  }
}

function updateParticles() {
  let width = window.innerWidth;
  let height = window.innerHeight;
  waveAngle += 0.01;

  for (let i = 0; i < particles.length; i++) {
    let particle = particles[i];
    if (!streamingConfetti && particle.y < -15)
      particle.y = height + 100;
    else {
      particle.tiltAngle += particle.tiltAngleIncrement;
      particle.x += Math.sin(waveAngle);
      particle.y += (Math.cos(waveAngle) + particle.diameter + particleSpeed) * 0.5;
      particle.tilt = Math.sin(particle.tiltAngle) * 15;
    }

    if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
      if (streamingConfetti && particles.length <= maxParticleCount)
        resetParticle(particle, width, height);
      else {
        particles.splice(i, 1);
        i--;
      }
    }
  }
}

export default defineNuxtPlugin(() => {
  return {
    provide: {
      confetti: {
        start: startConfettiInner,
        stop: stopConfettiInner,
        toggle: toggleConfettiInner,
        remove: removeConfettiInner
      }
    }
  }
});
