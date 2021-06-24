import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledDiv } from './style';
import { createRecipe, getRecipeDiets } from '../../Actions'
import { Link } from 'react-router-dom';
import axios from 'axios';

export const CreateRecipe = () => {

    const [dietas, setDietas] = useState([])
    const dispatch = useDispatch();
    const recipeDiets = useSelector(state => state.recipeDiets);
    const [error, setError] = useState('')
    const [datos, setDatos] = useState({
        title: '',
        summary: '',
        spoonacularScore: '-',
        healthScore: '-',
        analyzedInstructions: [],
        diets: []
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
            case "summary":
                if (!/^([a-zA-Z]+( [a-zA-Z]+)+)$/.test(value)) {
                    setError('el valor tiene que ser un texto');
                } else {
                    setError(-1);
                }
                setDatos({ ...datos, summary: value});
                break;
            case "healthScore":
                if (100 > parseInt(value) > 0 || value === '-') {
                    setError(-1);
                } else {
                    setError('el valor tiene que ser entre 0 y 100');
                }
                setDatos({ ...datos, healthScore: value });
                break;
            case "spoonacularScore":
                if (100 > parseInt(value) > 0 || value === '-') {
                    setError(-1);
                } else {
                    setError('el valor tiene que ser entre 0 y 100');
                }
                setDatos({ ...datos, spoonacularScore: value });
                break;
            case "analyzedInstructions":
                if (!/^([a-zA-Z]+( [a-zA-Z]+)+)$/.test(value)) {
                    setError('el valor tiene que ser un texto');
                } else {
                    setError(-1);
                }
                setDatos({ ...datos, analyzedInstructions: [value] });
                break;
            default:
                break;
        }

    }
    useEffect(() => {
        dispatch(getRecipeDiets());
    }, []);

    const handleDiets = (e) => {
        if (!dietas.includes(e.target.value)) {
            setDietas(dietas => [...dietas, e.target.value]);

            setDatos({ ...datos, diets: [...datos.diets, e.target.value] })
        } else {
            var filtrado = dietas.filter(el => el !== e.target.value)
            setDietas(filtrado);
            setDatos({ ...datos, diets: filtrado })
        }
        // else setDatos({...datos, diets: [e.target.value]}); //para cuando le agregue uno nada que ver
    };
    console.log(datos)
    console.log(dietas)

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post(`http://localhost:3001/recipes/`, datos);
        // dispatch(createRecipe(datos));
        console.log(datos)

    }
    console.log(recipeDiets)
    // console.log(datos)
    return (
        <StyledDiv>
            <div className='container'>
            <form className='form' onSubmit={(e) => handleSubmit(e)} >
                <label for="diets" >Choose diet/s:</label>
                <select name="diets" id="diets" onChange={(e) => handleDiets(e)}>
                    {recipeDiets &&
                        recipeDiets.map((e, i) => (
                            <option key={i} value={e.id} >
                                {e.id} {e.name}
                            </option>
                        ))}
                </select>
                <ul>
                    {datos.diets.length ? datos.diets.map((el) => (<li>{el}</li>)) : null}
                </ul>
                <label>Recipe's name</label>
                <input name="title" value={datos.title} type='text' placeholder="Recipe's name" onChange={(e) => validater(e.target.value, 'title')} />
                <label>Summary</label>
                <input name="summary" value={datos.summary} type='text' placeholder="Summary" onChange={(e) => validater(e.target.value, 'summary')} />
                <label>Score</label>
                <input name="spoonacularScore" value={datos.spoonacularScore} placeholder="Score" onChange={(e) => validater(e.target.value, 'spoonacularScore')} />
                <label>Health Score</label>
                <input name="healthScore" value={datos.healthScore} placeholder="Health Score" onChange={(e) => validater(e.target.value, 'healthScore')} />
                <label>Steps</label>
                <input name="analyzedInstructions" value={datos.analyzedInstructions} type='text' placeholder="Steps" onChange={(e) => validater(e.target.value, 'analyzedInstructions')} />
                {error === -1 ? <button type="submit" > Create Recipe </button> : <span className={error && 'danger'} >{error}</span>}
                {/* <input type="submit" value=" Create Recipe" onClick={(e) => handleSubmit(e)}/> */}
                {/* <button type="submit" > Create Recipe </button> */}
                <Link to={`/home`}><button>BACK</button></Link>

            </form>
            </div>
            {/* {!error ? null : <span className={error && 'danger'} >{error}</span>} */}

        </StyledDiv>
    )

}

