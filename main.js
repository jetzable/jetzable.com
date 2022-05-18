particlesJS.load('particles-js', 'assets/particlesjs.json', function() {
  console.log('callback - particles.js config loaded');
});

const scrollHandler = () => {

  let menu = document.querySelector('.nav-bar')

  let home = document.getElementById('home')
  let aboutme = document.getElementById('aboutme')
  let experience = document.getElementById('experience')
  let more = document.getElementById('more')

  let pos_nav_bar = window.pageYOffset + menu.offsetHeight

  let pos_home = home.offsetTop + home.offsetHeight
  let pos_aboutme = aboutme.offsetTop + aboutme.offsetHeight
  let pos_experience = experience.offsetTop + experience.offsetHeight
  let pos_more = more.offsetTop + more.offsetHeight
  
  let distance_home = pos_home - pos_nav_bar
  let distance_aboutme = pos_aboutme - pos_nav_bar
  let distance_experience = pos_experience - pos_nav_bar
  let distance_more = pos_more - pos_nav_bar

  let min = Math.min(...[distance_home, distance_aboutme, distance_experience, distance_more].filter(num => num > 0))

  document.querySelectorAll('.nav-bar .item')[0].classList.remove('highlight')
  document.querySelectorAll('.nav-bar .item')[1].classList.remove('highlight')
  document.querySelectorAll('.nav-bar .item')[2].classList.remove('highlight')
  document.querySelectorAll('.nav-bar .item')[3].classList.remove('highlight')

  if(min === distance_home) document.querySelectorAll('.nav-bar .item')[0].classList.add('highlight')
  if(min === distance_aboutme) document.querySelectorAll('.nav-bar .item')[1].classList.add('highlight')
  if(min === distance_experience) document.querySelectorAll('.nav-bar .item')[2].classList.add('highlight')
  if(min === distance_more) document.querySelectorAll('.nav-bar .item')[3].classList.add('highlight')

}

window.addEventListener('scroll', scrollHandler)

// Wrap every letter in a span
const textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 500
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 500,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 500,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 3000,
    easing: "easeOutExpo",
    delay: 700
  });

  // Wrap every letter in a span
const nameWrapper = document.querySelector('.ml12');
nameWrapper.innerHTML = nameWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 600,
    delay: (el, i) => 100 + 30 * i
  });