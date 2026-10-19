export default function Product({ product }){
    return (
        <div className="flex flex-col bg-white p-[20px] rounded-lg w-full items-center gap-[10px] shadow-sm">
            <img src={product.images[0]} className="w-[200px] h-[200px] object-contain" />
            <div id="text-details" className="flex flex-col gap-[20px] mb-2 items-center w-full">
                <h1 className="text-xl self-start max-w-full min-h-[56px] line-clamp-2 font-semibold">{product.brand} {product.title}</h1>
                <h2 className="text-xl text-blue-700 font-bold self-start">${product.price}</h2>
            </div>
            <div id="buttons" className="flex flex-wrap sm:flex-nowrap gap-[10px] sm:gap-[20px] self-start mt-auto w-full">
                <button className="flex-1 min-w-[120px] py-[8px] rounded-lg font-medium bg-gradient-to-br from-gray-800 to-gray-600 p-[5px] text-white transition-all duration-100 hover:from-gray-700 hover:to-gray-500 active:scale-95">View Details</button>
                <button className="flex-1 min-w-[120px] py-[8px] rounded-lg bg-gradient-to-br from-violet-600 to-violet-500 transition-all duration-110 hover:to-violet-400 hover:from-violet-500 active:scale-95 text-white font-medium">Add to Cart</button>
            </div>
         </div>
    )
}