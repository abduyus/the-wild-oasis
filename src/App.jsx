import React from 'react';
import styled from "styled-components";
import Button from "./ui/Button.jsx";
import Input from "./ui/Input.jsx";



const H1 = styled.h1`
    font-size: 30px;
    font-weight: 600;
`

const StyledApp = styled.div`
    padding: 20px;
    border-radius: 15px;

`


function App() {
    return (

            <StyledApp>
                <H1>The Wild Oasis</H1>
                <Button>Check In</Button>
                <Input type={'number'} placeholder={'Number of guests'}/>
            </StyledApp>
    );
}

export default App;