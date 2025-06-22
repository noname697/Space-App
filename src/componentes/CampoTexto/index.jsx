import styled from "styled-components";

const CampoTextoEstilizado = styled.div`
  position: relative;
  display: inline-block;
  input {
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #c98cf1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    &::placeholder {
      color: #d9d9d9;
      line-height: 20px;
      font-size: 20px;
    }
  }
  img {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
  }
`;

const CampoTexto = (props) => {
  return (
    <CampoTextoEstilizado>
      <input placeholder="O que você procura?" {...props} />
      <img src="/imagens/search.png" alt="ícone de lupa" />
    </CampoTextoEstilizado>
  );
};

export default CampoTexto;
