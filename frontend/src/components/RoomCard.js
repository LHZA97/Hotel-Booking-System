import React from 'react'
import {Card} from 'react-bootstrap'

const RoomCard = ({rooms}) => {
    return (
        <>
           <Card className='shadow-lg m-2 p-2 rounded center' style={{ width: '18rem' }}>
               <Card.Img className='img-rounded'src={rooms.image} ></Card.Img>
                <Card.Body>
                    <Card.Title>{rooms.type}</Card.Title>
                    <Card.Title>Price Per Night:RM{rooms.price}</Card.Title>
                    
                    
                </Card.Body>
            </Card> 
        </>
    )
}

export default RoomCard
