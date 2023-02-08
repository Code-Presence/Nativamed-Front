import React from "react";
import {
  Container,
  FirstSection,
  Navbar,
  TextWrapper,
  Title,
  Wrapper,
  SubTitle,
  PreTitle,
  LeftWrapper,
  RightWrapper,
  Button,
  FooterTitle,
} from "./styles";
import Logo from "../../assets/logo.png";

function Home(): JSX.Element {
  return (
    <Container>
      <Navbar>
        <Wrapper>
          <img src={Logo} alt="Logo Nativamed" />
          <p>Tenho prescrição</p>
          <p>Sobre o tratamento</p>
          <p>Perguntas frequentes</p>
          <p>Blog</p>
          <p>Entrar em contato</p>
        </Wrapper>
      </Navbar>
      <FirstSection>
        <Wrapper>
          <LeftWrapper>
            <TextWrapper>
              <PreTitle>
                ALÍVIO NOS SINTOMAS DA ANSIEDADE, INSÔNIA E DORES CRÔNICAS
              </PreTitle>
              <Title>
                Comece hoje o tratamento <br />
                para melhorar sua qualidade <br />
                de vida
              </Title>
              <SubTitle>NATURAL, LEGAL E APROVADO PELA ANVISA</SubTitle>
              <FooterTitle>
                Te acolheremos desde o agendamento da sua consulta médica até a
                compra do medicamento. <b>Simples e prático!</b>
              </FooterTitle>
            </TextWrapper>
            <Button>Agendar Consulta</Button>
          </LeftWrapper>
          <RightWrapper></RightWrapper>
        </Wrapper>
      </FirstSection>
    </Container>
  );
}

export { Home };
