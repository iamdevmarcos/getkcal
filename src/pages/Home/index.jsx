import React from "react";

import {
  Container,
  Header,
  Main,
  Form,
  FormGroup,
  Title,
  Select,
  Input,
  Button,
  Result,
} from "./styles";
import logo from "../../images/logo.svg";

const Home = () => {
  return (
    <Container>
      <Header>
        <img src={logo} alt="getkcal" />
      </Header>

      <Main>
        <Form id="form">
          <FormGroup>
            <Title for="gender">Seu sexo</Title>
            <Select id="gender">
              <option value="male">Masculino</option>
              <option value="female">Feminino</option>
            </Select>
          </FormGroup>
          <FormGroup>
            <Title for="age">Sua idade</Title>
            <Input type="number" id="age" />
          </FormGroup>
          <FormGroup>
            <Title for="weight">Seu peso</Title>
            <Input type="number" id="weight" />
          </FormGroup>
          <FormGroup>
            <Title for="height">Sua altura</Title>
            <Input type="number" id="height" />
          </FormGroup>
          <FormGroup>
            <Title for="activity_level">Seu nível de atividade física</Title>
            <Select id="activity_level">
              <option value="1.2">Sedentário</option>
              <option value="1.375">Pouca atividade</option>
              <option value="1.55">Atividade moderada</option>
              <option value="1.725">Atividade intensa</option>
              <option value="1.9">Atividade muito intensa</option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Button type="submit">Calcular!</Button>
          </FormGroup>
        </Form>
        <Result class="result-container" id="result">
          <h2>Aqui está o resultado:</h2>

          <div class="result-content">
            <ul>
              <li>
                Seu metabolismo basal é de <strong>3213 calorias</strong>.
              </li>
              <li>
                Para manter o seu peso você precisa consumir em média{" "}
                <strong>32131 calorias</strong>.
              </li>
              <li>
                Para perder peso você precisa consumir em média{" "}
                <strong>321 calorias</strong>.
              </li>
              <li>
                Para ganhar peso você precisa consumir em média{" "}
                <strong>321 calorias</strong>.
              </li>
            </ul>
          </div>
        </Result>
      </Main>
    </Container>
  );
};

export default Home;
