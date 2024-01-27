// Double click the flames to see le magic

const confettiShower = [];
const numConfettis = 300;
const container = document.body;
const colors = [
  // your color array here
];

$('.flame').dblclick(function () {
  console.log('test');
  animateConfetti();

  // Play sound
  var flameSound = document.getElementById('flameSound');
  flameSound.play();

  // Hide candle and show cherry with text
  $('.candle').hide();
  $('.cherry').show();
  $('.hbd').show();
  $('.cherry').addClass('fall');
  $('.hbd').addClass('text-animation');

  // Show/hide additional text
  $('.flame-text').text('Happy birthday mido').show();
});

function create() {
  w = Math.floor(Math.random() * 5 + 5);
  h = w;
  x = Math.floor(Math.random() * 100);
  y = Math.floor(Math.random() * 100);
  c = colors[Math.floor(Math.random() * colors.length)];
  var newConfetti =
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
  for (var i = 1; i <= numConfettis; i++) {
    create();
  }
  var confettis = document.querySelectorAll('.confetti');
  for (var i = 0; i < confettis.length; i++) {
    var opacity = Math.random() + 0.2;
    var animated = confettis[i].animate(
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

