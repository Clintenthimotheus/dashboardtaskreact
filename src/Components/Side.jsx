import React, { useState } from 'react';
import '../Css/Side.css';
import logo from '../images/gingerlogo2.png';

function Side({ activeDashboard, handleDashboardSelect }){
 
  return (
    <div className="sidebar">
      <div className="logo">
        <div className="logo-img">
          <img src={logo} alt="" />
        </div>
        <div className='logotext'>
          <span className='logotext-1'>GINGER</span>
          <span className='logotext-2'>TECHNOLOGIES</span>
        </div>
      </div>
      <div className="menu">
        <div className="menuItem">
          <span className='manumain'>MAIN</span>
          <div className={`icondashboard ${activeDashboard === 0 ? 'active' : ''}`} onClick={() => handleDashboardSelect(0)}>
            <div className="space-color"></div>
            <div className="icon">
              <i className="fa-solid fa-house"></i>
            </div>
            <div className='dashboard'>Dashboard</div>
          </div>
          <span className='manumain'>MANAGE</span>
          <div className={`icondashboard ${activeDashboard === 1 ? 'active' : ''}`} onClick={() => handleDashboardSelect(1)}>
            <div className="space-color"></div>
            <div className="icon">
              <i className="fa-solid fa-message"></i>
            </div>
            <div className='dashboard'>lnbox</div>
          </div>
          <div className={`icondashboard ${activeDashboard === 2 ? 'active' : ''}`} onClick={() => handleDashboardSelect(2)}>
            <div className="space-color"></div>
            <div className="icon">
              <i className="fa-solid fa-spinner"></i>
            </div>
            <div className='dashboard'>Channels</div>
          </div>
          <div className={`icondashboard ${activeDashboard === 3 ? 'active' : ''}`} onClick={() => handleDashboardSelect(3)}>
            <div className="space-color"></div>
            <div className="icon">
              <i className="fa-solid fa-user"></i>
            </div>
            <div className='dashboard'>Business Profile</div>
          </div>
          <div className={`icondashboard ${activeDashboard === 4 ? 'active' : ''}`} onClick={() => handleDashboardSelect(4)}>
            <div className="space-color"></div>
            <div className="icon">
              <i className="fa-solid fa-chart-simple"></i>
            </div>
            <div className='dashboard'>Insights</div>
          </div>
          <span className='manumain'>SETTINGS</span>
          <div className={`icondashboard ${activeDashboard === 5 ? 'active' : ''}`} onClick={() => handleDashboardSelect(5)}>
            <div className="space-color"></div>
            <div className="icon">
              <i className="fa-solid fa-circle-plus"></i>
            </div>
            <div className='dashboard'>Create Roles</div>
          </div>
          <div className={`icondashboard ${activeDashboard === 6 ? 'active' : ''}`} onClick={() => handleDashboardSelect(6)}>
            <div className="space-color"></div>
            <div className="icon">
              <i className="fa-solid fa-id-card-clip"></i>
            </div>
            <div className='dashboard'>Create Users</div>
          </div>
          <div className={`icondashboard ${activeDashboard === 7 ? 'active' : ''}`} onClick={() => handleDashboardSelect(7)}>
            <div className="space-color"></div>
            <div className="icon">
              <i className="fa-solid fa-gear"></i>
            </div>
            <div className='dashboard'>Settings</div>
          </div>
          <div className="icondown">
            <div className="icondashboard">
              <div className="icon">
                <i className="fa-regular fa-user"></i>
              </div>
              <div className='dashboard'>Profile</div>
            </div>
            <div className="icondashboard">
              <div className="icon">
                <i className="fa-solid fa-right-from-bracket"></i>
              </div>
              <div className='dashboard'>Log Out</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Side;