import './MyList.scss'
import {listdata} from "../../lib/dummydata.js"
import Card from "../card/Card.jsx"

function MyList(){
    return(
        <div className='mylist'>
            {listdata.map(item=>(
                <Card key={item.id} item={item} />
            ))}
        </div>
    )
}

export default MyList;