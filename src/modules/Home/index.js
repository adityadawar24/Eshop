import React, { useEffect, useState } from "react";
import Body from '../../components/Body'
import Products from "../../Products";


const Home=()=>{

    const [products,setProducts] = useState([]) 

    useEffect(()=>{
        const fetchProducts =async()=>{
           const response =await fetch('https://fakestoreapi.com/products?limit=20')
           const data =await response.json()
           console.log(data)
           setProducts(data)
        }
        fetchProducts()
    },[])


    return (
    <>
        <Body/>
        <h2 className=" text-6xl font-bold text-center mt-15">Products</h2>
        {
            products.length >0 ? <Products products ={products}/> : <div>Loading........</div>
        }
        <Products/>
        
        </>
    )
}

export default Home