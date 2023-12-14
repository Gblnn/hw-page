

export default function EventBanner(props){
    return(
        <>
        <div className="event_banner" id={props.color}>
          <div className="banner_text">
            <h3 className="sub_heading ">HERIOT WATT</h3>
            <h1 className = "heading">
              {props.heading}
            </h1>
            <p className="light desc">{props.desc}</p>
            <br/>
            <button className = "white_btn">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </button>
          </div> 
        </div>
        </>
    )
}