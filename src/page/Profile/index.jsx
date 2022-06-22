import React, { Component } from 'react'
import { Pencil } from 'react-bootstrap-icons'
import './Profile.css'

import Profpict from '../../assets/img/profpict.png'
import Logout from '../../assets/img/logout.png'

export default class Profile extends Component {
  render() {
    return (
      <>
        <main className='login-global-container'>
          <div className="login-header">
            <div className="login-header-title">Profile</div>
            <div className="login-header-info">See your notifications for the latest updates</div>
          </div>
          <div className="profile-main-container">
            <div className="profile-profpic-name-container">
              <div className="profil-picture-container">
                {/* <div className="profile-picture-edit-background"></div> */}
                <div className="profile-picture-edit">Edit<Pencil className='profile-pencil-icon' /></div>
                <img src={Profpict} alt="profpict" className='profile-picture' />
              </div>
              <div className="profle-name-container">
                <div className="profile-name">Syifa <Pencil className='profile-pencil-icon' /></div>
                <div className="profile-role">as Customer</div>
              </div>
            </div>
            <div className="profile-input-all-container">
              <div className="profile-input-container">
                <div className="profile-input-label">
                  <label htmlFor="gender" className="profile-label">Gender</label>
                  <input type="text" name="gender" id="gender" className="profile-input" placeholder='Input gender' />
                </div>
                <div className="profile-input-edit">EDIT <Pencil className='profile-pencil-icon' />
                </div>
              </div>
              <div className="profile-input-container">
                <div className="profile-input-label">
                  <label htmlFor="gender" className="profile-label">Your Email</label>
                  <input type="text" name="gender" id="gender" className="profile-input" placeholder='Input email' />
                </div>
                <div className="profile-input-edit">EDIT <Pencil className='profile-pencil-icon' />
                </div>
              </div>
              <div className="profile-input-container"><div className="profile-input-label">
                <label htmlFor="gender" className="profile-label">Store Description</label>
                <input type="text" name="gender" id="gender" className="profile-input" placeholder='Input store description' />
              </div>
                <div className="profile-input-edit">EDIT <Pencil className='profile-pencil-icon' />
                </div>
              </div>
            </div>
            <div className="profile-logout-button"><img src={Logout} alt="logout" className='profile-logout-pict'/>Logout</div>
          </div>
        </main>
      </>
    )
  }
}
