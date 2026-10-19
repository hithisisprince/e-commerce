import { useEffect, useState } from "react"
import Product from '../components/Product'

export default function Home(){
    const [products, setProducts] = useState([])

    useEffect(()=>{
        async function getData() {
            try {
                const response = await fetch("https://dummyjson.com/products")
                const data = await response.json();
                console.log(data.products)
                setProducts(data.products)
            } catch (error){
                console.log(`Oops! Somethig went wrong, ${error}`)
            }
        }
        getData();
    }, [])

    return (
        <div className="flex flex-col justify-center bg-gray-100 items-center min-h-screen font-inter gap-[40px] md:gap-[100px] p-4 sm:p-8 lg:p-[90px]">
            <div id="home-title" className="flex flex-col gap-[20px] justify-center items-center text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">Welcome to ShopHub</h1>
                <p className="text-[15px] sm:text-[17px] font-medium text-gray-500">Discover amazing products at great prizes</p>
            </div>
            <div id="product-container" className="flex flex-col gap-[30px] w-full justify-center items-center">
                <h1 className="text-2xl sm:text-3xl font-semibold text-center sm:text-left w-full">Our Products</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1200px]">
                    {products.map((product) => (   
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}