import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledDiv } from './style';
import {createRecipe} from '../../Actions'
import { connect } from 'react-redux';


export const CreateRecipe = () => {
    // useEffect(() => {
    // 	getRecipes();
    // }, []);
    const dispatch = useDispatch();
    const [error, setError] = useState('')
    const [datos, setDatos] = useState({
        title: '',
        summary: '',
        spoonacularScore: '',
        healthScore: '',
        analyzedInstructions: '',
        diets:''
    });
    function validater(value, type) {
        switch (type) {
            case "title":
                if (!/^([a-zA-Z]+( [a-zA-Z]+)+)$/.test(value)) {
                    setError('el Nombre tiene que ser un texto');
                } else {
                    setError('Es necesario un resumen');
                }
                setDatos({ ...datos, title: value });
                break;
            case "healthScore":
                console.log(parseInt(value))
                if (parseInt(value) > 0) {
                    setError('');
                } else {
                    setError('el valor tiene que  un numero positivo');
                }
                setDatos({ ...datos, healthScore: value });
                break;
            case "spoonacularScore":
                if (parseInt(value) > 0) {
                    setError('');
                } else {
                    setError('el valor tiene que ser un numero positivo');
                }
                setDatos({ ...datos, spoonacularScore: value });
                break;
            case "summary":
                if (!/^([a-zA-Z]+( [a-zA-Z]+)+)$/.test(value)) {
                    setError('el valor tiene que ser un texto');
                } else {
                    setError(-1);
                }
                    setDatos({ ...datos, summary: [value] });
                break;
            case "analyzedInstructions":
                if (!/^([a-zA-Z]+( [a-zA-Z]+)+)$/.test(value)) {
                    setError('el valor tiene que ser un texto');
                } else {
                    setError('');
                }
                    setDatos({ ...datos, analyzedInstructions: [value] });
                break;
            default:
                break;
        }

    }
    const handleSubmit = async (e) => {
		e.preventDefault();
        //dispatch(createRecipe(datos))//por si tengo que renderizar la shit
        await axios.post(`http://localhost:3001/recipes`, datos)
    }

    // console.log(datos.title)
    return (
        <StyledDiv>
            <form action="/recipes/" onSubmit={(e) => handleSubmit(e)}>
                <label for="diets">Choose diet/s:</label>
                <select name="diets" id="diets" multiple>
                    <option value="Gluten Free">Gluten Free</option>
                    <option value="Ketogenic">Ketogenic</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Ovo-Vegetarian">Ovo-Vegatarian</option>
                    <option value="Lacto-Vegetarian">Lacto-Vegatarian</option>
                    <option value="Vegan">Vegan</option>
                    <option value="Pescetarian">Pescetarian</option>
                    <option value="Paleo">Paleo</option>
                    <option value="Primal">Primal</option>
                </select>
                <input name="title" value={datos.title} type='text' placeholder="Recipe's name" onChange={(e) => validater(e.target.value, 'title')} />
                <input name="summary" value={datos.summary} type='text' placeholder="Summary" onChange={(e) => validater(e.target.value, 'summary')} />
                <input name="spoonacularScore" value={datos.spoonacularScore} placeholder="Score" onChange={(e) => validater(e.target.value, 'spoonacularScore')} />
                <input name="healthScore" value={datos.healthScore} placeholder="Health Score" onChange={(e) => validater(e.target.value, 'healthScore')} />
                <input name="analyzedInstructions" value={datos.analyzedInstructions} type='text' placeholder="Steps" onChange={(e) => validater(e.target.value, 'analyzedInstructions')} />
                {error == -1 ? <input type="submit" value=" Create Recipe" /> : <span className={error && 'danger'} >{error}</span>}
                {/* <input type="submit" value=" Create Recipe" /> */}

            </form>
            {/* {!error ? null : <span className={error && 'danger'} >{error}</span>} */}

        </StyledDiv>
    )
}


// const mapStateToProps = (state) => {
// 	return {
// 		recipes: state.recipes
//     }
// };
// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		getRecipes: () => dispatch(getRecipes())
// 	};
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Cards);