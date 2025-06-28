import styled from "styled-components";
import CampoTexto from "../CampoTexto";

const HeaderEstilizado = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  img {
    max-width: 212px;
  }
`;

const Cabecalho = ({ filtroPorPesquisa }) => {
  return (
    <HeaderEstilizado>
      <img src="/imagens/logo.png" />
      <CampoTexto filtroPorPesquisa={filtroPorPesquisa} />
    </HeaderEstilizado>
  );
};

export default Cabecalho;
