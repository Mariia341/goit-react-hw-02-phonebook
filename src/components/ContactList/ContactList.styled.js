import styled from 'styled-components';

export const Item = styled.li`
display: flex;
align-items: center;
padding: 20px;
width: max-content;
border:  1px solid purple;
border-radius: 9px;

`;

export const Text = styled.p`
margin-top: 0;
margin-bottom: 0;
margin-right: 10px;

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