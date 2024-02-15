import React from 'react'
import { useState, useEffect } from 'react';

export const AppContext = React.createContext()

const AppProvider = ({ children }) => {

    const [container, setContainer] = useState([])

    useEffect(()=>{
        const fetchData = async () => {
            try {
    
                const data = await fetch('https://fakestoreapi.com/products');
                const response = await data.json();
                setContainer(response);
    
            } catch (error) {
                console.error("Error fetching data:", error);
    
            }
    
        };
    
        fetchData()
    }, [])
    
    // console.log(container)

    return (
        <AppContext.Provider value={container}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider