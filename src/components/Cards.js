import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className='cards_container'>
                <div className="cards_wrapper">
                    <ul className="cards_items">
                        <CardItem 
                        src='image/img-9.jpg'
                        text='Jakis sobie text'
                        label='adventure'
                        path='/services'/>
                        <CardItem 
                        src='image/img-9.jpg'
                        text='Jakis sobie text'
                        label='adventure'
                        path='/services'/>
                        <CardItem 
                        src='image/img-9.jpg'
                        text='Jakis sobie text'
                        label='adventure'
                        path='/services'/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
