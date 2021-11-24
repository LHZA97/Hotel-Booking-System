import React, {useState, useEffect} from 'react';
import './styles/Cards.css';
import CardItem from './CardItem';
import axios from 'axios';
import './styles/App.css';

export default function RoomsList() {
  
  
  const [rooms, setRooms] = useState([])

    useEffect(() => {
        const getRoomData = async () => {
            const { data } = await axios.get('/rooms')
            console.log(data);
            setRooms(data)
        }
        getRoomData()
    }, [])
    

    return (
      <div className='cards'>
        <h1>Checkout all rooms and book now!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          {rooms.length > 0 && (
            Array.from({ length: Math.ceil(rooms.length / 3) }, (_, i) => (            
                  <div className="row" key={`row${i}`}>
                  {
                    rooms.slice(i * 3, (i + 1) * 3)
                      .map((rooms) => (
                        <div className="cards__items" key={rooms.id}>
                          <CardItem
                              src={rooms.image}
                              text={rooms.type}
                              path={`/roomdetail/${rooms.id}`}
                            />
                        </div>
                     ))
                  } 
                 
              </div>
            ))
          )}
        </div>
      </div>
      </div> 
        
    )

}