/* BLADE STUDIO · капсула часу та появи при прокрутці */
(() => {
  const capsule = document.getElementById('capsule');
  const video = document.getElementById('capsuleVideo');
  const startBtn = document.getElementById('capsuleStart');
  const hint = document.getElementById('capsuleHint');
  const skipBtn = document.getElementById('capsuleSkip');
  const yearEl = document.getElementById('capsuleYear');
  let finished = false;

  const lockScroll = (on) => { document.body.style.overflow = on ? 'hidden' : ''; };

  const closeCapsule = () => {
    if (finished) return;
    finished = true;
    video.pause();
    capsule.classList.add('is-hidden');
    lockScroll(false);
    setTimeout(() => { capsule.hidden = true; }, 900);
  };

  // Запасний варіант: якщо capsule.mp4 немає, роки йдуть від 2026 до 2035
  const runCountdown = () => {
    capsule.classList.remove('is-playing');
    startBtn.hidden = true;
    hint.hidden = true;
    const start = performance.now();
    const duration = 3200;
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1);
      yearEl.textContent = String(Math.round(2026 + 9 * p));
      if (p < 1) requestAnimationFrame(step);
      else setTimeout(closeCapsule, 700);
    };
    requestAnimationFrame(step);
  };

  startBtn.addEventListener('click', () => {
    if (video.error) { runCountdown(); return; }
    capsule.classList.add('is-playing');
    video.play().catch(runCountdown);
  });
  video.addEventListener('ended', closeCapsule);
  video.addEventListener('error', () => {
    if (capsule.classList.contains('is-playing')) runCountdown();
  });
  skipBtn.addEventListener('click', closeCapsule);
  lockScroll(true);

  // Появи блоків при прокрутці
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-in'));
  }
})();
