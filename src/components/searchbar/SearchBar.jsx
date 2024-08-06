import './SearchBar.scss'
// import { useState } from 'react'

function SearchBar(){
    // const [query,setQuery] = useState({
    //     location:''
    // })

    // const switchType = (val) => {
    //     setQuery(prev => ({...prev, type:val}))

    // };
    return (
        <div className='searchBar'>
            <div className="type">
                <form>
                    <input type='text' name='location' placeholder='Search for places, events or activities...' />
                    <button>
                        <img src="/search.png" alt="" />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SearchBar