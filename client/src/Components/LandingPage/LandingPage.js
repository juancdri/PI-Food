import React from 'react';
import { Link } from 'react-router-dom';
import { StyledDiv } from './style';

const LandingPage = () => {
    
    return (
        <StyledDiv>
            <div className="real">
                <Link to='/home' >
                    <button className="boton">Home
                    </button>
                </Link>
            </div>
        </StyledDiv>
    )
}
export default LandingPage;