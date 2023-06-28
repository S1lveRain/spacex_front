import React, { FC } from 'react';
import './InfoMessage.css'
interface InfoMessageI {
    head: string;
    center: string;
    bottom: string;
    direction?: "leftTop" | "leftBottom" | "rightTop" | "rightBottom";
}

export const InfoMessage: FC<InfoMessageI> = ({head, center, bottom, direction}) => {
    return (
        <div className={'infoMessage-wrapper'}>
            <div className={direction ? `infoMessage-wrapper-${direction}` : ''}>
                <div>
                    <p>{head}</p>
                </div>
                <div>
                    <h1>{center}</h1>
                </div>
                <div>
                    <p>{bottom}</p>
                </div>
            </div>
        </div>
    );
};