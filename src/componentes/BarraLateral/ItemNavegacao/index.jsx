import styled from "styled-components";

const ItemListaEstilizado = styled.li``;

const ItemNavegacao = ({
  children,
  iconeAtivo,
  iconeInativo,
  ativo = false,
}) => {
  return (
    <ItemListaEstilizado>
      <img src={ativo ? iconeAtivo : iconeInativo} alt="" />
      <a href="">{children}</a>
    </ItemListaEstilizado>
  );
};

export default ItemNavegacao;
