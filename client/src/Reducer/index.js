const initialState = {
    recipes: [],
    detail: {},
    recipeTitle: []
};



const Reducer = (state = initialState, { payload, type }) => {
    switch (type) {
        case 'GET_RECIPES':
            return {
                ...state,
                recipes: payload
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
        case 'CLEAN_DETAIL':
            return{
                ...state,
                detail: payload
            };
        case 'CREATE_RECIPE':
            return{
                ...state,
            };

        default:
            return state;
    }
};

export default Reducer;
