import React, {useState, useEffect} from 'react'
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router';

const RoomDetail = () => {
    
    const {id} = useParams();

    const [type, setType] = useState('');
    const [sizes, setSizes] = useState(0);
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [capacity, setCapacity] = useState(0);



    useEffect(() => {
        const getSingleRoomData = async () => {
            const { data } = await axios.get(`/roomdetail/${id}`);
            console.log(data);

            setType(data.type);
            setPrice(data.price);
            setSizes(data.size);
            setDescription(data.description);
            setCapacity(data.capacity);
        }
        getSingleRoomData()
    }, [id])

    return (
        <>
           <Card className="text-center">
                <Card.Header>Room Details</Card.Header>
                <Card.Body>
                    <Card.Title>{type}</Card.Title>
                    <Card.Text>
                     Price: 
                     {price}
                    </Card.Text>
                    <Card.Text>
                     Room Sizes: 
                     {sizes}m²
                    </Card.Text>
                    <Card.Text>
                     Description: 
                     {description}
                    </Card.Text>
                    <Link to={'/roomlist'}>
                    <Button variant="secondary" size="lg">Back to room list</Button>{" "}
                    </Link>
                    <Link to={`/booking/${id}`}>
                    <Button variant="success" size="lg">Book Room</Button>
                    </Link>
                </Card.Body>
                <Card.Footer className="text-muted">{capacity}</Card.Footer>
            </Card> 
        </>
    )
}

export default RoomDetail
