import React, {useState} from 'react';
import {
  Container,
  FirstSection,
  SecondSection,
  ThirdSection,
  FourthSection,
  FifthSection,
  SixthSection,
  Footer, IMGDivider, SeventhSection,
} from './styles';
import Muie from '../../assets/muie.png';
import Woman from '../../assets/woman.png';
import Laptop from '../../assets/laptop.png';
import Frasco from '../../assets/frasco.png';
import FrascoQuadrado from '../../assets/frasco-quadrado.png';

import One from '../../assets/one.png';
import Two from '../../assets/two.png';
import Three from '../../assets/three.png';
import Four from '../../assets/four.png';
import Plantas from '../../assets/platinhas.png';
import Logo from '../../assets/logo.png';

import {Carousel} from '../components/Carousel';
import Nav from '../components/Navbar/Navbar';

import {FaWhatsapp, FaInstagram} from 'react-icons/fa';
import {MdOutlineEmail} from 'react-icons/md';

function Home(): JSX.Element {

  return (
    <Container>
      <Nav/>
      <FirstSection id={'tenho-prescricao'}>
        <div className={'first-wrapper'}>
          <div className={'first-left-wrapper'}>
            <div className={'first-text-wrapper'}>
              <p className={'pre-title'}>
                ALÍVIO NOS SINTOMAS DA ANSIEDADE, INSÔNIA E DORES CRÔNICAS
              </p>
              <h1 className={'title'}>
                Comece hoje o tratamento <br/>
                para melhorar sua qualidade <br/>
                de vida
              </h1>
              <p className={'sub-title'}>NATURAL, LEGAL E APROVADO PELA ANVISA</p>
              <p className={'footer-title'}>
                Te acolheremos desde o agendamento da sua consulta médica até a
                compra do medicamento. <b>Simples e prático!</b>
              </p>
              <button>Agendar Consulta</button>
            </div>
          </div>
          <div className={'first-right-wrapper'}>
            <img src={Muie} alt={'Mulher'} className={'img-da-muie'} fetch-priority="high"/>
          </div>
        </div>
      </FirstSection>
      <SecondSection>
        <div className={'divider'}>
          <div className={'second-sec-wrapper'}>
            <div className={'second-sec-left-wrapper'}>
              <img src={Laptop} alt={'Laptop'} className={'laptop'}/>
            </div>
            <div className={'second-sec-right-wrapper'}>
              <h1>
                Preencha o formulário para dar <br/>
                o primeiro passo em direção ao <br/>
                alívio dos seus sintomas
              </h1>
              <br/>
              <p>
                Entraremos em contato para te guiar por todo o caminho.
              </p>
              <br/>
              <button>Conheça o tratamento</button>
            </div>
          </div>
        </div>
      </SecondSection>
      <ThirdSection id={'sobre-o-tratamento'}>
        <div className={'third-wrapper'}>
          <div className={'third-left-wrapper'}>
            <div className={'third-text-wrapper'}>
              <h4>MÉTODO NATURAL</h4>
              <h2>O nosso tratamento</h2>
              <p>
                O tratamento com óleo de Canabidiol (CBD) medicinal é autorizada pela ANVISA e milhares de pacientes já
                se beneficiam com o seu uso.
                <br/>
                <br/>
                Existem mais de 20 mil estudos publicados comprovando sua eficácia e segurança para diversas patologias.
                <br/>
                <br/>
                É um método natural que não causa dependência ou tolerância e que interage com um dos principais
                sistemas do nosso corpo, trazendo um completo estado de bem-estar físico e mental.
                <br/>
                <br/>
                Taxa de 79,9% no alívio dos sintomas da ansiedade, comprovada cientificamente.
              </p>
              <button>Ver depoimentos</button>
            </div>
          </div>
          <div className={'third-right-wrapper'}>
            <img src={Frasco} alt={'Frasco'}/>
          </div>
        </div>
      </ThirdSection>
      <IMGDivider>
        <div className={'divider-wrapper'}>
          <img src={FrascoQuadrado} alt={'frasco-quadrado'} className={'frasco'}/>
        </div>
      </IMGDivider>
      <FourthSection>
        <div className={'fourth-wrapper'}>
          <div className={'forth-content-wrapper'}>
            <div className={'fourth-left'}>
              <div className={'left-text'}>
                <h4>Passo a passo</h4>
                <h1>Agendamento da consulta médica até a compra do medicamento.</h1>
                <p>Para iniciar é necessário passar por uma consulta médica online onde o médico irá lhe encaminhar e
                  prescrever o medicamento de acordo com a sua condição</p>
              </div>
              <div className={'left-img'}>
                <img src={Plantas} alt={'plantas-no-jarro'}/>
              </div>
            </div>
            <div className={'fourth-right'}>
              <div className={'right-text'}>
                <div className={'content-container'}>
                  <img src={One} alt={'num-one'}/>
                  <div className={'text-wrapper'}>
                    <p>
                      No botão agendar consulta vá para a página de prescritores, escolha o profissional que mais atenda
                      sua
                      demanda e preencha o formulário.
                      <br/>
                      <br/>
                      Se preferir entre em contato pelo WhatsApp e fale com um dos nossos especialistas que lhe
                      auxiliaremos.
                    </p>
                  </div>
                </div>
                <div className={'content-container'}>
                  <img src={Two} alt={'num-two'}/>
                  <div className={'text-wrapper'}>
                    <p>
                      Já na plataforma Amplimed Selecione:
                      <br/>
                      <br/>
                      Profissional, data, hora, valor e forma de pagamento e confirme sua consulta.
                    </p>
                  </div>
                </div>
                <div className={'content-container'}>
                  <img src={Three} alt={'num-three'}/>
                  <div className={'text-wrapper'}>
                    <p>
                      Durante a consulta o profissional irá avaliar seu objetivo terapêutico e indicar a melhor opção
                      para
                      seu tratamento.
                    </p>
                  </div>
                </div>
                <div className={'content-container'}>
                  <img src={Four} alt={'num-four'}/>
                  <div className={'text-wrapper'}>
                    <p>
                      Com a avaliação feita e prescrição em mãos, você receberá toda instrução via WhatsApp, E-mail e
                      SMS
                      para dar sequência na compra do medicamento.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={'bottom-wrapper'}>
            <h1>Você está a um passo do tratamento ideal</h1>
            <button>AGENDAR CONSULTA</button>
          </div>
        </div>
      </FourthSection>
      <FifthSection>
        <div className={'fifth-wrapper'}>
          <div className={'fifth-first-container'}>
            <div className={'text-wrapper'}>
              <h1>Depoimentos De Pacientes Satisfeitos</h1>
            </div>
          </div>
          <div className={'fifth-second-container'}>
            <Carousel/>
          </div>
          <div className={'fifth-third-container'}>
            <h1>Você está a um passo do tratamento ideal</h1>
            <button>QUERO INICIAR</button>
          </div>
        </div>
      </FifthSection>
      <SixthSection>
        <div className={'six-wrapper'}>
          <div className={'six-left'}>
            <img src={Woman} alt={'Ôta muié'}/>
          </div>
          <div className={'six-right'}>
            <div className={'six-text-wrapper'}>
              <h4>Quem somos</h4>
              <h1>Conheça a nossa empresa</h1>
              <div
                style={{
                  height: '100%',
                }}
              >
                <p>
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
                </p>
              </div>
            </div>
          </div>
          {/*<img src={Folhas} alt={'folhas'} className={'folhas'}/>*/}
        </div>
      </SixthSection>
      {/*<SeventhSection>*/}
      <Footer>
        <div className={'footer-wrapper'}>
          <div className={'logo-container'}>
            <img src={Logo} alt={'logo'} />
            <div className={'respons-icon-container'}>
              <MdOutlineEmail/>
              <FaInstagram/>
              <FaWhatsapp/>
            </div>
          </div>
          <div className={'option-container-1'}>
            <p>Tenho prescrição</p>
            <p>Perguntas frequentes</p>
            <p>Blog</p>
          </div>
          <div className={'option-container-2'}>
            <p>Agendamento de consulta</p>
            <p>Nosso tratamento</p>
            <p>Conheça nossa empresa</p>
            <p>Depoimentos</p>
          </div>
          <div className={'icons-container'}>
            <FaWhatsapp/>
            <FaInstagram/>
            <MdOutlineEmail/>
          </div>
        </div>
        <hr className={'line'} />
        <div className={'links-wrapper'}>
          <div style={{ display: 'flex', gap: '10px'}}>
            <div className={'respons-divider'}>
              <a>Política de Privacidade</a>
              <a>Política de Cookies</a>
            </div>
            <div className={'respons-divider'}>
              <a>Termos de Uso</a>
              <a>CNPJ: 48.029.775/0001-16</a>
            </div>
          </div>
          <a>Todos os direitos reservados © nativamed.com.br</a>
        </div>
      </Footer>
    </Container>
  );
}

export default Home;

