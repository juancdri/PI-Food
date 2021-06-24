import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({id, title, image, diets, Types, dishTypes }) => {
    
    return (
        <div className='card'>
            <div className='card-select'>
                <Link to={`/details/${id}`} className='card-link' >
                <h2 className="card-title">{title}</h2>
                </Link>
                <div className='card-img'>
                    {image? <img src={image} className='image' width="80" height="80" alt=""/>: null}
                </div>
                <ul className='card-ul'>
                {diets?<div className='card-list'>
                    {diets && diets.map((el, i) =>(<li key={i} className='card-li' >{el}</li>))}
                    </div>:null}
                {Types?<div className='card-list'>
                    {Types && Types.map((el, i) =>(<li key={i} className='card-li' >{el.name}</li>))}
                    </div>:null}
                {/* {dishTypes? <h5>{dishTypes}</h5>: null} */}
                </ul>
            </div>
        </div>
    )
}
export default Card;