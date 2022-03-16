import React, { useState } from "react";

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
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("");

  const [showResult, setShowResult] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setShowResult(true);
  };

  return (
    <Container>
      <Header>
        <img src={logo} alt="getkcal" />
      </Header>

      <Main>
        <Form onSubmit={handleFormSubmit}>
          <FormGroup>
            <Title for="gender">Seu sexo</Title>
            <Select id="gender" onChange={(e) => setGender(e.target.value)}>
              <option value="male">Masculino</option>
              <option value="female">Feminino</option>
            </Select>
          </FormGroup>
          <FormGroup>
            <Title for="age">Sua idade</Title>
            <Input
              type="number"
              id="age"
              onChange={(e) => setAge(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Title for="weight">Seu peso</Title>
            <Input
              type="number"
              id="weight"
              onChange={(e) => setWeight(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Title for="height">Sua altura</Title>
            <Input
              type="number"
              id="height"
              onChange={(e) => setHeight(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Title for="activity_level">Seu nível de atividade física</Title>
            <Select
              id="activity_level"
              onChange={(e) => setActivityLevel(e.target.value)}
            >
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
          {showResult && (
            <>
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
            </>
          )}
        </Result>
      </Main>
    </Container>
  );
};

export default Home;
