import React from 'react';
import { Link } from 'react-router-dom';
import { StyledDiv } from './style';

const Card = ({id, title, image, diets, Types, dishTypes }) => {
    
    return (
        <StyledDiv>
            <Link to={`/details/${id}`} >
            <h2 className="card-title">{title}</h2>
            </Link>
            {image? <img src={image} width="80" height="80" alt="" />: null}
            {diets?<h4>Diets:
                {diets && diets.map((el, i) =>(<li key={i} >{el}</li>))}
                </h4>:null}
            {Types?<h4>Diets:
                {Types && Types.map((el, i) =>(<li key={i} >{el.name}</li>))}
                </h4>:null}
            {/* {dishTypes? <h5>{dishTypes}</h5>: null} */}
        </StyledDiv>
    )
}
export default Card;