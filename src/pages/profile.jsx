import React, { useState } from 'react'
import Header from '../components/Header'
import { FaArrowLeftLong } from "react-icons/fa6";
import '../styles/global.css'
import '../styles/profile.css'
import { Link } from 'react-router-dom';
import { useShareData } from '../DataContext';

const Profile = () => {
  const {data} = useShareData()

  return (
    <div>
      <Header/>
      <div className='body-card'>
        <div className='profile-card'>
          <div className='greet-section'>
            <Link to={'/'}>
              <FaArrowLeftLong style={{color:'black',fontSize:'1.5rem'}}/>
            </Link>
            <h2 className='greet-name'>Welcome, {data?.name}</h2>
          </div>
          <div className='usr-profile-card'>
            <div className='usr-profile-head'>
              <div className='logo-radius'>EH</div>
              <div className='usr-name-email'>
                <p className='usr-profile-name'>{data?.name}</p>
                <p className='usr-profile-email'>{data?.email}</p>
              </div>

            </div>
            <div className='profile-info'>
              <form>
                <div className='inp-sec'>
                  <label>User ID</label>
                  <br/>
                  <input disabled readOnly value={data?.id}/>
                </div>
                <div className='inp-sec'>
                  <label>Name</label>
                  <br/>
                  <input disabled readOnly value={data?.name}/>
                </div>
                <div className='inp-sec'>
                  <label>Email ID</label>
                  <br/>
                  <input disabled readOnly value={data?.email}/>
                </div>
                <div className='inp-sec'>
                  <label>Address</label>
                  <br/>
                  <input disabled readOnly value={data?.address.city}/>
                </div>
                <div className='inp-sec'>
                  <label>Phone</label>
                  <br/>
                  <input disabled readOnly value={data?.phone}/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
