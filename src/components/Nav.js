import React from 'react'
import $ from 'jquery'

export default React.createClass({

  componentDidMount () {
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
  },

  render: function () {
    return (
      <div>
        <nav className='menu menu--miranda'>
        <ul className='menu__list'>
          <li className='menu__item'><a className='menu__link' href='#'>Projects</a></li>
          <li className='menu__item'><a className='menu__link' href='#'>Resume</a></li>
          <li className='menu__item'><a className='menu__link' href='#'>Contact</a></li>
        </ul>
      </nav>
    </div>
    )
  }
})
