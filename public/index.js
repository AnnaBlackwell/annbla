var $ = require('jquery')

$(document).ready(
  $('.menu__item').click('.menu__link', function (e) {
    $('.menu__item').removeClass('menu__item--current')
    $(this).addClass('menu__item--current')
  })
  )
$('a').click(function (e) {
  e.preventDefault()
  var goTo = this.getAttribute('href')
  setTimeout(function () {
    window.location = goTo
  }, 300)
})
