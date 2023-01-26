import star from "../assets/star.png"

function Card(props) {
    const {cardImage, rating, reviews, country, cardTitle, price} = props
    return (
        <a className="card--a-tag" href="#">
            <div className="card border">
                <img src={`.../public/images/${cardImage}`} alt={cardTitle} className="card--image"></img>
                <div className="card--info">
                    <img src={star} alt="Star icon" className="star-png"></img>
                    <p className="card--rating">{rating}</p>
                    <p className="card--reviews gray">({reviews})</p>
                    <p className="gray">*</p>
                    <p className="card--country gray">{country}</p>
                </div>
                <p className="card--title">{cardTitle}</p>
                <p className="card--price"> <strong>From ${price}</strong> /person</p>
            </div>
        </a>
        
    )
}

export default Card