import { useState } from "react";
import useFilteredData from "../utils/useFilteredData";
import useOnline from "../utils/useOnline";



const Navbar = ()=>{

    const [search, setSearch] = useState('search');
    const [searchedData, setSearchedData] = useState(null);
    const isOnline = useOnline();


    return (
        <>
        <div className="py-3 px-6 shadow-sm">
            <div className="grid grid-cols-3 gap-5">
                <div>
                    <h1 className="text-4xl font-extrabold">News</h1>
                </div>
                <div>
                    <input type="text" className="mt-2 px-10 py-1 rounded-xl shadow-md ml-5" name="search" value={search} onChange={
                         (e)=>{
                            setSearch(e.target.value)
                        }
                    }/>
                    <button className="rounded-xl px-6 py-1 ml-5 text-white bg-black border-2 border-black font-semibold hover:shadow-md shadow-indigo-500" onClick={
                        ()=>{
                            setSearchedData(useFilteredData(search));
                        }
                    }>Search</button>
                    
                </div>
                <div className="justify-self-center">
                    <button className="rounded-xl px-5 py-1 ml-5 border-2 border-black font-semibold hover:shadow-md shadow-indigo-500">Register</button>
                    <button className="rounded-xl px-6 py-1 ml-5 text-white bg-black border-2 border-black font-semibold hover:shadow-md shadow-indigo-500">Login</button>
                    <div className="inline ml-3">
                        {
                        (!isOnline) ? '🔴' : '🟢'
                        }
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )
}


export default Navbar;