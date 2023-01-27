import star from "../assets/star.png"

function Card(props) {
    const {item} = props

    let badgeText
    if (item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (item.location === "Online"){
        badgeText = "ONLINE"
    }
    return (
        <a className="card--a-tag" href="#">
            <div className="card">
                {badgeText && <div className="badge">{badgeText}</div>}
                <img src={`../public/images/${item.coverImg}`} alt={item.title} className="card--image"></img>
                <div className="card--info">
                    <img src={star} alt="Star icon" className="star-png"></img>
                    <p className="card--rating">{item.stats.rating}</p>
                    <p className="card--reviews gray">({item.stats.reviewCount})</p>
                    <p className="gray">*</p>
                    <p className="card--country gray">{item.location}</p>
                </div>
                <p className="card--title">{item.title}</p>
                <p className="card--price"> <strong>From ${item.price}</strong> /person</p>
            </div>
        </a>
    )
}

export default Card