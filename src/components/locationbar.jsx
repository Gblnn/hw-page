import { Link } from 'react-router-dom'
import '../styles/style.css'
import '../styles/utils.css'

export default function LocationBar(props){
    return(
        <>
        <div className="location_header">
            <nav>
                <Link to = "/"><button id={props.dubai} className=" location_button ">DUBAI</button></Link>
                <Link to = "/home-uk"><button id={props.uk} className="location_button">UK</button></Link>
                <Link to = "/home-malaysia"><button id={props.malaysia} className="location_button">MALAYSIA</button></Link>
                <Link to ="/home-online"><button id={props.online} className="location_button">ONLINE</button></Link>
            </nav>
        </div>
        </>
    )
}