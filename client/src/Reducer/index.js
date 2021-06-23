import filterByDiets from '../functions/filterByDiets';
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
            
            var algo = filterByDiets(state.allRecipes, payload)
            
            return{
                ...state,
                recipes: algo,
                recipesFilteredByDiet:algo,
                filterName:payload

            };
        case 'ORDER_AZ':
            return{
                ...state,
                recipes: payload,
                // filterName:'AZ'
            };
        case 'ORDER_ZA':
            return{
                ...state,
                recipes: payload,
                // filterName:'ZA'
            };
        case 'ORDER_BETTER':
            return{
                ...state,
                recipes: payload,
                // filterName:'BETTER'
            };
        case 'ORDER_WORST':
            return{
                ...state,
                recipes: payload,
                // filterName:'WORST'
            };

        default:
            return state;
    }
};

export default Reducer;
