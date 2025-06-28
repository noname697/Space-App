import styled from "styled-components";

const FooterEstilizado = styled.footer`
  max-width: 100%;
  height: 80px;
  background-color: #04244f;
  display: flex;
  justify-content: space-between;
  margin-top: 73px;
  align-items: center;
  padding: 0 24px;
  ul {
    display: flex;
    align-items: center;
    padding: 0;
    gap: 35px;
    img {
      cursor: pointer;
    }
  }
  p {
    font-size: 16px;
    color: #fff;
  }
`;

const Footer = () => {
  const listaRedesSociais = [
    "/imagens/sociais/facebook.svg",
    "/imagens/sociais/twitter.svg",
    "/imagens/sociais/instagram.svg",
  ];
  return (
    <FooterEstilizado>
      <ul>
        {listaRedesSociais.map((rede) => (
          <a key={rede} href="">
            <img src={rede} alt="rede-social" />
          </a>
        ))}
      </ul>
      <p>Desenvolvido por Arthur Manenti.</p>
    </FooterEstilizado>
  );
};

export default Footer;
