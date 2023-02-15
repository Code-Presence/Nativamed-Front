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
import Muie from '../../assets/muie.png';
import Woman from '../../assets/woman.png';
import Laptop from '../../assets/laptop.png';
import Frasco from '../../assets/frasco.png';
// import {Slider} from '../components/Slider/Slider';

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
              <Button>Agendar Consulta</Button>
            </TextWrapper>
          </LeftWrapper>
          <RightWrapper>
            <img src={Muie} alt={'Mulher'} className={'img-da-muie'}/>
          </RightWrapper>
        </Wrapper>
      </FirstSection>
      <SecondSection>
        <SeconSectionDivider>
          <div className={'second-sec-wrapper'}>
            <LeftWrapper className={'second-sec-left-wrapper'}>
              <img src={Laptop} alt={'Laptop'} className={'laptop'} />
            </LeftWrapper>
            <RightWrapper>
              <div className={'second-sec-right-wrapper'}>
                <Title>
                Preencha o formulário para dar <br/>
                o primeiro passo em direção ao <br/>
                alívio dos seus sintomas
                </Title>
                <br />
                <FooterTitle>
                Entraremos em contato para te guiar por todo o caminho.
                </FooterTitle>
                <br />
                <Button>Conheça o tratamento</Button>
              </div>
            </RightWrapper>
          </div>
        </SeconSectionDivider>
      </SecondSection>
      <ThirdSection>
        <div className={'third-sec-wrapper'}>
          <div className={'third-sec-left-wrapper'}>
            <div className={'third-sec-text-wrapper'}>
              <h4>MÉTODO NATURAL</h4>
              <h2>O nosso tratamento</h2>
              <p>
              O tratamento com óleo de Canabidiol (CBD) medicinal é autorizada pela ANVISA e milhares de pacientes já se beneficiam com o seu uso.
                <br/>
                <br/>
              Existem mais de 20 mil estudos publicados comprovando sua eficácia e segurança para diversas patologias.
                <br />
                <br />
              É um método natural que não causa dependência ou tolerância e que interage com um dos principais sistemas do nosso corpo, trazendo um completo estado de bem-estar físico e mental.
                <br />
                <br />
              Taxa de 79,9% no alívio dos sintomas da ansiedade, comprovada cientificamente.
              </p>
              <button>Ver depoimentos</button>
            </div>
          </div>
          <div className={'third-sec-right-wrapper'}>
            <img src={Frasco} alt={'Frasco'} />
          </div>
        </div>
      </ThirdSection>
      <FourthSection>
        <Wrapper/>
      </FourthSection>
      <FifthSection>
        <Wrapper></Wrapper>
      </FifthSection>
      <SixthSection>
        <Wrapper>
          <LeftWrapper>
            <img src={Woman} alt={'Ôta muié'} style={{width: '500px', borderRadius: '8px'}}/>
          </LeftWrapper>
          <RightWrapper>
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
          </RightWrapper>

        </Wrapper>
      </SixthSection>
      <Footer/>
    </Container>
  );
}
export default Home;

