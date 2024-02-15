import React from 'react'
import Hero from './Hero'
import FeaturedPorducts from './FeaturedPorducts'
import { AppContext } from './Context'
import { useContext } from 'react'

const Home = () => {
   
    return (
        <div>
            <div>
                <Hero />
                <FeaturedPorducts />
            </div>
        </div>
    )
}

export default Home