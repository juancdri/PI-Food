import React, {useEffect, useState} from 'react';
import { getRecipes, getRecipeTitle } from '../../Actions';
import { StyledDiv } from './style';
import {useDispatch} from 'react-redux';

function Buscador() {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');

    useEffect(() => {
        dispatch(getRecipeTitle(input));
    }, [dispatch, input]);
//Deshabilito el onchange porque me le acaban las busquedas de datos diarias a la api externa
    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setInput(e.target.value);
        if (input) {
            dispatch(getRecipeTitle(input));
        }else{dispatch(getRecipes())}
    };

    return (
        <StyledDiv>

            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    placeholder="Busca una Receta..."
                    autoComplete="off"
                    value={input} //el hook declarado al principio
                    name="title"
                    onChange={(e) => handleChange(e)} //volver a marcar 
                />
            </form>
        </StyledDiv>
    );
};

export default Buscador;