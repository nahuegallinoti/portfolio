import styled from "styled-components";

export const FormContact = styled.form`
  display: grid;
  width: auto;
`;

export const Input = styled.input`
  width: 50%;
  height: ${(props) => (props.height ? props.height : "3rem")};};  
  background-color: #f5f5f5;
  border: 10px solid #f5f5f5;
  border-radius: 5px;
  font-size: 1.5rem;
  margin: 0.5rem 0;
`;
