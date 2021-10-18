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
	    dispatch(getRecipesDetail(idRecipe));
	}, [dispatch, idRecipe]);
    useEffect(()=>{
        return dispatch(cleanDetail())
    },[dispatch]
    )


    return (
        <StyledDiv>
            <h2 className="card-title">{recipesDetail.title}</h2>
            <div className='detail-img'>
                {recipesDetail.image? <img src={recipesDetail.image} className='image'  alt="" />: null}
            </div>
            <div className='summary'>
            <h3>Summary: </h3>
            <p>{recipesDetail.summary}</p>
            </div>
            <div className='container--dates'>
                <div className='container--diets'>
                    <h4>Diets: </h4>
                    {recipesDetail.diets
                        ?<ul> {recipesDetail.diets && recipesDetail.diets.map((el, i) =>(<li key={i} >{el}</li>))} </ul>
                        :null}
                    {recipesDetail.Types
                        ?<ul>{recipesDetail.Types && recipesDetail.Types.map((el, i) =>(<li key={i}>{el.name}</li>))}</ul>
                        :null}
                </div>
                <div className='container-category'>
                    <h4>Category: </h4>
                    {recipesDetail.dishTypes
                        ?<ul>{recipesDetail.dishTypes && recipesDetail.dishTypes.map((el, i) =>( <li key={i}>{el}</li>))}</ul>
                        :null} 
                </div>
                <div className='container-healthS'>
                    <h4>Health Score: {recipesDetail.healthScore}</h4>
                </div>
                <div className='container-generalScore'>
                    <h4>Score: {recipesDetail.spoonacularScore}</h4>
                </div>
                <div className='container-stepbystep'>
                    <h4>Recipe's steps</h4>
                        {recipesDetail.analyzedInstructions && recipesDetail.analyzedInstructions.map((el, i) =>( <li key={i} >{el.number}.{el.instruction}</li>))}
                </div>
            </div>
        <div className='btn'>
            <Link to='/home' className='btn-back'>
                <button>Back</button> 
            </Link>
        </div>

        </StyledDiv>
    )
}

export default Detail;
