import { useSelector } from "react-redux";
import { useEffect } from "react";

const Paginacion = ({ cardsPerPage, paginate }) => {
    const recipes = useSelector((state) => state.recipes)
    const filterName = useSelector((state) => state.filterName)
    const recipesFilteredByDiet = useSelector((state) => state.recipesFilteredByDiet)
    let pageNumbers = [];
    
    for (var i = 1; i <= Math.ceil(recipes.length / cardsPerPage); i++) {
        pageNumbers.push(i)
    }
    useEffect(() => {
        if(recipesFilteredByDiet.length){
            pageNumbers = [];
            for (var i = 0; i <= Math.ceil(recipesFilteredByDiet.length / cardsPerPage); i++) {
                pageNumbers.push(i)
            }
        }
        
    }, [recipesFilteredByDiet]);
    return (
        <div>
            <ul>
                {pageNumbers.map((number) => (
                    <li>
                        <a onClick={() => paginate(number)} href='#'>{number}</a>
                    </li>
                ))}
            </ul>
        </div>


    )

};
export default Paginacion