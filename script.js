document.querySelector('.products').addEventListener('click', function () {
  basicTimeline.restart();
});

var basicTimeline = anime.timeline({
  autoplay: false,
});

basicTimeline
  .add({
    targets: 'svg',
    translateX: -150,
    translateY: -150,
    easing: 'linear',
    duration: 10,
  })
  .add({
    targets: 'svg',
    opacity: [0, 1],
    easing: 'linear',
    duration: 10,
  })

  .add({
    targets: '#flame , #light',
    opacity: [0, 1],
    easing: 'linear',
    duration: 200,
  })
  .add({
    targets: 'svg',
    translateX: -120,
    translateY: -100,
    easing: 'linear',
    duration: 850,
  })
  .add({
    targets: '#flame',
    opacity: [1, 0],
    easing: 'linear',

    duration: 200,
  })
  .add({
    targets: '#light',
    translateX: 1.8,
    translateY: -11,
    easing: 'linear',
    duration: 0,
  })
  .add({
    targets: '#light',
    translateX: 2.57,
    translateY: -21.51,
    easing: 'linear',
    duration: 200,
  })
  .add({
    targets: '#light',
    translateX: 2.39,
    translateY: -31.44,
    easing: 'linear',
    duration: 125,
  })
  .add({
    targets: '#light',
    translateX: 1.25,
    translateY: -40.7,
    easing: 'linear',
    duration: 125,
  })
  .add({
    targets: '#light',
    translateX: -0.6,
    translateY: -49.2,
    easing: 'linear',
    duration: 125,
  })
  .add({
    targets: '#light',
    translateX: -3.11,
    translateY: -56.85,
    easing: 'linear',
    duration: 125,
  })
  .add({
    targets: '#light',
    translateX: -6.23,
    translateY: -63.56,
    easing: 'linear',
    duration: 115,
  })
  .add({
    targets: '#light',
    translateX: -9.87,
    translateY: -69.23,
    easing: 'linear',
    duration: 100,
  })
  .add({
    targets: '#light',
    translateX: -13.95,
    translateY: -73.79,
    easing: 'linear',
    duration: 100,
  })
  .add({
    targets: '#light',
    translateX: -18.38,
    translateY: -77.13,
    easing: 'linear',
    duration: 90,
  })
  .add({
    targets: '#light',
    translateX: -23.07,
    translateY: -79.17,
    easing: 'linear',
    duration: 75,
  })
  .add({
    targets: '#light',
    translateX: -27.94,
    translateY: -79.21,
    easing: 'linear',
    duration: 70,
  })
  .add({
    targets: '#light',
    translateX: -32.9,
    translateY: -78,
    easing: 'linear',
    duration: 70,
  })
  .add({
    targets: '#light',
    translateX: -37.87,
    translateY: -75.6,
    easing: 'linear',
    duration: 70,
  })
  .add({
    targets: '#light',
    translateX: -42.76,
    translateY: -71.52,
    easing: 'linear',
    duration: 80,
  })
  .add({
    targets: '#light',
    translateX: -47.48,
    translateY: -65.69,
    easing: 'linear',
    duration: 90,
  })
  .add({
    targets: '#fuse',
    strokeDashoffset: [0, 130],
    easing: 'linear',
    delay: 6200,
    duration: 2000,
    offset: '-=8000',
    loop: false,
  })
  .add({
    targets: '#fuse, #bomb, #light, #lighter',
    opacity: 0,
    easing: 'linear',
    duration: 10,
  })
  .add({
    targets: '#boom',
    opacity: [0, 1],
    scale: [0.5, 1.8],
    translateX: -30,
    translateY: -25,
    easing: 'linear',
    duration: 400,
  })
  .add({
    targets: '#cloud',
    scale: [0.5, 3],
    opacity: [0, 1],
    translateX: -50,
    translateY: -40,
    duration: 400,
    offset: '-=400',
  })
  .add({
    targets: '#cloud, #boom ',
    opacity: 0,
    easing: 'linear',
    duration: 2000,
    offset: '-=50',
  })
  .add({
    targets: '#rauch',
    opacity: [0, 0.6],
    easing: 'linear',
    duration: 200,
    offset: '-=150',
  });

var smoke = anime({
  targets: '#rauch',
  points: '-30 -130 30 -140 80 -60 70 0 90 70 70 150 40 65 15 30 20 -40',
  easing: 'easeInOutQuad',
  duration: 3000,
  direction: 'alternate',
  loop: true,
});

var lineDrawing = anime({
  targets: '#fire path',
  strokeDashoffset: [100, 0],
  easing: 'linear',
  delay: function (el, i) {
    return i * 13;
  },
  duration: 4000,
  loop: true,
});
