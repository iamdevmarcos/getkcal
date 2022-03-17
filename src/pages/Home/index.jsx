import React, { useState, useEffect } from "react";

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
  ResultContent,
} from "./styles";
import logo from "../../images/logo.svg";

const Home = () => {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("");

  const [tmb, setTmb] = useState(0);

  const [showResult, setShowResult] = useState(false);

  const handleButtonClick = () => {
    if (gender !== "" && activityLevel !== "") {
      // Taxa metabolica basal
      setTmb(
        Math.round(
          gender === "female"
            ? 655 + 9.6 * weight + 1.8 * height - 4.7 * age
            : 66 + 13.7 * weight + 5 * height - 6.8 * age
        )
      );

      setShowResult(true);
    } else {
      alert("Preencha todos os campos!");
    }
  };

  const handleReset = () => {
    setGender("");
    setAge("");
    setWeight("");
    setHeight("");
    setActivityLevel("");
    setShowResult(false);
  };

  return (
    <Container>
      <Header>
        <img src={logo} alt="getkcal" />
      </Header>

      <Main>
        {!showResult && (
          <div>
            <FormGroup>
              <Title for="gender">Seu sexo</Title>
              <Select id="gender" onChange={(e) => setGender(e.target.value)}>
                <option value="">Selecione aqui</option>
                <option value="male">Masculino</option>
                <option value="female">Feminino</option>
              </Select>
            </FormGroup>
            <FormGroup>
              <Title for="age">Sua idade</Title>
              <Input
                type="number"
                id="age"
                onChange={(e) => setAge(parseInt(e.target.value))}
                value={age}
                min="1"
                max="999"
              />
            </FormGroup>
            <FormGroup>
              <Title for="weight">Seu peso</Title>
              <Input
                type="number"
                id="weight"
                onChange={(e) => setWeight(parseInt(e.target.value))}
                value={weight}
                min="1"
                max="999"
              />
            </FormGroup>
            <FormGroup>
              <Title for="height">Sua altura</Title>
              <Input
                type="number"
                id="height"
                onChange={(e) => setHeight(parseInt(e.target.value))}
                value={height}
                min="1"
                max="999"
              />
            </FormGroup>
            <FormGroup>
              <Title for="activity_level">Seu nível de atividade física</Title>
              <Select
                id="activity_level"
                onChange={(e) => setActivityLevel(e.target.value)}
              >
                <option value=""></option>
                <option value="1.2">Sedentário</option>
                <option value="1.375">Pouca atividade</option>
                <option value="1.55">Atividade moderada</option>
                <option value="1.725">Atividade intensa</option>
                <option value="1.9">Atividade muito intensa</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Button type="submit" onClick={handleButtonClick}>
                Calcular!
              </Button>
            </FormGroup>
          </div>
        )}

        {showResult && (
          <Result class="result-container" id="result">
            <h2>Aqui está o resultado:</h2>

            <ResultContent class="result-content">
              <ul>
                <li>
                  Seu metabolismo basal é de <strong>{tmb} calorias</strong>.
                </li>
                <li>
                  Para manter o seu peso você precisa consumir em média{" "}
                  <strong>
                    {Math.round(tmb * Number(activityLevel))} calorias
                  </strong>
                  .
                </li>
                <li>
                  Para perder peso você precisa consumir em média{" "}
                  <strong>
                    {Math.round(tmb * Number(activityLevel)) - 450} calorias
                  </strong>
                  .
                </li>
                <li>
                  Para ganhar peso você precisa consumir em média{" "}
                  <strong>
                    {Math.round(tmb * Number(activityLevel)) + 450} calorias
                  </strong>
                  .
                </li>
              </ul>

              <Button
                type="submit"
                onClick={handleReset}
                style={{ marginTop: 30, paddingLeft: 10, paddingRight: 10 }}
              >
                Calcular Novamente!
              </Button>
            </ResultContent>
          </Result>
        )}
      </Main>
    </Container>
  );
};

export default Home;
