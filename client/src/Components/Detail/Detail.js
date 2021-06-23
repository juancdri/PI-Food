import React, {useEffect} from 'react';
import { getRecipesDetail } from '../../Actions';
import { cleanDetail } from '../../Actions';
import { StyledDiv } from './style';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export const Detail = () => {
    const {idRecipe} = useParams()
    const recipesDetail = useSelector(state =>state.detail)
    const dispatch= useDispatch()
    console.log(idRecipe)
    useEffect(() => {
        console.log('ENTRO')
	    dispatch(getRecipesDetail(idRecipe));
	}, [dispatch, idRecipe]);
console.log(getRecipesDetail)
    useEffect(()=>{
        return dispatch(cleanDetail())
    },[]
    )


    return (
        <StyledDiv>
            <h2 className="card-title">{recipesDetail.title}</h2>
            
            {recipesDetail.image? <img src={recipesDetail.image} width="80" height="80" alt="" />: null}
            <h6>Resumen:{recipesDetail.summary}</h6>
            {recipesDetail.diets?<h4>Diets:
                {recipesDetail.diets && recipesDetail.diets.map((el) =>(<li>{el}</li>))}
                </h4>:null}
            {recipesDetail.Types?<h4>Diets:
                {recipesDetail.Types && recipesDetail.Types.map((el) =>(<li>{el.name}</li>))}
                </h4>:null}
            {recipesDetail.dishTypes? <h5>Categoría:
                {recipesDetail.dishTypes && recipesDetail.dishTypes.map((el) =>( <li>{el}</li>))}
                </h5>:null} 
            <h6>Health Score:{recipesDetail.healthScore}</h6>
            <h6>Puntaje:{recipesDetail.spoonacularScore}</h6>
            <h4>Paso a paso:
                {recipesDetail.analyzedInstructions && recipesDetail.analyzedInstructions.map((el) =>( <li>{el}</li>))}
                </h4>
                <Link to='/home'>
          <button  className='btn'>Back</button> 
        </Link>
          {/* //hacer un onclick hacer un action que me resetee el state de details a cero */}

        </StyledDiv>
    )
}

export default Detail;
