import React, { useCallback } from 'react'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from './Context'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import PacmanLoader from "react-spinners/PacmanLoader";




const SingleProduct = () => {

    const [loading, setLoading] = useState(false)
    const [product, setProduct] = useState({})


    const { id } = useParams()
    console.log(id)

    // const data = useContext(AppContext)

    const url = `https://fakestoreapi.com/products/${id}`
    console.log(url)



    const fetchData = useCallback(async () => {
        try {
            const data = await fetch(url)
            const response = await data.json()
            console.log(response)
            setProduct(response)
            setLoading(false)

        } catch (error) {
            console.error("Error fetching data:", error);
        }

    }, [url])


    useEffect(() => {
        setLoading(true)

        fetchData()
        console.log(product)

    }, [fetchData])



    // console.log(data[`${id - 1}`].title)

    if (loading) {
        return (
            <div><PacmanLoader cssOverride={{ margin: 'auto', marginTop: '200px' }} size={100} /></div>
        )
    }

    console.log(product)

    const { image, title, price, description } = product


    return (
        <div className='container row mt-5 mx-auto text-center d-flex justify-content-center align-items-center'>
            <div className='col-lg col-sm-12 text-center mt-5'>
                <img src={image} style={{ height: '430px' }} className='mt-5'></img>
            </div>
            <div className='col-lg col-sm-12 '>
                <h1>{title}</h1>
                <p className=''>{description}</p>
                <h3>${price}</h3>
                <Link to={'/products'}>
                    <button className='btn btn-light btn-lg mt-5'>Back to Products List</button>
                </Link>
            </div>


        </div>
    )
}

export default SingleProduct


// d-flex justify-content-center align-items-center mt-5