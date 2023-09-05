import "./Contact.css"
import {  Button } from "@mui/material"
const Contact = () => {
    return (
        <>
            <section className='main__contact'>
                <div className="container contact__container">
                    <div className="contact__container__title">
                        <h1>
                            Drive X. The
                            {" "}
                            <span>
                                easiest way
                            </span>
                            {" "}
                            to book and manage your driving lessons.
                        </h1>
                        <h4>
                            Get the free Drive X app on your phone
                        </h4>
                    </div>
                    <div className="contact__container__style">

                        <div className="contact__container__boxes">
                            <div className="contact__container__boxes__qr">
                                <img src="./qr.png" alt="qr-image" />
                            </div>
                            <div className="contact__container__boxes__contact">
                                <input type="text" className="input__type" placeholder="Enter Your Phone number"/>

                                <Button variant="contained">JOIN</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact