// import React from 'react'
// import { useState, useEffect } from 'react'

// const FeaturedPorducts = () => {

//     // const randomNumber = Math.floor(Math.random()*135)
//     // console.log(randomNumber)

//     const [featured, setFeatured] = useState([])
//     const [list, setList] = useState([])
//     const [filterArray, setFilteredArray] = useState([])

//     useEffect(() => {
//         let array = [];

//         for (let index = 0; index < 4; index++) {
//             const randomNumber = Math.ceil(Math.random() * 21);
//             array.push(randomNumber);
//         }

//         setFeatured(array);

//         const listOfItems = async () => {
//             const data = await fetch('https://fakestoreapi.com/products')
//             const response = await data.json()
//             setList(response)

//         }

//         listOfItems()

//         let x
//         let abc = []
//         for (x of featured) {
//             console.log(x)

//             abc = list.filter(item => {
//                 return item.id === x
//             })
//             setFilteredArray(abc)
//         }

//         console.log(filterArray)



//     }, []); // Empty dependency array ensures the effect runs once after the initial render
//     console.log(list)

//     // this is for the random number array
//     console.log(featured);

//     // let x
//     // let filterArray = []
//     // for(x of featured){
//     //     console.log(x)

//     //     filterArray = list.filter(item=>{
//     //         return item.id === x
//     //     })
//     // }

//     // console.log(filterArray)




//     return (
//         <div className='container mt-5'>
//             <h1 className='text-center'>Our This Month's Featured Products</h1>



//         </div>
//     )
// }

// export default FeaturedPorducts

import React, { useState, useEffect } from 'react';
import FeaturedCard from './FeaturedCard';
import Grid from './Grid';
import PacmanLoader from "react-spinners/PacmanLoader";


const FeaturedProducts = () => {
    const [list, setList] = useState([]);
    const [featured, setFeatured] = useState([]);
    const [filteredIndices, setFilteredIndices] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {

                const data = await fetch('https://fakestoreapi.com/products');
                const response = await data.json();
                setList(response);

            } catch (error) {
                console.error("Error fetching data:", error);

            }

        };

        fetchData();

    }, []); // Empty dependency array ensures the effect runs once after the initial render

    useEffect(() => {
        let array = []
        for (let index = 0; index < 4; index++) {
            const randomNumber = Math.floor(Math.random() * 21);
            array.push(randomNumber);
        }

        setFeatured(array)

    }, [list])

    useEffect(() => {
        // let filteredIndicesArray = list
        //     .map(item => {
        //         return featured.includes(item.id) ? item.id : null
        //     }).filter(item => item !== null)

        const filteredIndicesArray = list.filter(item => {
            return featured.includes(item.id)
        })

        setFilteredIndices(filteredIndicesArray)
    }, [list])



    console.log(list)
    console.log(featured)
    console.log(filteredIndices)





    // return (
    //     <div className='container mt-5'>
    //         <h1 className='text-center'>Our This Month's Featured Products</h1>
    //         <ul>
    //             {filteredIndices.map(index => (
    //                 <li key={index}>{list[index].title}</li>
    //             ))}
    //         </ul>
    //     </div>
    // );

    return (
        <div className='container mt-5'>
            {filteredIndices.length === 0 ? (
                <h3><PacmanLoader size={100} cssOverride={{margin:'auto', marginTop:'100px'}} /></h3>
            ) : (
                <>
                    <h1 className='text-center'>Our This Month's Featured Products</h1>
                    {/* <div className='row'>
                        <div className='col-lg-2'>
                            {filteredIndices.map(item => (
                                <FeaturedCard key={item.id} {...item} />
                            ))}
                        </div>
                    </div> */}

                    <Grid filteredIndices={filteredIndices} />




                </>
            )}
        </div>
    );

};

export default FeaturedProducts;
