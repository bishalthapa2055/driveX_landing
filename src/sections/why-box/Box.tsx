import React from 'react'
import data from './data'
import "./Box.css"
import Card from '../../components/Card'

const Box = () => {
    return (
        <>
            <div className="container box__container">
                <div className="box__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className='box__card'>
                                <span className='box__card__icon'>
                                    <img src={item.icon} alt='icon' style={{
                                        width: "69px",
                                        height:"69px"
                                    }} />
                                </span>
                                <h4>{item.title}</h4>
                                <h6>{item.desc}</h6>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Box