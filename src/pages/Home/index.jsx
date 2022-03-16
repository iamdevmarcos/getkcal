import React from "react";

import { Container, Header } from "./styles";
import logo from "../../images/logo.svg";

const Home = () => {
  return (
    <Container>
      <Header>
        <img src={logo} alt="getkcal" />
      </Header>
    </Container>
  );
};

export default Home;
