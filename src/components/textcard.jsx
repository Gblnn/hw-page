

export default function TextCard(props){
    return(
        <>
        <div className="feature">
            <h1 className="subtitle">{props.heading}</h1>
            <p className="light_desc feature_text">
                {props.description}
            </p>
        </div>
        </>
    )
}