import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import {AiOutlineMail} from 'react-icons/ai'

const Footer = () => {
  return (
    <>
    <div className="main3">
      <div className='footer'>
        <div className="col1">
          <h2>About</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          <p><h6 className='h61' >Email </h6>: info@jstemplate.net</p>
          <p><h6>Phone </h6>: 880 123 456 789</p>
        </div>
        <div className="col2">
          <h2>Quick Link</h2>
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Blog</Link>
          <Link to="/">Archieved</Link>
          <Link to="/">Author</Link>
          <Link to="/">Contact</Link>
        </div>
        <div className="col3">
          <h2>Category</h2>
          <Link to="/">Lifestyle</Link>
          <Link to="/">Technology</Link>
          <Link to="/">Travel</Link>
          <Link to="/">Business</Link>
          <Link to="/">Economy</Link>
          <Link to="/">Sports</Link>
        </div>
        <div className="lcard">
          <h5>Weekly Newsletter</h5>
          <p>Get blog articles and offers via email</p>
          <input type="email" placeholder='Your Email' id='email' />
          <i><AiOutlineMail/></i>
          <button>Subscribe</button>
        </div>
      </div>
      <div className='lastpart'>
          <div className='lastdiv'>
            <img src={require('../images/Logo (1).png')} alt="" />
            <div>
              <span>Meta</span>
              <p>© JS Template 2023. All Rights Reserved.</p>
            </div>
          </div>
          <div className='lastdiv2'>
            <Link to="/">Terms of Use</Link>  
            <Link to="/">Privacy Policy</Link>  
            <Link to="/">Cookie Policy</Link>  
          </div>
        </div>
    </div>
    </>
  )
}

export default Footer