const envWrap = document.getElementById('envelopeWrap');
  const screenEnvelope = document.getElementById('screen-envelope');
  const screenNames = document.getElementById('screen-names');
  const screenInvite = document.getElementById('screen-invite');

  envWrap.addEventListener('click', () => {
  envWrap.classList.add('open');
  const promptText = document.querySelector('.prompt-text');
  promptText.style.animation = 'none';   // نوقف الأنيميشن اللي بتتحكم في الشفافية
  promptText.style.opacity = '0';
  setTimeout(() => {
    screenEnvelope.classList.add('hide');
    screenNames.classList.add('show');
  }, 1300);
});

screenNames.addEventListener('click', () => {
  screenNames.classList.remove('show');
  screenInvite.classList.add('show');
});