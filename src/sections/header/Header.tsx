import "./Header.css"

const Header = () => {
    return (
        <>
            <header className="main__header">
                {/* <div className="main__header__curve__container">
                    <img src="./curve.png" alt="curve"/>
                </div> */}
                <div className="container main__header__container">

                    <div className="main__header__left">

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
                    <div className="main__header__right">
                        {/* <div className="main__header__curve"> */}
                        <div className="main__header__image">
                            <img src="https://images.unsplash.com/photo-1512850183-6d7990f42385?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="header-image" />
                            {/* </div> */}
                        </div>
                    </div>
                </div>

            </header>
        </>
    )
}

export default Header