import { Button } from "@mui/material";
import "./Awsome.css"
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';

const Awsome = () => {
    return (
        <>
            <div className="container awsome__container">
                <div className="awsome__container__title">
                    <div className="awsome__title__container">

                        <h2>
                            Awesome & Unique App Functionality
                        </h2>
                    </div>
                    <div className="awsome__container__paragraph">

                        <h5>
                            Learners will benefit from our data oriented learning process with diving instructors to get the most of the flexibilty and cost-effectivity.
                        </h5>
                    </div>
                </div>
                <div className="awsome__container__blocks">
                    <div className="awsome__container__left">
                        <img src="./all__contents__image.png" alt="image" />
                    </div>
                    <div className="awsome__container__right">
                        <div className="awsome__container__right__title">
                            <h2>
                                <span>
                                    Perfect Match {""}
                                </span>
                                Driving Instructors
                            </h2>
                            <h4>
                                Find ‘perfect match’ driving instructors by different criteria, depending on what’s important to you. Browse, search and sort: by location; according to what times they have free slots; by price; car brand; transmission type; and more. Getting behind the steering wheel much easier.
                            </h4>
                        </div>
                        <div className="awsome__container__list">
                            <div className="awsome__container__mobile">
                                <div className="awsome__container__mobile__icon">
                                    <PhoneIphoneOutlinedIcon sx={{
                                        width: "22px",
                                        height: "22px"
                                    }} />
                                </div>
                                <div className="awsome__container__mobile__text">

                                    <h4>
                                        Smart communication system helps you get response quick and convenient.
                                    </h4>
                                </div>
                            </div>
                            <div className="awsome__container__lock">
                                <div className="awsome__container__lock__icon">
                                    <img src="./lock.png" alt="icon" style={{
                                        width: "22px",
                                        height: "22px"
                                    }} />
                                </div>
                                <div className="awsome__container__lock__text">
                                    <h4>
                                        Access all the instructor's free slots around you, make different bookings by your needs.
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="awsome__container__button">
                        <Button variant="contained">Download Now</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Awsome