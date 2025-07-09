import React, { useEffect } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import '../styles/header.css'
import { useShareData } from '../DataContext'

const Header = (props) => {
  const {data} = useShareData()
  return (
    <div className='header'>
        <h1 className='header-logo'>Swift</h1>
        <Link to={'/profile'} className='link'>
          <div className='profile-logo-card'>
            <div>{"LA"}</div>
            <p>{data?.name}</p>
          </div>
        </Link>
    </div>
  )
}

export default Header
