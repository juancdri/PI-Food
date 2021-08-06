import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderAz, orderZa, cleanRecipes, orderBetter, orderWorst, dietsFilter } from '../../Actions'

function Ordered() {
    const dispatch = useDispatch();
    const allRecipes = useSelector(state => state.allRecipes);
    const recipesFilteredByDiet = useSelector(state => state.recipesFilteredByDiet);
    const filterName = useSelector(state => state.filterName);

    function handleChange(e) {
        if (filterName === 'all') {
            if (e.target.value === 'AZ') {
                dispatch(cleanRecipes())
                dispatch(orderAz(allRecipes));
            }
            else if (e.target.value === 'ZA') {
                dispatch(cleanRecipes())
                dispatch(orderZa(allRecipes));
            }
            else if (e.target.value === 'BETTER') {
                dispatch(cleanRecipes())
                dispatch(orderBetter(allRecipes));
            }
            else if (e.target.value === 'WORST') {
                dispatch(cleanRecipes())
                dispatch(orderWorst(allRecipes));
            }
            else { dispatch(dietsFilter(filterName)) }
        } else {
            if (e.target.value === 'AZ') {
                dispatch(cleanRecipes())
                dispatch(orderAz(recipesFilteredByDiet));
            }
            else if (e.target.value === 'ZA') {
                dispatch(cleanRecipes())
                dispatch(orderZa(recipesFilteredByDiet));
            }
            else if (e.target.value === 'BETTER') {
                dispatch(cleanRecipes())
                dispatch(orderBetter(recipesFilteredByDiet));
            }
            else if (e.target.value === 'WORST') {
                dispatch(cleanRecipes())
                dispatch(orderWorst(recipesFilteredByDiet));
            }
            else { dispatch(dietsFilter(filterName)) }
        }
    }

    return (
        <select onChange={(e) => handleChange(e)}>
            <option value='ALL' >Order By</option>
            <option value='AZ' >A-Z</option>
            <option value='ZA' >Z-A</option>
            <option value='BETTER' >HIGH SCORE</option>
            <option value='WORST' >LOWER SCORE</option>
        </select>
    )
}
export default Ordered;