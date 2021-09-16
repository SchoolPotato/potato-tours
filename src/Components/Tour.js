import {useState} from 'react';

const Tour = ({name, info, image, price}) => {
    const [readMore, setReadMore] = useState(false);
    let readText = (readMore) ? "-Collapse" : "+Read More";
    let collapsed = (readMore) ? info.trim() : info.substring(0, 180).trim() + "...";
    return (
        <div className="tour" style={{backgroundImage:image}}>
            <img className="tour" src={image} alt="whoops"/>
            <h5>${price}</h5>
            <h3>{name}</h3>
            <p>{collapsed} <a href={"#" + undefined} onClick={()=>{setReadMore(!readMore); console.log(readMore)}}>{readText}</a></p>
            <button id="delete" onClick={()=>{console.log("Doesn't work yet")}}>Not Interested</button>
        </div>
    )
}

export default Tour
