import './App.css';
import { Route } from 'react-router-dom'
import  LandingPage from './Components/LandingPage/LandingPage';
import  Cards from './Components/Cards/Cards.js';
import  React from 'react';
import { Fragment } from 'react';
import Nav from './Components/Nav/Nav';
import Detail from './Components/Detail/Detail';
import { CreateRecipe } from './Components/CreateRecipe/CreateRecipe';

function App() {
  return (
    <Fragment>
    <Route exact path='/' component ={LandingPage}/>     
    <Route path='/home' component ={Nav}/>
    <Route path='/home' component ={Cards}/>
    <Route path='/details/:idRecipe' component={Detail} />
    <Route exact path='/CreateRecipe' component={CreateRecipe} />
    
    </Fragment>
  );
}

export default App;
