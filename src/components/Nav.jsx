import { Link } from "react-router-dom"

export default function Nav(){
    return (
        <nav className="stick top-0 z-50 flex justify-around items-center font-inter bg-white shadow-[0_10px_15px_-3px_rgba(96,165,250,0.5)] p-[10px]">
            <Link to="/" className="text-[25px] font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">ShopHub</Link>

            <div id="middle" className="flex gap-[25px]">
                <Link to="/" className="hover:text-blue-800 font-medium">Home</Link>
                <Link to="/checkout" className="hover:text-blue-700 font-medium">Cart ({3})</Link>
                <Link to="/about" className="hover:text-blue-800 font-medium">About</Link>
                <Link to="/contact" className="hover:text-blue-700 font-medium">Contact</Link>
            </div>

            <div id="right" className="flex gap-[10px]">
                <Link to="/auth" className="p-[5px] bg-gradient-to-br from-gray-700 to-gray-600 w-[100px] text-center text-white rounded-lg font-semibold transition-all duration-110 hover:scale-95 active:scale-100" id="btn-primary">Login</Link>
                <Link to="/auth" className="p-[5px] bg-gradient-to-br from-violet-400 via-purple-400 to-blue-400 w-[100px] text-center text-white rounded-lg font-semibold transition-all duration-110 hover:scale-95 active:scale-100" id="btn-secondary">Sign Up</Link>
            </div>
        </nav>
    )
}