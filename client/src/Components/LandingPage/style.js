import styled from 'styled-components';
import img from '../../img/food.jpg';

export const StyledDiv = styled.div`
  background-image: url(${img});
  background-position: center center;
  background-size:cover;
  background-attachment: fixed;
  position: fixed;
  width: 100%;
  height: 100%;

  .boton{
      color: white;
      background-color: black;
    }
  .real{
    display: flex;
      justify-content: center;
  }


  `