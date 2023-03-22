import { useRef } from 'react'
import { Fragment } from 'react'
import React from 'react'
import './cookies.scss'

function CookiesAlert() {
  const cookiesContainer = useRef()

  // Закрыть оповещение о cookies
  const hideCookies = (value) => {
    cookiesContainer.current.style.display = 'none'
    localStorage.setItem('cookies', value)
  }
  return (
    <Fragment>
      {!['accepted', 'rejected'].includes(localStorage.getItem('cookies')) ? (
        <div className="cookies-warning" ref={cookiesContainer}>
          <div className="cookies-header">
            <div className="cookies-image" />
            <div className="cookies-title">
              <p>We use cookies</p>
            </div>
          </div>
          <div className="cookies-body">
            <p>
              We use cookies to help the website function and improve your user
              experience. You may unable/disable cookies via 'Manage cookies'
            </p>
          </div>
          <div className="cookies-actions">
            <div className="cookie-button manage">
              <p>Manage cookies</p>
            </div>
            <div
              className="cookie-button accept"
              onClick={() => hideCookies('accepted')}
            >
              <p>Accept all</p>
            </div>
            <div
              className="cookie-button reject"
              onClick={() => hideCookies('rejected')}
            >
              <p>Reject all</p>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </Fragment>
  )
}

export default CookiesAlert
