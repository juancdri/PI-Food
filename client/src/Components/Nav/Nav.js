import React,{useState} from 'react';
import { StyledDiv } from './style';
import Buscador from '../Buscador/Buscador';
import { Link } from 'react-router-dom';
function Nav({ }) {
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
                <select >
                    <option value="all">Diets</option>
                    <option value="glutenFree">Gluten Free</option>
                    <option value="ketogenic">Ketogenic</option>
                    <option value="ovoVegatarian">Ovo-Vegatarian</option>
                    <option value="lactoVegatarian">Lacto-Vegatarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="pescetarian">Pescetarian</option>
                    <option value="paleo">Paleo</option>
                    <option value="primal">Primal</option>
                </select>
                <Link to ='/CreateRecipe'>
                <button>Create New Recipe</button>
                </Link>

            </div>
            {/* falta filtrar por tipo de dieta culiado */}

        </StyledDiv>
    );
};

export default Nav;