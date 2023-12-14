

export default function Desc(props){
    return(
        <>
        <div className="banner_pitch">
            <div className="banner_text">
              <h1 className = "heading">
                {props.heading}
              </h1>
              <p className="light desc">{props.description}</p>
              <br/>
            </div>
          </div>
        </>
    )
}