import React, {useEffect} from 'react';
import { getRecipes } from '../../Actions';
import { StyledDiv } from './style';
import Card from '../Card/Card';
import {useDispatch, useSelector} from 'react-redux';


export const Cards = () => {
    const recipes=useSelector(state =>state.recipes)
    const dispatch = useDispatch()
    useEffect(() => {
		dispatch(getRecipes());
	}, []);

    return (
        <StyledDiv>
            <div >
                {recipes.map((el) => (
                    <Card
                        key={el.id}
                        id={el.id}
                        title={el.title}
                        image={el.image}
                        diets={el.diets}
                        dishTypes={el.dishTypes}
                    />
                ))}
            </div>

        </StyledDiv>
    )
}


export default Cards;