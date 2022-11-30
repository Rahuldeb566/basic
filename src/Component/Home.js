import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className='home container'>
      <div className="navbar">
        <a href="/">Home</a>
        <a href="/">About Us</a>
        <a href="/">Blog</a>
      </div>
      <button className='btn btn-info hbtn'>Login</button>
    </div>
  )
}

export default Home