import React, { useEffect, useState } from 'react';
// import { StyledDiv } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipeDiets, dietsFilter } from '../../Actions'

function DietsFilter() {
    const dispatch = useDispatch();
    const recipeDiets = useSelector(state => state.recipeDiets);

    const [dieta, setDieta] = useState('');
    
    
    useEffect(() => {
        dispatch(getRecipeDiets());
    }, []);
    
    function handleChange(e) {
        dispatch(dietsFilter(e.target.value))
    }

   
    

    return (
        <select name='diets' onChange={(e) => handleChange(e)}>
            <option value="all">Diets</option>
            {recipeDiets &&
                recipeDiets.map((t, i) => (
                    <option key={i} value={t.name} >
                        {t.name}
                    </option>
                ))}
        </select>

    )
}
export default DietsFilter;