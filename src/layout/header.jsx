import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsSun } from 'react-icons/bs'
import './style.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className="main">
        <nav>
          <div className="logo">
            <img src={require('../images/Logo.png')} alt="" />
          </div>
          <div className='navs'>
            <Link to="/" title='Home'>Home</Link>
            <Link to="/blog" title='Blog'>Blog</Link>
            <a href="#" title='Post' >Single Post</a>
            <a href="#" title='Pages'>Pages</a>
            <Link to="/contact" title='Contacts'>Contacts</Link>
          </div>
          <div className='buttons'>
            <input type="text" name="" id="search" placeholder='Search' />
            <i className='changer'><img src={require('../images/Frame 205.png')} alt="" /></i>
            <i className='search'><AiOutlineSearch /></i>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Header