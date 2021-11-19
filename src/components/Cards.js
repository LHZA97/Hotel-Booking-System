import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Featured Rooms!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/miniSuite.jpg'
              text='Mini Suite'
              path='/rooms'
            />
            <CardItem
              src='images/studio.jpg'
              text='Studio Room'
              path='/rooms'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/single.jpg'
              text='Single Room'
              path='/rooms'
            />
            <CardItem
              src='images/singlej.jpg'
              text='Single Junior'
              path='/rooms'
            />
            <CardItem
              src='images/double.jpg'
              text= 'Double Room'
              path='/rooms'
            />
            <CardItem
              src='images/triple.jpg'
              text= 'Triple Room'
              path='/rooms'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
