import React,{useState} from 'react';
import { StyledDiv } from './style';
import Buscador from '../Buscador/Buscador';
import DietsFilter from '../DietsFilter/DietsFilter';
import Ordered from '../Ordered/Ordered';
import { Link } from 'react-router-dom';
function Nav() {
    // const handleChange= (e)=>{
    //     // [input, setInput] = useState('')
    //     // setInput(e.target.value);
    // }

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
            {/* falta filtrar por tipo de dieta culiado */}

        </StyledDiv>
    );
};

export default Nav;