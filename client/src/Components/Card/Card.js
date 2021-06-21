import React from 'react';
import { Link } from 'react-router-dom';
import { StyledDiv } from './style';

const Card = ({id, title, image, diets, dishTypes }) => {
    
    return (
        <StyledDiv>
            <Link to={`/details/${id}`} >
            <h2 className="card-title">{title}</h2>
            </Link>
            <img src={image} width="80" height="80" alt="" />
            <h4>{diets}</h4>
            <h5>{dishTypes}</h5>

        </StyledDiv>
    )
}
export default Card;