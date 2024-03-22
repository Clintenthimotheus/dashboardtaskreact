import React, { useState } from 'react';
import '../Css/Header.css';
import { MDBBadge, MDBBtn } from 'mdb-react-ui-kit';

function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  window.addEventListener('resize', () => {
    setWindowWidth(window.innerWidth);
  });

  return (
    <>
      <div className="header">
        <div className="header-left">
          <div className="profile-icon">
            <i className="fa-solid fa-user"></i>
          </div>
          <div className="user">
            <div className="username">Welcome back, John Doe!</div>
            <div className="useremail">johndoe@gmail.com</div>
          </div>
        </div>
        <div className="header-right">
          {windowWidth >= 426 ? (
            <>
              <div className="icons"><i className="fa-solid fa-circle-half-stroke"></i></div>
              <div className="icons"><i className="fa-solid fa-magnifying-glass"></i></div>
              <div className="icons">
                <i className="fa-solid fa-message"></i>
                <MDBBadge
                  style={{ backgroundColor: '#af233a', color: '#f9e1e5' }}
                  light
                  pill
                  className='position-absolute translate-middle'
                >
                  30
                  <span className="visually-hidden">unread messages</span>
                </MDBBadge>
              </div>
              <div className="icons">
                <i className="fa-solid fa-bell"></i>
                <MDBBadge
                  style={{ backgroundColor: '#af233a', color: '#f9e1e5' }}
                  light
                  pill
                  className='position-absolute translate-middle'
                >
                  17
                  <span className="visually-hidden">unread messages</span>
                </MDBBadge>
              </div>
            </>
          ) : (
            <MDBBtn className="bars-icon">
              <i className="fa-solid fa-bars"></i>
            </MDBBtn>
          )}
        </div>
      </div>
      <div className="hr"></div>
    </>
  );
}

export default Header;
