import React, { useState } from 'react'

function Navbar() {
    const s = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>

    const [input , setInput] = useState("");

    function searchHandler(e) {
        e.preventDefault(); 
       console.log(input)
    }

    function changeHandler(event){
        setInput(event.target.value);
        console.log(input);
    }


    return (
        <div className="navbar bg-orange-500 w-full ">
            <div className="flex-1">
                <a className="btn btn-ghost text-3xl text-black">PokedeX</a>
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
        </div>


    )
}

export default Navbar