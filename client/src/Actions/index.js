import axios from 'axios';
import {
    GET_RECIPES,
    GET_RECIPE_DETAIL,
    GET_RECIPE_TITLE,
    GET_RECIPE_DIETS, 
    CREATE_RECIPE,
    CLEAN_DETAIL,
    CLEAN_RECIPES,
    DIETS_FILTER,
    ORDER_AZ,
    ORDER_ZA,
    ORDER_BETTER,
    ORDER_WORST
} from './constants'

export const getRecipes = () => async (dispatch) => {
	try {
		const res = await axios.get(`http://localhost:3001/recipes`);
		dispatch({type: GET_RECIPES, payload: res.data});
	} catch (err) {
		console.log(err, 'No hay recetas encontradas');
	}
};
export const getRecipeTitle = (name) => async (dispatch) => {
    try {
        const res = await axios.get(`http://localhost:3001/recipes?name=${name}`);
        dispatch({type: GET_RECIPE_TITLE, payload: res.data});
    } catch (err) {
        console.log(err);
        dispatch({type: GET_RECIPE_TITLE, payload: []});
    }
};
export const getRecipesDetail = (id) => async (dispatch) => {
	try {
		const res = await axios.get(`http://localhost:3001/recipes/${id}`);
		console.log(res)
		dispatch({type: GET_RECIPE_DETAIL, payload: res.data});
	} catch (err) {
		console.log(err);
		dispatch({type: GET_RECIPE_DETAIL, payload:[] });
	}
};
export const getRecipeDiets = () => async (dispatch) => {
	try {
		const res = await axios.get(`http://localhost:3001/types`);
		dispatch({type: GET_RECIPE_DIETS, payload: res.data});
	} catch (err) {
		console.log(err);
		dispatch({type: GET_RECIPE_DIETS, payload: []});
	}
};
export const createRecipe = (datos) => async (dispatch) => {
	try {
		const res = await axios.post(`http://localhost:3001/recipes/`, datos);
		dispatch({type: CREATE_RECIPE, payload: res.data});
	} catch (err) {
		console.log(err);
		dispatch({type: CREATE_RECIPE, payload: 'no cargaron los datos'});
	}
};
export const cleanDetail = () => (dispatch) => {
    dispatch({type: CLEAN_DETAIL, payload: {}});
};

//-------Filters----------
export const cleanRecipes = () => (dispatch) => {
	dispatch({type: CLEAN_RECIPES, payload: []});
};
export const dietsFilter = (array) => (dispatch) => {
	dispatch({type: DIETS_FILTER, payload: array});
};
export const orderAz = (array) => async (dispatch) => {
        dispatch({
            type: ORDER_AZ,
            payload: array,
        });
    
};
export const orderZa = (array) => async (dispatch) => {
        dispatch({
            type: ORDER_ZA,
            payload:array,
        });
	}
export const orderBetter = (array) => async (dispatch) => {
        dispatch({
            type: ORDER_BETTER,
            payload: array,
        });
	}
export const orderWorst = (array) => async (dispatch) => {
        dispatch({
            type: ORDER_WORST,
            payload: array,
        });
    
};