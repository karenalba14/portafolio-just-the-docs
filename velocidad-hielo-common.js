'use strict';
window.Arcade = (() => {
  let audio, enabled = false;
  const soundButton = document.getElementById('sound');
  function beep(freq = 440, duration = .08, type = 'sine', gain = .04) {
    if (!enabled) return;
    try {
      audio ||= new (window.AudioContext || window.webkitAudioContext)();
      if (audio.state === 'suspended') audio.resume().catch(() => {});
      const osc = audio.createOscillator(), vol = audio.createGain();
      osc.type = type; osc.frequency.setValueAtTime(freq, audio.currentTime);
      osc.frequency.exponentialRampToValueAtTime(Math.max(30, freq * .55), audio.currentTime + duration);
      vol.gain.setValueAtTime(gain, audio.currentTime);
      vol.gain.exponentialRampToValueAtTime(.001, audio.currentTime + duration);
      osc.connect(vol); vol.connect(audio.destination); osc.start(); osc.stop(audio.currentTime + duration);
    } catch (_) { /* Audio is optional. */ }
  }
  soundButton?.addEventListener('click', () => {
    enabled = !enabled;
    soundButton.textContent = `Sonido: ${enabled ? 'sí' : 'no'}`;
    soundButton.setAttribute('aria-pressed', String(enabled));
    beep(660);
  });
  function box(ctx,x,y,w,h,r=8,fill='#fff') {
    ctx.fillStyle=fill; ctx.beginPath(); ctx.roundRect(x,y,w,h,r); ctx.fill();
  }
  function text(ctx,value,x,y,size=20,color='#fff',align='left',weight='700') {
    ctx.fillStyle=color; ctx.font=`${weight} ${size}px Arial, sans-serif`; ctx.textAlign=align; ctx.fillText(value,x,y);
  }
  function overlay(ctx,title,subtitle,detail,accent='#ff6475') {
    ctx.fillStyle='#101524c9'; ctx.fillRect(0,0,960,540);
    box(ctx,180,151,600,238,20,'#151b2aee');
    text(ctx,'IBERO ARCADE',480,192,11,accent,'center');
    text(ctx,title,480,246,39,'#f5f2e9','center','900');
    text(ctx,subtitle,480,286,17,'#c2c9db','center','400');
    box(ctx,294,314,372,42,8,accent);
    text(ctx,detail,480,341,13,'#111827','center');
  }
  // Restore keyboard play after using a toolbar with a pointer.
  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', event => {
      if (event.detail > 0) document.getElementById('game')?.focus({preventScroll:true});
    });
  });
  const canvas = document.getElementById('game');
  canvas?.addEventListener('click', () => canvas.focus({preventScroll:true}));
  function announce(message) { const el=document.getElementById('status'); if(el) el.textContent=message; }
  return { beep, box, text, overlay, announce };
})();
