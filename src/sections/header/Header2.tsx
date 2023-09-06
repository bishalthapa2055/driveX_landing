import "./Header2.css"
const Header2 = () => {
    return (
        <>
            <header className="main--header">
                <div className="main--header--image--container">
                    <img src="./background__image.png" alt="image" className="large--image" />
                    <img src="./small__image.png" alt="image" className="small--image" />
                </div>
                <div className="container main--header--container">
                    <div className="main--header--container--style">

                        <div className="main--header--left">
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
                            <div className="image--container">
                                <a href="/">

                                    <img src="./app-store.png" alt="app-store" />
                                </a>
                                <a href="/">
                                    <img src="./play-store.png" alt="play-store" />
                                </a>
                            </div>
                        </div>
                        <div className="main--header--right">
                            <div className="main--header--image">
                                <img src="./header__image.png" alt="header-image" />
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>

            </header>
        </>
    );
}

export default Header2