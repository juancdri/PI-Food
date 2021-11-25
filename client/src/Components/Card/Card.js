import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, title, image, diets, Types, dishTypes, score }) => {

    return (
        <div className='card'>
            <div className='card-img'>
                {image ? <img src={image} className='image' width="80" height="80" alt="" /> : null}
            </div>
            <div className='card-select'>
                <Link to={`/details/${id}`} className='card-link' >
                    <h2 className="card-title">{title}</h2>
                </Link>

                <ol className='card-ul'> Diets:
                    {diets ? <div className='card-list'>
                        {diets && diets.map((el, i) => (<li key={i} className='card-li' >{el}</li>))}
                    </div> : null}
                    {Types ? <div className='card-list'>
                        {Types && Types.map((el, i) => (<li key={i} className='card-li' >{el.name}</li>))}
                    </div> : null}
                    {/* {dishTypes? <h5>{dishTypes}</h5>: null} */}
                <div> Score: <meter value={score} max={100} min={0} ></meter>

                </div>
                </ol>
            </div>
        </div>
    )
}
export default Card;