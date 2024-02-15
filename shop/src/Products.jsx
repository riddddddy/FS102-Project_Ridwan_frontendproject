import React from 'react'
import { useContext } from 'react'
import { AppContext } from './Context'
import ProductCard from './ProductCard'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PacmanLoader from "react-spinners/PacmanLoader";




const Products = () => {

    const [loading, setLoading] = useState(false)
    const data = useContext(AppContext)
    console.log(data)

    const [menuItems, setMenuItems] = useState([])
    console.log(menuItems)

    // to find out the category
    const categoryArray = data.map(item => {
        return item.category
    })

    console.log(categoryArray)

    const uniqueCategories = categoryArray.reduce((a, b) => {
        if (!a.includes(b)) {
            a.push(b)
        }
        return a
    }, ['All'])

    console.log(uniqueCategories)



    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    useEffect(()=>{
        setMenuItems(data)
    },[data])



    // filter buttons

    const filterHandler = (e) => {

        if(e === 'All'){
            setMenuItems(data)
            return
        } 

        console.log(e)

        const newItems = data.filter(item => {
            return item.category === e
        })

        console.log(newItems)

        setMenuItems(newItems)

    }

    return (
        <div className='container'>
            <h1 className='text-center mt-5'>My Products</h1>




            {loading ? <PacmanLoader cssOverride={{ margin: 'auto', marginTop: '200px' }} size={100} /> :

                <div className='container mt-5'>
                    <div className='text-center custom mb-5'>
                        {uniqueCategories.map(item => {
                            return <button onClick={() => { filterHandler(`${item}`) }} className='btn btn-secondary abc px-4 mb-1 mx-1'>{item}</button>
                        })}

                    </div>
                    <div className='abg'>
                        {menuItems.map(item => {
                            return (
                                <Card key={item.id} style={{ width: '18rem', height: 'fit-content', padding: '30px', display: 'flex' }}>
                                    <Card.Img variant="top" src={item.image} style={{ height: '200px' }} />
                                    <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
                                        <Card.Title className='mt-3 mb-3' style={{ height: '90px', overflow: 'auto' }}>{item.title}</Card.Title>
                                        <h3 className=''>${item.price.toFixed(2)}</h3>
                                        <Link to={`/products/${item.id}`}>
                                            <Button variant="primary" className='' style={{ verticalAlign: 'bottom' }}>Read More</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            )
                        })}
                    </div>

                </div>}






        </div>
    )
}

export default Products