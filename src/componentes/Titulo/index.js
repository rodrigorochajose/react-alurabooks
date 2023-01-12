import styled from "styled-components";

export const Titulo = styled.h2`
  font-size: ${(props) => props.tamanhoFonte || "10px;"}
  color: ${(props) => props.cor || "#000"};
  text-align: ${(props) => props.alinhamento}
`;
