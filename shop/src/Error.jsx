import React from 'react'
import ErrorImage from './pexels-anna-nekrashevich-8533218.jpg'
import { Link } from 'react-router-dom'


const Error = () => {
  return (
    <div className='text-center div-image'>
      <div className='error-message'>
        <h1>Error 101</h1>
        <h4>Page cannot be found</h4>
        <Link to={'/'}>
          <button className='btn btn-dark btn-lg'>Back to Home</button>
        </Link>
      </div>
      <img className='error-image' src={ErrorImage} alt="error-image" />

    </div>
  )
}

export default Error