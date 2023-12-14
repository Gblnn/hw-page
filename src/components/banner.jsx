 export default function Banner(props){
    return(
        <>
        <div class="banner_content">
            <img class="container banner_img" src={props.img}/>
            <div class="banner">
            <div class="banner_text">
                <h3 class="sub_heading ">{props.location}</h3>
                <h1 class = "heading">
                {props.heading}
                </h1>
                <p class="desc">{props.desc}</p>
                <br/>
                <button class = "white_btn">
                Browse Courses
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
                </button>
            </div>
            </div>
        </div>
        </>
    )
 }