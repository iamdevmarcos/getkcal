import React from "react";

import { Container, Header, Main } from "./styles";
import logo from "../../images/logo.svg";

const Home = () => {
  return (
    <Container>
      <Header>
        <img src={logo} alt="getkcal" />
      </Header>

      <Main>
        <form id="form">
          <div class="form-group">
            <label for="gender">Seu sexo</label>
            <select id="gender">
              <option value="male">Masculino</option>
              <option value="female">Feminino</option>
            </select>
          </div>
          <div class="form-group">
            <label for="age">Sua idade</label>
            <input type="number" id="age" />
          </div>
          <div class="form-group">
            <label for="weight">Seu peso</label>
            <input type="number" id="weight" />
          </div>
          <div class="form-group">
            <label for="height">Sua altura</label>
            <input type="number" id="height" />
          </div>
          <div class="form-group">
            <label for="activity_level">Seu nível de atividade física</label>
            <select id="activity_level">
              <option value="1.2">Sedentário</option>
              <option value="1.375">Pouca atividade</option>
              <option value="1.55">Atividade moderada</option>
              <option value="1.725">Atividade intensa</option>
              <option value="1.9">Atividade muito intensa</option>
            </select>
          </div>

          <div class="form-group">
            <button type="submit">Calcular!</button>
          </div>
        </form>
        <div class="result-container" id="result">
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
        </div>
      </Main>
    </Container>
  );
};

export default Home;
