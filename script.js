const buttons = document.querySelectorAll('a');

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();

    const audio = document.getElementById('click-sound');
    audio.currentTime = 0;
    audio.play();

    setTimeout(() => {
      window.location.href = button.href;
    }, 200);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const ambiance = document.getElementById('ambiance');
  
  const startAudio = () => {
    ambiance.volume = 0.3;
    ambiance.play();
    document.removeEventListener('click', startAudio);
  };

  document.addEventListener('click', startAudio);
});