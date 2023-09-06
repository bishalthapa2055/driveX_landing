import "./Header3.css"

const Header3 = () => {
    return (
        <>
            <header className="header">
                <div className="main--header--container--image">
                    <img src='./background__image.png' alt='image' className="large_image" />
                    <img src='./small__image.png' alt='image' className="small_image" />
                </div>
                <div className="container two__block__container">
                    <div className="two__block__left">
                        <h1>
                            Find your ideal driving instructor.
                            <br />
                            <span>
                                In minutes.
                            </span>
                        </h1>
                        <h4>
                            Compare independent driving instructors in your area. Find your ideal driving instructor. In minutes.
                            Book, reschedule and cancel lessons on the go.

                        </h4>
                        <div className="image__container">
                            <a href="/">

                                <img src="./app-store.png" alt="app-store" />
                            </a>
                            <a href="/">
                                <img src="./play-store.png" alt="play-store" />
                            </a>
                        </div>
                    </div>
                    <div className="two__block__right">
                        <div className="two__block__right__image">
                            <img src="./header__image.png" alt="header-image" />
                            
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header3