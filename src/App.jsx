import styled from "styled-components";
import EstilosGlobais from "./componentes/EstilosGlobais";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";
import Banner from "./componentes/Banner";
import bannerBackground from "./assets/banner.png";
import Galeria from "./componentes/Galeria";
import fotos from "./fotos.json";
import { useState } from "react";
import ModalZoom from "./componentes/ModalZoom";
import Footer from "./componentes/Footer";

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);

  const aoAlternarFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita,
      });
    }
    setFotosDaGaleria(
      fotosDaGaleria.map((fotoDaGaleria) => {
        return {
          ...fotoDaGaleria,
          favorita:
            fotoDaGaleria.id === foto.id
              ? !foto.favorita
              : fotoDaGaleria.favorita,
        };
      })
    );
  };

  const filtrarPorTag = (filtro) => {
    if (filtro.id === 0) {
      setFotosDaGaleria(fotos);
    } else {
      setFotosDaGaleria(
        fotos.filter((foto) => {
          return foto.tagId === filtro.id;
        })
      );
    }
  };

  const filtroPorPesquisa = (textoDigitado) => {
    setFotosDaGaleria(
      fotos.filter((foto) =>
        foto.titulo.toLowerCase().includes(textoDigitado.toLowerCase())
      )
    );
    console.log(fotosDaGaleria);
  };

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho filtroPorPesquisa={filtroPorPesquisa} />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner
              texto="A galeria mais completa de fotos do espaço!"
              backgroundImage={bannerBackground}
            />
            <Galeria
              filtrarPorTag={filtrarPorTag}
              aoFotoSelecionada={(foto) => setFotoSelecionada(foto)}
              aoAlternarFavorito={aoAlternarFavorito}
              fotos={fotosDaGaleria}
            />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom
        aoAlternarFavorito={aoAlternarFavorito}
        foto={fotoSelecionada}
        aoFechar={() => setFotoSelecionada(null)}
      />
      <Footer />
    </FundoGradiente>
  );
};

export default App;
