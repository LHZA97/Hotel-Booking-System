import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Container, Col, Row} from 'react-bootstrap'
import RoomCard from './RoomCard';

const RoomList = () => {
    
    
   const [rooms, setRooms] =useState([])

    useEffect(() => {
        const getRoomData = async () => {
            const { data } = await axios.get('/rooms')
            console.log(data);
            setRooms(data)
        }
        getRoomData()
    }, [])
    

    return (
        <div className="container mt-5">
           
            <Container className="justify-content-center p-2">
                <h1 className='text-center'>Rooms</h1>
                <Row>
                    {
                        rooms.map(rooms =>{
                            return <Col md={6} lg={3} sm={12} key={rooms.id}>
                                <RoomCard rooms={rooms}/>
                            </Col>
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default RoomList
