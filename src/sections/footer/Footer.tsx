import "./Footer.css"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container footer__container">
                    <div className="footer__container__details">

                        <article>
                            <h4>Learners </h4>
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
                    <div className="footer__container__accordion" >
                        <Accordion className="custom-accordion" style={{ backgroundColor: "transparent" , border : "2px solid  #F1F7F6" ,  borderRadius:"15px" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <h4>Learners</h4>
                            </AccordionSummary>
                            <AccordionDetails>
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
                            </AccordionDetails>
                        </Accordion>
                        <Accordion style={{ backgroundColor: "transparent" , border : "2px solid  #F1F7F6",  borderRadius:"15px" }} sx={{
                            mt: "10px"
                        }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <h4>Instructor</h4>
                            </AccordionSummary>
                            <AccordionDetails>
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
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{
                            mt: "10px"
                        }} style={{ backgroundColor: "transparent" ,border : "2px solid  #F1F7F6",  borderRadius:"15px"}} >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <h4>Resources</h4>
                            </AccordionSummary>
                            <AccordionDetails>
                                <a href="#">

                                    <h5>Privacy Policy
                                    </h5>
                                </a>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion style={{ backgroundColor: "transparent" , border : "2px solid  #F1F7F6" , borderRadius:"15px" }} sx={{
                            mt: "10px"
                        }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <h4>Company</h4>
                            </AccordionSummary>
                            <AccordionDetails>
                                <a href="/">

                                    <h5>Contact Us
                                    </h5>
                                </a>
                            </AccordionDetails>
                        </Accordion>

                    </div>
                </div>
            </footer >
        </>
    )
}

export default Footer