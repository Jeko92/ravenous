import React from 'react';

export default function Business(props){
    return (
        <div className='card'>
            <div className="card__image">
                <img src={props.business.imageSrc} alt=''/>
            </div>
            <h2>{this.props.business.name}</h2>
            <div className="card__details">
                <div className="card__address">
                    <p>{props.business.address}</p>
                    <p>{props.business.city}</p>
                    <p>{props.business.state}</p>
                    <p>{props.business.zipCode}</p>
                </div>
            </div>
            <div className="card__reviews">
                <h3>{props.business.category}</h3>
                <h3 className="card__rating">{props.business.rating}  stars</h3>
                <p>{props.business.reviewCount} reviews</p>
            </div>
        </div>

    )}