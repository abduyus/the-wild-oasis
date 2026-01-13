import React from "react";
import styled from "styled-components";
import Button from "./ui/Button.jsx";
import Input from "./ui/Input.jsx";
import Heading from "./ui/Heading.jsx";
import Row from "./ui/Row.jsx";

const StyledApp = styled.div`
  padding: 20px;
  border-radius: 15px;
`;

function App() {
  return (
    <StyledApp>
      <Row type={"horizontal"}>
        <Heading as={"h1"}>The Wild Oasis</Heading>
        <div>
          <Heading as={"h2"}>Form</Heading>
          <Button>Check In</Button>
          <Button variation={"secondary"} size={"small"}>
            Check In
          </Button>
        </div>
      </Row>
      <Row>
        <Heading as={"h3"}>Check in and out</Heading>
        <form>
          <Input type={"number"} placeholder={"Number of guests"} />
        </form>
      </Row>
    </StyledApp>
  );
}

export default App;
