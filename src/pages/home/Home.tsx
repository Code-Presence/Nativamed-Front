import React from 'react';
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
  Text,
  SecondSection,
  SeconSectionDivider,
  ThirdSection,
  FourthSection,
  FifthSection,
  SixthSection,
  Footer,
} from './styles';
import Logo from '../../assets/logo.png';

function Home(): JSX.Element {
  return (
    <Container>
      <Navbar>
        <Wrapper
          style={{
            justifyContent: 'center',
            gap: '40px',
          }}
        >
          <img src={Logo} alt="Logo Nativamed"/>
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
                Comece hoje o tratamento <br/>
                para melhorar sua qualidade <br/>
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
      <SecondSection>
        <SeconSectionDivider>
          <Wrapper
            style={{
              flexDirection: 'column',
            }}
          >
            <Title>
              Preencha o formulário para dar <br/>
              o primeiro passo em direção ao <br/>
              alívio dos seus sintomas
            </Title>
            <FooterTitle>
              Entraremos em contato para te guiar por todo o caminho.
            </FooterTitle>
            <Button>Conheça o tratamento</Button>
          </Wrapper>
        </SeconSectionDivider>
      </SecondSection>
      <ThirdSection>
        <Wrapper/>
      </ThirdSection>
      <FourthSection>
        <Wrapper/>
      </FourthSection>
      <FifthSection>
        <Wrapper></Wrapper>
      </FifthSection>
      <SixthSection>
        <Wrapper>
          <div
            style={{
              width: '500px',
            }}
          >
            <Title>Conheça a nossa empresa</Title>
            <Text>
              Somos a nativamed, uma empresa que surgiu da possibilidade de
              melhorar a qualidade de vida das pessoas.
              <br/>
              <br/>
              ‘’Depois que a mãe de uma criança pediu ajuda para importar a
              medicação e vimos os benefícios e resultados positivos que esse
              tipo de tratamento traz nós soubemos – temos que facilitar o
              acesso da população a esse medicamento‘’.
              <br/>
              <br/>
              Hoje já atendemos e ajudamos dezenas de pessoas a amezinar seus
              sintomas crônicos e a melhorar sua qualidade de vida.
              <br/>
              <br/>
              Através do nosso ecossistema de profissionais contamos com
              diversos médicos especialistas para lhe orientar, consultar e
              prescrever os medicamentos de acordo com sua condição e patologia,
              facilitando o acesso ao tratamento e seus benefícios.
            </Text>
          </div>
        </Wrapper>
      </SixthSection>
      <Footer/>
    </Container>
  );
}

export {Home};
