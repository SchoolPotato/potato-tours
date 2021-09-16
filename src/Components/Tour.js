const Tour = ({name, info, image, price}) => {
    return (
        <div className="tour" style={{backgroundImage:image}}>
            <img className="tour" src={image} alt="whoops"/>
            <h5>${price}</h5>
            <h3>{name}</h3>
            <p>{info}</p>
            <a onClick={()=>{console.log("This doesn't work yet.")}}>Read More</a>
        </div>
    )
}

export default Tour
