import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className='cards_container'>
                <div className="cards_wrapper">
                    <ul className='cards__items'>
                        <CardItem 
                        src='image/img-3.jpg'
                        text='Jakis sobie text'
                        label='adventure'
                        path='/services'/>
                        <CardItem 
                        src='image/img-3.jpg'
                        text='happy'
                        label='happy'
                        path='/services'/>
                    </ul>
                    <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-3.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-3.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
