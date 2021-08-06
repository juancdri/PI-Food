import React from 'react';
import { StyledDiv } from './style';
import Buscador from '../Buscador/Buscador';
import DietsFilter from '../DietsFilter/DietsFilter';
import Ordered from '../Ordered/Ordered';
import { Link } from 'react-router-dom';
function Nav() {

    return (
        <StyledDiv>
            <Buscador />
            <div>
                <Ordered />
                <DietsFilter />
                <Link to ='/CreateRecipe'>
                <button>Create New Recipe</button>
                </Link>
            </div>
        </StyledDiv>
    );
};

export default Nav;