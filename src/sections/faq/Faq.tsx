import "./Faq.css"
import { Typography } from "@mui/material"
import data from "./data"
import Faqs from "./Faqs"
const Faq = () => {
  return (
    <>
    <section className="faq__section">
        <div className="container faq__container">
            <div className="faq__container__title">
                <div className="faq__container__header">
                        <img src="./ellipse.png" alt="image__ellipse" />
                        <h2>Getting Started</h2><img src="./ellipse.png" alt="image__ellipse" />
                </div>
                <div className="faq__container__answer">
                    <Typography>Your questions answered</Typography>
                </div>
            </div>
            <div className="faq__container__wrapper">
            {data.map(({ id , question, answer }) => {
              return <Faqs key={id} question={question} answer={answer} />;
            })}
            </div>
        </div>
    </section>
    </>
  )
}

export default Faq