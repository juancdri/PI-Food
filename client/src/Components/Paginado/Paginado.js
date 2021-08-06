import { useSelector } from "react-redux";
import { useEffect } from "react";

const Paginacion = ({ cardsPerPage, paginate }) => {
    const recipes = useSelector((state) => state.recipes)
    // const filterName = useSelector((state) => state.filterName)
    const recipesFilteredByDiet = useSelector((state) => state.recipesFilteredByDiet)
    
    var pageNumbers = [];
    for (var i = 1; i <= Math.ceil(recipes.length / cardsPerPage); i++) {
        pageNumbers.push(i)
    }
    useEffect(() => {
        
        if(recipesFilteredByDiet.length){
            pageNumbers = [];
            for (var i = 0; i <= Math.ceil(recipesFilteredByDiet.length / cardsPerPage); i++) {pageNumbers.push(i)}
        }
    }, [recipesFilteredByDiet,cardsPerPage]);
    
    return (
            <ul className='paginate-ul'>
                {pageNumbers.map((number) => (
                    <li className='paginate-li'>
                        <a onClick={() => paginate(number)} href='#'>{number}</a>
                    </li>
                ))}
            </ul>
    )

};
export default Paginacion