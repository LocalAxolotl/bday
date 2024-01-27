window.onload = function() {
  const confettiShower = [];
  const numConfettis = 300;
  const container = document.body;
  const colors = [
    '#FABB24', '#EF3971', '#C6DA2C', '#EC6A63', '#3495C2',
    '#EE798B', '#96D4DD', '#F5F0A6', '#5CBB65', '#F2ABE7',
    '#9FA3EC', '#86D2E1 ', '#FEC31E '
  ];

  function create() {
    const w = Math.floor(Math.random() * 5 + 5);
    const h = w;
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    const c = colors[Math.floor(Math.random() * colors.length)];

    const newConfetti =
      '<div class="confetti" style="bottom:' +
      y +
      '%; left:' +
      x +
      '%;width:' +
      w +
      'px; height:' +
      h +
      'px;"><div class="rotate"><div class="askew" style="background-color:' +
      c +
      '"></div></div></div>';

    container.innerHTML += newConfetti;
  }

  function animateConfetti() {
    for (let i = 1; i <= numConfettis; i++) {
      create();
    }

    const confettis = document.querySelectorAll('.confetti');
    for (let i = 0; i < confettis.length; i++) {
      const opacity = Math.random() + 0.2;
      const animated = confettis[i].animate(
        [
          { transform: 'translate3d(0,0,0)', opacity: opacity },
          { transform: 'translate3d(10vw,100vh,1vw)', opacity: 1 },
        ],
        {
          duration: Math.random() * 3000 + 3000,
          iterations: Infinity,
          delay: -(Math.random() * 5000),
        }
      );
      confettiShower.push(animated);
    }
  }

  const audioElement = document.getElementById('myAudio');
    function changeText() {
        document.getElementById('text').textContent = 'Now press the cherry';
    }

  document.getElementById('confetti-button').addEventListener('click', function () {
    animateConfetti();
      changeText(); // Call the function to change the text
    // Additional display changes here (if needed)
    document.querySelector('.candle').style.display = 'none';
    document.querySelector('.cherry').style.display = 'block';
    document.querySelector('.hbd').style.display = 'block';
    document.querySelector('.clue2').style.display = 'none';
    document.querySelector('.cherry').classList.add('fall');
    document.querySelector('.hbd').classList.add('text-animation');
    document.getElementById('confetti-button').style.display = 'none';
    document.getElementById('audio-button').style.display = 'block';
    // Change the text
    document.getElementById('text').textContent = 'Press on the cherry';
    
  });

  document.getElementById('audio-button').addEventListener('click', function () {
    if (audioElement.paused) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  });
}



























































