import {useState} from 'react';

const Tour = ({id, name, info, image, price, removeTour}) => {
    const [readMore, setReadMore] = useState(false);
    let readText = (readMore) ? "-Collapse" : "+Read More";
    let collapsed = (readMore) ? info.trim() : info.substring(0, 180).trim() + "...";
    return (
        <div className="tour" style={{backgroundImage:image}}>
            <img className="tour" src={image} alt="whoops"/>
            <h5>${price}</h5>
            <h3>{name}</h3>
            <p>{collapsed} <a href={"#" + undefined} onClick={()=>{setReadMore(!readMore)}}>{readText}</a></p>
            <button id="delete" onClick={()=>{removeTour(id)}}>Not Interested</button>
        </div>
    )
}

export default Tour
