import filterByDiets from '../functions/filterByDiets';
const initialState = {
    allRecipes:[],
    recipes: [],
    detail: {},
    recipeTitle: [],
    recipeDiets:[],
    creater: '',
    filtrado:[]
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
                
            };

        default:
            return state;
    }
};

export default Reducer;
