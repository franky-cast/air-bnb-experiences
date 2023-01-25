import gallery from "../assets/photo-grid.png"

function Hero() {
    return(
        <div className="hero-container">
            <img src={gallery} alt="gallery" className="gallery"></img>
            <div className="text">
                <h1 className="title">Online Experiences</h1>
                <p className="paragraph">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
            </div>
            
        </div>
    )
}

export default Hero