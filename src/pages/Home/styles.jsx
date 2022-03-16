import styled from "styled-components";

export const Container = styled.div`
  width: 550px;
  margin: 0 auto;
  min-height: 100vh;
`;

export const Header = styled.header`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.div`
  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  .form-group label {
    font-size: 16px;
    font-family: "Montserrat Semibold", sans-serif;
    margin-bottom: 5px;
  }

  .form-group input,
  .form-group select {
    background: #1a1a1a;
    width: 100%;
    height: 45px;
    border: 1px solid transparent;
    border-radius: 5px;
    font-family: "Montserrat", sans-serif;
    color: white;
    font-size: 14px;
    padding: 0 15px;
    outline: none;
    transition: border-color 0.2s ease-in;
  }

  .form-group input:focus,
  .form-group select:focus {
    border-color: #ff7373;
  }

  .form-group button {
    background-image: linear-gradient(-90deg, #ff7373 0%, #fddb33 100%);
    border-radius: 5px;
    border: 0;
    height: 45px;
    color: #1a1a1a;
    font-size: 16px;
    font-family: "Montserrat Bold", sans-serif;
    cursor: pointer;
  }

  .form-group:last-child {
    margin-top: 40px;
  }

  .result-container {
    margin-top: 50px;
  }

  .result-content {
    margin-top: 10px;
    background: #1a1a1a;
    border-radius: 5px;
    padding: 15px;
  }

  .result-content ul {
    list-style: none;
  }

  .result-content ul li {
    font-size: 14px;
    font-weight: bold;
    font-family: "Montserrat Bold", sans-serif;
    line-height: 30px;
  }

  .result-content ul li strong {
    color: #ff7373;
  }
`;
