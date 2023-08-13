import React from "react";
import "./App.css";
import styled from "styled-components";
import Img from "./img/rectangle.jpg";

function App() {
  return (
    <div className="App">
      <Box>
        <Card>
          <img src={Img} width={"100%"}></img>
          <Title>Headline</Title>
          <Text>
            Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
            ornare in venen.
          </Text>
          <Btn>See more</Btn>
          <BtnWhite>Save</BtnWhite>
        </Card>
      </Box>
    </div>
  );
}

export default App;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #e3e3e3;
`;

const Card = styled.div`
  width: 300px;
  height: 350px;
  border-radius: 15px;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0px 4px 20px 5px #0000001a;
`;

const Title = styled.h1`
  line-height: 19.36px;
  font-size: 16px;
  color: #000;
  margin: 10px;
  margin-top: 20px;
  font-weight: 700;
  font-family: Inter;
`;

const Text = styled.p`
  font-size: 12px;
  line-height: 20px;
  margin: 10px;
  margin-top: 20px;
  color: #abb3ba;
  font-family: Inter;
`;

const Btn = styled.button`
  border: none;
  border-radius: 5px;
  width: 86px;
  height: 30px;
  margin: 10px;
  font-size: 10px;
  background: #4e71fe;
  color: #fff;
  font-weight: 700;
  font-family: Inter;

  &:hover {
    cursor: pointer;
  }
  &:last-child {
    margin-left: 2px;
  }
`;

const BtnWhite = styled(Btn)`
  background: transparent;
  color: #4e71fe;
  border: #4e71fe 2px solid;
`;
