import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getRecipes } from '../../Actions';
import { StyledDiv } from './style';
import Card from '../Card/Card';
import Paginado from '../Paginado/Paginado';


export const Cards = () => {
    const dispatch = useDispatch()
    const recipes = useSelector((state) => state.recipes)
    const recipesFilteredByDiet = useSelector((state) => state.recipesFilteredByDiet)
    const filterName = useSelector((state) => state.filterName)

    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage=9;
    const indexOfLastCard = currentPage * cardsPerPage;
    //indice del ultimo elemento de cada pàgina
    const indexOfFirstCard= indexOfLastCard - cardsPerPage;
    //indice del primer elemento de cada pàgina

    const currentRecipes = recipes.slice(indexOfFirstCard, indexOfLastCard);

    const paginate=(pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
		dispatch(getRecipes());
	}, []);

    useEffect(()=>{
        if(filterName !== "all"){
            setCurrentPage(1)
        }
    },[dispatch, filterName]);


    return (
        <StyledDiv>
            <div className='paginate'>
                <Paginado cardsPerPage={cardsPerPage} paginate={paginate} />
            </div>
            <div className='container'>
                {currentRecipes.map((el) => (
                    <Card
                        key={el.id}
                        id={el.id}
                        title={el.title}
                        image={el.image}
                        diets={el.diets}
                        Types={el.Types}
                        dishTypes={el.dishTypes}
                    />
                ))}
            </div>

        </StyledDiv>
    )
}


export default Cards;