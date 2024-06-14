import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../redux/slices/SearchSlice';

function Navbar() {
    const s = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>

    const [input , setInput] = useState("");
const navigate = useNavigate();
const dispatch = useDispatch();
    function searchHandler(e) {
        e.preventDefault(); // Prevent the default form submission behavior

            dispatch(setSearchTerm(input.toLowerCase()));
            console.log(input);
            setInput('');
            navigate('/search');
            
    }

    function changeHandler(event){
        setInput(event.target.value);
        console.log(input);
    }


    return (
        <nav className="navbar bg-orange-500 w-full ">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-3xl text-black">PokedeX</Link>
            </div>
            <div className="flex-none">
                <form className="input input-bordered flex items-center gap-2" onSubmit={searchHandler}>
                    <input type="text"
                        className="grow"
                        placeholder="Search"
                        value={input}
                        onChange={changeHandler} />
                    <button type='submit'>{s}</button>
                </form>
            </div>
        </nav>


    )
}

export default Navbar