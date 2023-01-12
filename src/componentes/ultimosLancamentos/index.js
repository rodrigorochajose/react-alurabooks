import { livros } from "./dadosUltimosLancamentos";
import { Titulo } from "../Titulo";
import CardRecomenda from "../card";
import imagemLivro from "../../imagens/livro2.png";
import styled from "styled-components";

const UltimosLancamentosContainer = styled.section`
  margin: 150px 0px 0px 15px;
  text-align: center;
`;

const Livros = styled.img`
  margin-right: 55px;
`;

function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo cor="#AAAA" tamanhoFonte="40px" alinhamento="center">
        Últimos Lançamentos
      </Titulo>
      {livros.map((livro) => (
        <Livros src={livro.src} />
      ))}
      <CardRecomenda
        titulo="Talvez seja do seu interesse"
        subtitulo="Angular 11"
        descricao="Aprenda esse Framework incrível"
        imagem={imagemLivro}
      />
    </UltimosLancamentosContainer>
  );
}

export default UltimosLancamentos;
