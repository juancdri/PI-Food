import filterByDiets from '../functions/filterByDiets';
import {
    AZorder, 
    ZAorder,
    better,
    worst,

} from './filters'

const initialState = {
    allRecipes:[],
    recipesFilteredByDiet:[],
    recipes: [],
    detail: {},
    recipeTitle: [],
    recipeDiets:[],
    creater: '',
    filtrado:[],
    filterName:'all'
};


const Reducer = (state = initialState, { payload, type }) => {
    switch (type) {
        case 'GET_RECIPES':
            return {
                ...state,
                recipes: payload,
                allRecipes:payload
            };
        case 'GET_RECIPE_DETAIL':
            return {
                ...state,
                detail: payload
            };
        case 'GET_RECIPE_TITLE':
            return{
                ...state,
                recipes: payload
            };
        case 'CLEAN_DETAIL':
            return{
                ...state,
                detail: payload
            };
        case 'CLEAN_RECIPES':
            return{
                ...state,
                recipes: payload
            };
        case 'GET_RECIPE_DIETS':
            return{
                ...state,
                recipeDiets: payload
            };
        case 'CREATE_RECIPE':
            return{
                ...state,
                creater: payload
            };
        case 'DIETS_FILTER':
            
            var filtered = filterByDiets(state.allRecipes, payload)
            
            return{
                ...state,
                recipes: filtered,
                recipesFilteredByDiet:filtered,
                filterName:payload

            };
        case 'ORDER_AZ':
            return{
                ...state,
                recipes: AZorder(payload),
                // filterName:'AZ'
            };
        case 'ORDER_ZA':
            return{
                ...state,
                recipes: ZAorder(payload),
                // filterName:'ZA'
            };
        case 'ORDER_BETTER':
            return{
                ...state,
                recipes: better(payload),
                // filterName:'BETTER'
            };
        case 'ORDER_WORST':
            return{
                ...state,
                recipes: worst(payload),
                // filterName:'WORST'
            };

        default:
            return state;
    }
};

export default Reducer;
