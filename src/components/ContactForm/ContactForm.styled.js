import styled from 'styled-components';

export const Form = styled.form`
  max-width: 360px;
  border-radius: 14px;
  padding: 10px;
  background-color: #DDA0DD;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  
`;

export const Input = styled.input`
  width: 200px;
  margin-top: 2px;
  border-radius: 4px;
  border: 1px solid purple;
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 9px;
  border: 1px solid purple;
  color: white;
  background-color: #662d91;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, 
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, 
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
`;