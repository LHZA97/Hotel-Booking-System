import React, {useState, useEffect} from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useHistory } from 'react-router-dom';
import useForm from '../utils/useForm';
import { Button } from '../Button';
import '../styles/Navbar.css';
import '../styles/BookingCard.css';

const Dashboards = () => {
    const {setLogin, login, Logout} = useForm()
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [guestname, setGuestname] = useState('');
    const [checkin, setCheckin] = useState('');
    const [checkout, setCheckout] = useState('');
    const [roomtype, setRoomtype] = useState('');
    const history = useHistory();
    
    
    useEffect(() => {
        refreshToken();
        showUser();
        //singleRoomBook();
    }, []);


    // const singleRoomBook = async () => {
    //     try {
    //         const getSingleRoomData =  async() => {
    //             const { data } = await axios.get(`/${id}`);
    //             console.log(data);
    //             setType(data.type);
    //         }
    //         getSingleRoomData() 
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }



    const refreshToken = async () => {
        try {
            const response = await axios.get('/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
            setLogin(true);
        } catch (error) {
            if (error.response) {
                history.push("/login");
                console.log(error.response.data.error);
                
            }
        }
    }

    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
            setLogin(true);
            console.log({login})
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    const showUser = async() =>{
        const response = await axiosJWT.get('http://localhost:5000/guests',{
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        setLogin(true);
        console.log(response.data);
    }

    const sendBooking = async(e) =>{
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:5000/createbooking', {
                guestname,
                roomtype,
                checkin,
                checkout
            })
            console.log(response)
            alert("Your reservation will be sent to our database! Please wait for the confirmation")
                }
            catch (error) {
                if (error.response) {
                   console.log(error.response);
                }
            }
        }

    const [{items}, setItems] = useState({ items: [] });
    const addItem = () => {
        items.push(
            <div key={items.length}>
            <div className="container">        
            <section className="component">
            
                <div className="card">
                    
                    <h2>BOOKING FORM</h2>
                    <form>
                    <h3 className="line">GUEST NAME: <input onChange={(e)=>setGuestname(e.target.value)} ref= {name.toUpperCase()}/></h3>
                    <h3 className="line">ROOMS TYPE: </h3><select onChange={(e)=>setRoomtype(e.target.value)}>
                                                                <option value="SingleRoom">SingleRoom</option>
                                                                <option value="DoubleRoom">DoubleRoom</option>
                                                                <option value="TripleRoom">TripleRoom</option>
                                                                <option value="StudioRoom">StudioRoom</option>
                                                                <option value="MiniSuiteRoom">Mini Suite Room</option>
                                                                <option value="SuiteRoom">SuiteRoom</option>
                                                            </select>
                    <div className="line">
                        <h3 className="line" >CHECKIN:</h3>
                        <h3 className="line center" >CHECKOUT:</h3>
                    </div>
                    <div className="line">
                        <input className="litle" type="date" onChange={(e)=>setCheckin(e.target.value)}/>
                        <input className="tall" type="date" onChange={(e)=>setCheckout(e.target.value)}/>
                    </div>
                    <button type="submit" className="valid-button" onClick={sendBooking}>BOOKING ROOM</button>
                    </form>
                </div>
                </section>
            </div>
            </div>);
        setItems({ items: [...items] });
    };

    

    return (
    <>

        <nav className='navbar'>
        <div className='navbar-container'>
            <Button
                className='btns'   
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                onClick={Logout}
                link='/'
                >
                Logout
                </Button></div></nav>
        <div><h1 style={{paddingTop:100}}> WELCOME BACK: {name.toUpperCase()} </h1> 
        <div className="container">        
            <section className="component">
            
                <div className="card">
                    
                    <h2>BOOKING FORM</h2>
                    <form>
                    <h3 className="line" onChange={(e)=>setGuestname(e.target.value)} >GUEST NAME: {name.toUpperCase()}</h3>
                    <h3 className="line" onChange={(e)=>setRoomtype(e.target.value)}>ROOMS TYPE: </h3><select className="rooms" type="rooms">
                                                                                                        <option value="SingleRoom">SingleRoom</option>
                                                                                                        <option value="DoubleRoom">DoubleRoom</option>
                                                                                                        <option value="TripleRoom">TripleRoom</option>
                                                                                                        <option value="StudioRoom">StudioRoom</option>
                                                                                                        <option value="MiniSuiteRoom">Mini Suite Room</option>
                                                                                                        <option value="SuiteRoom">SuiteRoom</option>
                                                                                                    </select>
                    <div className="line">
                        <h3 className="line" >CHECKIN:</h3>
                        <h3 className="line center" >CHECKOUT:</h3>
                    </div>
                    <div className="line">
                        <input className="litle" type="date" onChange={(e)=>setCheckin(e.target.value)}/>
                        <input className="tall" type="date" onChange={(e)=>setCheckout(e.target.value)}/>
                    </div>
                    <button type="submit" className="valid-button" onClick={sendBooking}>BOOKING ROOM</button>
                    </form>
                </div>
                </section>
            </div>
            </div>
        <button className="valid-button center" onClick={addItem}> ADD BOOKING ROOM </button>
        <div>
        {items}
        </div>
        
        
    </>
       
    )
    
}

export default (Dashboards);
