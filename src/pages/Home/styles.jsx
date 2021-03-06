import styled from "styled-components";

export const Container = styled.div`
  width: 550px;
  margin: 0 auto;
  min-height: 100vh;

  @media (max-width: 580px) {
    width: 450px;
  }

  @media (max-width: 475px) {
    width: 300px;
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.div``;

export const Form = styled.form``;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  &:last-child {
    margin-top: 40px;
  }
`;

export const Title = styled.label`
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  margin-bottom: 5px;
`;

export const Select = styled.select`
  background: #1a1a1a;
  width: 100%;
  height: 45px;
  border: 1px solid transparent;
  border-radius: 5px;
  font-family: "Poppins", sans-serif;
  color: white;
  font-size: 14px;
  padding: 0 15px;
  outline: none;
  transition: border-color 0.2s ease-in;

  &:focus {
    border-color: #ff7373;
  }
`;

export const Input = styled.input`
  background: #1a1a1a;
  width: 100%;
  height: 45px;
  border: 1px solid transparent;
  border-radius: 5px;
  font-family: "Poppins", sans-serif;
  color: white;
  font-size: 14px;
  padding: 0 15px;
  outline: none;
  transition: border-color 0.2s ease-in;

  &:focus {
    border-color: #ff7373;
  }
`;

export const Button = styled.button`
  background-image: linear-gradient(-90deg, #ff7373 0%, #fddb33 100%);
  border-radius: 5px;
  border: 0;
  height: 45px;
  color: #1a1a1a;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

export const Result = styled.div``;

export const ResultContent = styled.div`
  margin-top: 30px;
  background: #1a1a1a;
  border-radius: 5px;
  padding: 15px;

  ul {
    list-style: none;
  }

  ul li {
    font-size: 18px;
    font-weight: bold;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    line-height: 30px;
    margin: 10px;
  }

  ul li strong {
    color: #ff7373;
  }
`;
