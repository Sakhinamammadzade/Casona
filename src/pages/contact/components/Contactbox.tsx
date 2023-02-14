import React from 'react';
import phone from './logo.png';
import email from './email.png';
import location from './location.png';

interface IElement {
    photo: string;
    title: string;
    description: string;
}
export const Contactboxes = (props: IElement) => {
    const { photo, title, description } = props;
    return (
        <div className='contactbox'>
            <img src={photo} alt="phone" />
            <p className='phone'>{title}</p>
            <p className='call'>{description}</p>
        </div>
    );
};

