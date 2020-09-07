import React from 'react';
import './Header.css';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        {/* Avatar logged in user */}
        <Avatar 
          className='header__avatar'
          alt='Wilfried'
          src=''
        />
        <AccessTimeIcon />
        {/* Time icon */}
      </div>
      <div className='header__search'>
        <SearchIcon />
        <input placeholder='Search Job Alert' />
      </div>
      <div className='header__right'>
        <HelpOutlineIcon />
      </div>
    </div>
  )
}

export default Header

// alt={user?.displayName}
//           src={user?.photoURL}