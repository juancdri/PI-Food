import React,{useState} from 'react';
import { StyledDiv } from './style';
import Buscador from '../Buscador/Buscador';
import DietsFilter from '../DietsFilter/DietsFilter';
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
                <select> Sellect one
                    <option >
                        Filter
                    </option>
                    <option>A-Z</option>
                    <option>Z-A</option>
                    <option>Mejores Puntuaciones</option>
                    <option>Peores Puntuaciones</option>
                </select>
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