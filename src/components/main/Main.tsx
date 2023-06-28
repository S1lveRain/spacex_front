import React, {useEffect, useState } from 'react';
import {InfoMessage} from "../infoMessage/InfoMessage";
import './Main.css'
import mars from '../../assets/objects/mars.png'

export const Main = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://31.129.98.113:8000/api/blocks/');
            const jsonData = await response.json();
            setData(jsonData);
            console.log(jsonData)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className={'main-wrapper'}>
            <div className={'content-wrapper'}>
                <div className={'left-side'}>
                        <h1>Путешествие</h1>
                        <h3>на красную планету</h3>
                    <button>Начать путешествие</button>
                </div>
                <div className={'mars'}>
                    <img src={mars} />
                </div>
                <div className={'right-side'}>
                    <div className="grid-container">
                        {data && data.map((el: any) => {
                            return (
                                <div className="grid-item">
                                    <InfoMessage
                                        head={el.head}
                                        center={el.center}
                                        bottom={el.bottom}
                                        direction={'rightBottom'}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};