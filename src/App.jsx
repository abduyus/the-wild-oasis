import React from 'react';
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles.js";


const H1 = styled.h1`
    
`

const Button = styled.button`
    background-color: var(--color-brand-600);
    
`

const Input = styled.input`
   
`

const StyledApp = styled.div`
  

`




function App() {
    return (
        <>
        <GlobalStyles />
        <StyledApp>

        <H1>The Wild Oasis</H1>
        <Button>Check In</Button>
        <Input type={'number'} placeholder={'Number of guests'}/>
        </StyledApp>
        </>
    );
}

export default App;