import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='hero-section text-center text-dark pt-4'>
            <div className='backgroundclr'>
                <h1>Welcome to Our Online Shop</h1>
                <h2>50% off</h2>
                <h5>for selected items*</h5>
                <Link to='/products'>
                    <Button variant="primary" size="lg" className='mt-4'>
                        Shop Now
                    </Button>
                </Link>

            </div>

        </div>
    )
}

export default Hero