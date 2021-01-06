// jQuery Dependant
$(document).ready(function () {
  // Navigation Menu
  const NavMenu = new NavigationMenu()

  // Faders
  $.fn.fader = Fader
  $('.fader').each(function () {
    $(this).fader()
  })
})

// Typeform
;(function () {
  var qs,
    js,
    q,
    s,
    d = document,
    gi = d.getElementById,
    ce = d.createElement,
    gt = d.getElementsByTagName,
    id = 'typef_orm_share',
    b = 'https://embed.typeform.com/'

  if (!gi.call(d, id)) {
    js = ce.call(d, 'script')
    js.id = id
    js.src = b + 'embed.js'
    q = gt.call(d, 'script')[0]
    q.parentNode.insertBefore(js, q)
  }
})()

// Basic Scroll
window.addEventListener('load', function () {
  const easeBoxes = []
  document.querySelectorAll('.easeBox').forEach(function (elem, i) {
    const timing = elem.getAttribute('data-timing') || 'sineInOut'
    easeBoxes.push(
      basicScroll.create({
        elem: elem,
        from: 'middle-bottom',
        to: 'middle-middle',
        direct: true,
        track: true,
        props: {
          '--ty': {
            from: '150px',
            to: '0',
            timing: timing,
          },
        },
      })
    )
  })
  easeBoxes.forEach(function (easeBox) {
    easeBox.start()
  })

  const fadeBoxes = []
  document.querySelectorAll('.fadeBox').forEach(function (elem, i) {
    fadeBoxes.push(
      basicScroll.create({
        elem: elem,
        from: 'middle-bottom',
        to: 'top-middle',
        direct: true,
        track: true,
        props: {
          '--o': {
            from: 0.1,
            to: 0.99,
          },
        },
      })
    )
  })
  fadeBoxes.forEach(function (fadeBox) {
    fadeBox.start()
  })
})
