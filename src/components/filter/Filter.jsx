import './Filter.scss'

function Filter(){
    return(
        <div className="filter">
            <h1>Search results for <b>India</b></h1>
            <div className="top">
                <div className="item">
                    <label htmlFor='city'>Location</label>
                    <input  type='text' id='city' name='city' placeholder='City Location'/>
                </div>
            </div>
            <div className="bottom">
            <div className="item">
                    <label htmlFor='type'>Type</label>
                    <select name='type' id='type'>
                        <option value="activity">Activity</option>
                        <option value="sightseeing">Sight-seeing</option>
                        <option value="food">Food</option>
                    </select>
                </div>

                <button>
                    <img src='/search.png' alt=''/>
                </button>
            </div>
        </div>
    )
}

export default Filter