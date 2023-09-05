import "./Footer.css"

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container footer__container">
                    <div className="footer__container__details">

                        <article>
                            <h4>Learners</h4>
                            <a href="/">

                                <h5>
                                    Drive X for Learners
                                </h5>
                            </a>
                            <a href="/">

                                <h5>FAQs for Learners</h5>
                            </a>
                            <a href="/">

                                <h5>Terms of use for Learners</h5>
                            </a>
                        </article>


                        <article>
                            <h4>Instructors</h4>
                            <a href="/">

                                <h5>
                                    Drive X for Instructors
                                </h5>
                            </a>
                            <a href="/">

                                <h5>FAQs for Instructors</h5>
                            </a>
                            <a href="/">

                                <h5>Terms of use for Instructors</h5>
                            </a>
                        </article>

                        <article>
                            <h4>Resources</h4>
                            <a href="#">

                                <h5>Privacy Policy
                                </h5>
                            </a>
                        </article>
                        <article>
                            <h4>Company</h4>
                            <a href="/">

                                <h5>Contact Us
                                </h5>
                            </a>
                        </article>
                    </div>
                    <div className="footer__container__end__details">

                        <div className="footer__container__logo">
                            <a href="/">

                                <img src="./logo_white.png" alt="logo" />
                            </a>
                            <h2>Drive X</h2>
                        </div>
                        <div className="footer__container__copyright">
                            <h6>© 2021 Drive X. All rights reserved</h6>
                        </div>
                    </div>
                </div>
            </footer >
        </>
    )
}

export default Footer