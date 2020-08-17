'use strict'
const html2canvas = require('html2canvas')
var x = document.getElementById('rayyansaidi')
var y = document.getElementById('treasure')
var z = document.getElementById('home-url')
var a = document.getElementById('holiday')
var b = document.getElementById('holidays')
var aa = document.getElementById('holiday-home')
var bb = document.getElementById('birthday')
var cc = document.getElementById('father')
var dd = document.getElementById('mom')
var ee = document.getElementById('val')

// Treasure Hunt Varibles
var score = 0
var s = document.getElementById('scorebord')
var w = document.getElementById('lose')
var p = document.getElementById('playbtn')
var sBtn = document.getElementById('screenshot')
// Stuff Besides Treausre Hunt
y.style.display = 'none'
a.style.display = 'none'
b.style.display = 'none'
document.getElementById('homeLink').addEventListener('click', () => {
  x.style.display = 'block'
  y.style.display = 'none'
  z.style.display = 'block'
  a.style.display = 'none'
  document.getElementById('table').style.display = 'none'
  document.getElementById('play').style.display = 'none'
  b.style.display = 'none'
  sBtn.style.display = 'none'
})
document.getElementById('treasureLink').addEventListener('click', () => {
  x.style.display = 'none'
  y.style.display = 'block'
  z.style.display = 'none'
  p.style.display = 'block'
  p.style.margin = '0 auto'
  a.style.display = 'none'
  b.style.display = 'none'
  sBtn.style.display = 'none'
})
// Holiday Templates
document.getElementById('holidayLink').addEventListener('click', () => {
  a.style.display = 'block'
  x.style.display = 'none'
  y.style.display = 'none'
  z.style.display = 'none'
  aa.style.display = 'block'
  bb.style.display = 'none'
  cc.style.display = 'none'
  dd.style.display = 'none'
  ee.style.display = 'none'
  b.style.display = 'block'
  document.getElementById('table').style.display = 'none'
  document.getElementById('play').style.display = 'none'
  sBtn.style.display = 'none'
})
document.getElementById('birthdayLink').addEventListener('click', () => {
  aa.style.display = 'none'
  bb.style.display = 'block'
  cc.style.display = 'none'
  dd.style.display = 'none'
  ee.style.display = 'none'
  sBtn.style.display = 'block'
  sBtn.addEventListener('click', () => {
    document
      .getElementById('screenshot-output')
      .setAttribute('disabled', 'disabled')
    html2canvas(bb, { backgroundColor: '#222222' }).then((canvas) => {
      document.getElementById('canvas').appendChild(canvas)
      canvas = document.querySelector('#canvas canvas')
      document.getElementById('screenshot').innerHTML =
        '<a href="' +
        document.querySelector('#canvas canvas').toDataURL() +
        '" target="blank">' +
        '<button class="btn btn-outline-success" id="screenshot-output" type="button">Open in new tab</button></a><button class="btn btn-primary" id="screenshot-button" type="button">Take a screenshot</button>'
      canvas.remove()
      document.getElementById('screenshot-output').style.display =
        'inline-block'
      document.getElementById('screenshot-output').removeAttribute('disabled')
    })
  })
})
document.getElementById('fatherLink').addEventListener('click', () => {
  aa.style.display = 'none'
  bb.style.display = 'none'
  cc.style.display = 'block'
  dd.style.display = 'none'
  ee.style.display = 'none'
  sBtn.style.display = 'block'
  sBtn.addEventListener('click', () => {
    document
      .getElementById('screenshot-output')
      .setAttribute('disabled', 'disabled')
    html2canvas(cc, { backgroundColor: '#222222' }).then((canvas) => {
      document.getElementById('canvas').appendChild(canvas)
      canvas = document.querySelector('#canvas canvas')
      document.getElementById('screenshot').innerHTML =
        '<a href="' +
        document.querySelector('#canvas canvas').toDataURL() +
        '" target="blank">' +
        '<button class="btn btn-outline-success" id="screenshot-output" type="button">Open in new tab</button></a><button class="btn btn-primary" id="screenshot-button" type="button">Take a screenshot</button>'
      canvas.remove()
      document.getElementById('screenshot-output').style.display =
        'inline-block'
      document.getElementById('screenshot-output').removeAttribute('disabled')
    })
  })
})
document.getElementById('motherLink').addEventListener('click', () => {
  aa.style.display = 'none'
  bb.style.display = 'none'
  cc.style.display = 'none'
  dd.style.display = 'block'
  ee.style.display = 'none'
  sBtn.style.display = 'block'
  sBtn.addEventListener('click', () => {
    document
      .getElementById('screenshot-output')
      .setAttribute('disabled', 'disabled')
    html2canvas(dd, { backgroundColor: '#222222' }).then((canvas) => {
      document.getElementById('canvas').appendChild(canvas)
      canvas = document.querySelector('#canvas canvas')
      document.getElementById('screenshot').innerHTML =
        '<a href="' +
        document.querySelector('#canvas canvas').toDataURL() +
        '" target="blank">' +
        '<button class="btn btn-outline-success" id="screenshot-output" type="button">Open in new tab</button></a><button class="btn btn-primary" id="screenshot-button" type="button">Take a screenshot</button>'
      canvas.remove()
      document.getElementById('screenshot-output').style.display =
        'inline-block'
      document.getElementById('screenshot-output').removeAttribute('disabled')
    })
  })
})
document.getElementById('valentineLink').addEventListener('click', () => {
  aa.style.display = 'none'
  bb.style.display = 'none'
  cc.style.display = 'none'
  dd.style.display = 'none'
  ee.style.display = 'block'
  sBtn.style.display = 'block'
  sBtn.addEventListener('click', () => {
    document
      .getElementById('screenshot-output')
      .setAttribute('disabled', 'disabled')
    html2canvas(ee, { backgroundColor: '#222222' }).then((canvas) => {
      document.getElementById('canvas').appendChild(canvas)
      canvas = document.querySelector('#canvas canvas')
      document.getElementById('screenshot').innerHTML =
        '<a href="' +
        document.querySelector('#canvas canvas').toDataURL() +
        '" target="blank">' +
        '<button class="btn btn-outline-success" id="screenshot-output" type="button">Open in new tab</button></a><button class="btn btn-primary" id="screenshot-button" type="button">Take a screenshot</button>'
      canvas.remove()
      document.getElementById('screenshot-output').style.display =
        'inline-block'
      document.getElementById('screenshot-output').removeAttribute('disabled')
    })
  })
})
// Treasure Hunt
document.getElementById('uhall').addEventListener('click', () => {
  var width = Math.floor(Math.random() * 10) + 1
  var hight = Math.floor(Math.random() * 31) + 1
  w.innerHTML = ''
  if (width < 8 && hight < 13) {
    score += 100
    s.innerHTML = score
  } else if (width > 7 || hight > 12) {
    w.innerHTML = 'Incorect. Game over.'
    score = 0
    s.innerHTML = score
  } else {
    alert('Error Code 1')
  }
})
document.getElementById('kitchen').addEventListener('click', () => {
  var width = Math.floor(Math.random() * 10) + 1
  var hight = Math.floor(Math.random() * 31) + 1
  w.innerHTML = ''
  if (width < 5 && hight > 12) {
    score += 100
    s.innerHTML = score
  } else if (width < 7 && hight > 18) {
    score += 100
    s.innerHTML = score
  } else if (hight > 13 || width < 6) {
    w.innerHTML = 'Incorect. Game over.'
    score = 0
    s.innerHTML = score
  } else if (width > 7 || hight < 19) {
    w.innerHTML = 'Incorect. Game over.'
    score = 0
    s.innerHTML = score
  } else {
    alert('Error Code 1')
  }
})

document.getElementById('dhall').addEventListener('click', () => {
  var width = Math.floor(Math.random() * 10) + 1
  var hight = Math.floor(Math.random() * 31) + 1
  w.innerHTML = ''
  if (width < 6 && hight > 12) {
    score += 100
    s.innerHTML = score
  } else if (width > 5 || hight < 13) {
    w.innerHTML = 'Incorect. Game over.'
    score = 0
    s.innerHTML = score
  } else {
    alert('Error Code 1')
  }
})
document.getElementById('monster').addEventListener('click', () => {
  var width = Math.floor(Math.random() * 10) + 1
  var hight = Math.floor(Math.random() * 31) + 1
  w.innerHTML = ''
  if (width > 7 && hight < 13) {
    score += 100
    s.innerHTML = score
  } else if (width < 8 || hight > 12) {
    w.innerHTML = 'Incorect. Game over.'
    score = 0
    s.innerHTML = score
  } else {
    alert('Error Code 1')
  }
})
document.getElementById('playroom').addEventListener('click', () => {
  var width = Math.floor(Math.random() * 10) + 1
  var hight = Math.floor(Math.random() * 31) + 1
  w.innerHTML = ''
  if (width > 7 && hight > 13 < 19) {
    score += 100
    s.innerHTML = score
  } else if (width < 8 || hight < 14 < 18) {
    w.innerHTML = 'Incorect. Game over.'
    score = 0
    s.innerHTML = score
  } else {
    alert('Error Code 1')
  }
})
document.getElementById('none').addEventListener('click', () => {
  score = 0
  s.innerHTML = score
})
document.getElementById('none').addEventListener('click', () => {
  document.getElementById('table').style.display = 'none'
  document.getElementById('play').style.display = 'none'
  p.style.display = 'block'
  p.style.margin = '0 auto'
})
document.getElementById('playbtn').addEventListener('click', () => {
  document.getElementById('table').style.display = 'grid'
  document.getElementById('play').style.display = 'block'
  p.style.display = 'none'
})
// Modal
// Get the modal
var modal = document.getElementById('myModal')

// Get the button that opens the modal
var btn = document.getElementById('myBtn')

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0]

// When the user clicks the button, open the modal
btn.addEventListener('click', () => {
  modal.style.display = 'block'
})

// When the user clicks on <span> (x), close the modal
span.addEventListener('click', () => {
  modal.style.display = 'none'
})

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none'
  }
})
