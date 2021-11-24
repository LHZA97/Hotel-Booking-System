import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './styles/HeroSection.css'
import { Button } from './Button';



const RoomDetail = () => {
    const {id} = useParams();

    const [type, setType] = useState('');
    const [sizes, setSizes] = useState(0);
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [capacity, setCapacity] = useState(0);
    const [image, setImage] = useState('');
    



    useEffect(() => {
        try {
            const getSingleRoomData =  async() => {
                const { data } = await axios.get(`/${id}`);
                console.log(data);
                setType(data.type);
                setImage(data.image);
                setPrice(data.price);
                setSizes(data.size);
                setDescription(data.description);
                setCapacity(data.capacity);
            }
            getSingleRoomData() 
            console.log({image})  
        } catch (error) {
            console.log(error)
        }
        
    })

    
    return (
        <>
        
            <div className='hero-containerleft' style={{ backgroundImage: `src:(require(http://localhost:5000/${image}))`, backgroundSize: 'auto' }}>
            <h2>{type.toUpperCase()}</h2>
            <h2>PRICE PER NIGHT: RM{price}</h2>
            <h2>ROOM SIZES: {sizes}</h2>
            <p>{description.toUpperCase()}</p>
            <p>ROOM AVAILABILITY: {capacity}</p>
            <div className='hero-btns' >
           
                <Button
                className='btns'   
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                link='/rooms'
                >
                <i className='fas fa-arrow-circle-left'/>
                RETURN TO LIST
                </Button>
               
                <Button
                className='btns'   
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                link='/dashboards'
                >
                BOOK NOW
                <i className='far fa-play-circle' />
                </Button>
            </div>
            </div>
          
        </>
        
        
    )
}

export default RoomDetail
