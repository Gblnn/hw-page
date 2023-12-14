import '../styles/style.css'
import '../styles/utils.css'

export default function LocationBar(){
    return(
        <>
        <div class="location_header">
            <nav>
                <button class=" location_active location_button ">DUBAI</button>
                <button class="location_button">UK</button>
                <button class="location_button">MALAYSIA</button>
                <button class="location_button">ONLINE</button>
            </nav>
        </div>
        </>
    )
}