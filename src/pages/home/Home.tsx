import React, {useEffect, useState} from 'react';
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
import MuieSVG from '../../assets/muie-svg.svg';
import Woman from '../../assets/woman.png';
import LaptopSVG from '../../assets/laptop-svg.svg';
import Frasco from '../../assets/frasco.png';
import FrascoQuadrado from '../../assets/frasco-quadrado.png';

import One from '../../assets/one.png';
import Two from '../../assets/two.png';
import Three from '../../assets/three.png';
import Four from '../../assets/four.png';
import Plantas from '../../assets/platinhas.png';
import Logo from '../../assets/logo.png';
import ContaGota from '../../assets/conta-gotas.png';

import Aos from 'aos';
import 'aos/dist/aos.css';

import {Link} from 'react-scroll';


import {Carousel} from '../components/Carousel';
import Nav from '../components/Navbar/Navbar';

import {FaWhatsapp, FaInstagram} from 'react-icons/fa';
import {ImWhatsapp} from 'react-icons/im';
import {MdOutlineEmail} from 'react-icons/md';
import RDStationForm from '../components/FormModal/Form';
import {Faq} from '../components/Faq/Faq';

function Home(): JSX.Element {
  const [showForm, setShowForm] = useState<boolean>(false);

  const faqs = [
    {
      question: 'Quanto custa o tratamento?',
      answer: 'O custo do tratamento com Cannabis medicinal varia conforme o medicamento e posologia (dosagem da medicação) prescrito pelo médico, após a avaliação na consulta. A partir de R$ 100,00 mensais já é possível ter acesso a este tipo de tratamento.',
    },
    {
      question: 'Quanto custa a consulta?',
      answer: 'O valor de nossas consultas varia de acordo com o médico escolhido, podendo ser de R$ 250 a R$ 450 reais. Acesse o agendamento de consultas para saber o valor de cada médico especialista ou fale conosco pelo WhatsApp.',
    },
    {
      question: 'A Nativamed atende meu convênio ou plano de saúde?',
      answer: 'No momento não atendemos por convênios e planos de saúde, mas você pode solicitar conosco a nota fiscal da consulta e pedir reembolso junto ao seu plano ou convênio.',
    },
    {
      question: 'Quem são os médicos? Posso escolher?',
      answer: 'Todos nossos médicos são especialistas no sistema endocanabinoide, acesse o agendamento de consulta para escolher o profissional mais adequado ao seu tratamento.',
    },
    {
      question: 'Tenho direito a retorno?',
      answer: 'No agendamento da sua consulta você pode conferir se o médico selecionado oferece uma consulta de retorno.',
    },
    {
      question: 'Em caso de cancelamento, posso pedir reembolso?',
      answer: 'Oferecemos o cancelamento gratuito desde que comunicado com 48h de antecedência da consulta médica.',
    },
    {
      question: 'Por que preciso de uma receita?',
      answer: 'Por se tratar de medicamentos controlados, é obrigatório a apresentação da receita médica para a compra do medicamento, conforme a RDC nº660/2022 da ANVISA',
    },
    {
      question: 'Quais as formas de pagamento?',
      answer: 'Nossas formas de pagamento são à vista via PIX ou em até 4x no cartão sem juros.',
    },
    {
      question: 'Qual o endereço para consulta?',
      answer: 'Todas as nossas consultas são na modalidade de telemedicina, 100% online.',
    },
  ];

  const handleLinkClick = () => {
    // setShowForm(true);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    event.preventDefault();
    const url = 'https://api.whatsapp.com/send?phone=5547996314944&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta';
    window.open(url, '_blank');
  };

  const handleMailClick = () => {
    // setShowForm(true);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    event.preventDefault();
    const url = 'mailto:contato@nativamed.com.br';
    window.open(url, '_blank');
  };

  const handleInstaClick = () => {
    // setShowForm(true);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    event.preventDefault();
    const url = 'https://www.instagram.com/nativamed/';
    window.open(url, '_blank');
  };


  const handleModalClick = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    event.preventDefault();
    setShowForm(true);
  };

  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  return (
    <Container>
      <Nav/>
      <div>
        {showForm && <RDStationForm onClose={() => setShowForm(false)}/>}
      </div>
      <FirstSection id={'tenho-prescricao'} >
        <div className={'first-wrapper'} data-aos="fade-up">
          <div className={'first-left-wrapper'}>
            <div className={'first-text-wrapper'}>
              <p className={'pre-title'}>
                ALÍVIO NOS SINTOMAS DA ANSIEDADE, <br/> INSÔNIA E DORES CRÔNICAS
              </p>
              <h1 className={'title'}>
                Comece hoje o tratamento <br/>
                para melhorar sua qualidade <br/>
                de vida
              </h1>
              <p className={'sub-title'}>NATURAL, LEGAL E APROVADO PELA ANVISA</p>
              <div>
                <p className={'footer-title'}>
                  Te acolheremos desde o agendamento da sua consulta médica até a
                  compra do medicamento.</p>
                <p className={'footer-title-bold'}>Simples e prático!</p>

              </div>

              <button onClick={handleModalClick}>Agendar Consulta</button>
            </div>
          </div>
          <div className={'first-right-wrapper'}>
            <img src={MuieSVG} alt={'Mulher'} className={'img-da-muie'} fetch-priority="high"/>
          </div>
        </div>
      </FirstSection>
      <SecondSection >
        <div className={'divider'} >
          <div className={'second-sec-wrapper'} >
            <div className={'second-sec-left-wrapper'} data-aos="fade-right">
              <img src={LaptopSVG} alt={'Laptop'} className={'laptop'}/>
            </div>
            <div className={'second-sec-right-wrapper'} data-aos="fade-up">
              <div style={{width: '95%'}}>
                <h1>
                  Preencha o formulário para dar <br/>
                  o primeiro passo em direção ao <br/>
                  alívio dos seus sintomas
                </h1>
                <br/>
                <p>
                  Entraremos em contato para te guiar por <br/> todo o caminho.
                </p>
                <br/>
                {/*<Link to={'sobre'} smooth={true} duration={1000}>*/}
                <button onClick={handleModalClick}>Preencher Formulário</button>
                {/*</Link>*/}
              </div>
            </div>
          </div>
        </div>
      </SecondSection>
      <ThirdSection id={'sobre'}>
        <div className={'third-wrapper'}>
          <div className={'third-left-wrapper'} data-aos="fade-right">
            <div className={'third-text-wrapper'}>
              <h4>MÉTODO NATURAL</h4>
              <h2>O nosso tratamento</h2>
              <p>
                O tratamento com óleo de CBD medicinal é autorizada pela ANVISA e milhares de pacientes já
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
              <Link to={'depoimentos'} smooth={true} duration={1000}>
                <button>Ver depoimentos</button>
              </Link>
            </div>
          </div>
          <div className={'third-right-wrapper'} data-aos="fade-left">
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
                <div className={'content-container'} data-aos="fade-up">
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
                <div className={'content-container'} data-aos="fade-up">
                  <img src={Two} alt={'num-two'}/>
                  <div className={'text-wrapper'}>
                    <p>
                      Selecione:
                      <br/>
                      <br/>
                      Profissional, data, hora, valor e forma de pagamento e confirme sua consulta.
                    </p>
                  </div>
                </div>
                <div className={'content-container'} data-aos="fade-up">
                  <img src={Three} alt={'num-three'}/>
                  <div className={'text-wrapper'}>
                    <p>
                      Durante a consulta o profissional irá avaliar seu objetivo terapêutico e indicar a melhor opção
                      para
                      seu tratamento.
                    </p>
                  </div>
                </div>
                <div className={'content-container'} data-aos="fade-up">
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
          <div className={'bottom-wrapper'} data-aos="fade-up">
            <h1>Você está a um passo do tratamento ideal</h1>
            <button onClick={handleModalClick}>AGENDAR CONSULTA</button>
          </div>
        </div>
      </FourthSection>
      <FifthSection id={'depoimentos'}>
        <div className={'fifth-wrapper'}>
          <div className={'fifth-first-container'}>
            <div className={'text-wrapper'}>
              <h2>DEPOIMENTOS DE</h2>
              <h1>PACIENTES SATISFEITOS</h1>
            </div>
          </div>
          <div className={'fifth-second-container'} data-aos="fade-up">
            <Carousel />
          </div>
          <div className={'fifth-third-container'} data-aos="fade-up">
            <h1>Você está a um passo do tratamento ideal</h1>
            <button onClick={handleModalClick}>QUERO INICIAR</button>
          </div>
        </div>
      </FifthSection>
      <SixthSection id={'conheca'}>
        <div className={'six-wrapper'}>
          <div className={'six-left'} data-aos="fade-right">
            <img src={Woman} alt={'Ôta muié'}/>
          </div>
          <div className={'six-right'} data-aos="fade-left">
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
      <SeventhSection id={'faq'}>
        <div className={'seven-wrapper'}>
          <div className={'seven-left'}>
            <div className={'text-n-text-wrapper'}>
              <p className={'seven-pre-title'}>FAQ</p>
              <h1 className={'seven-title'}>Perguntas Frequentes</h1>
              <div className={'faq-wrapper'}>
                <Faq faqs={faqs}/>
              </div>
            </div>
            <div >
              <img src={ContaGota} alt={'frasco-conta-gota'}/>
            </div>
          </div>
          <div className={'seven-text-wrapper'}>
            <h1>
              Possui alguma dúvida?
            </h1>
            <p>Entre em contato que lhe explicaremos como funciona todo o processo de maneira simples e prática.</p>
            <button onClick={handleLinkClick}>
              <i>
                <ImWhatsapp style={{width: '100%', height: '100%'}}/>
              </i>
              Fale conosco
            </button>
          </div>
        </div>

      </SeventhSection>
      <Footer>
        <div className={'footer-wrapper'}>
          <div className={'logo-container'}>
            <img src={Logo} alt={'logo'}/>
            <div className={'respons-icon-container'}>
              <a style={{cursor: 'pointer'}} onClick={handleLinkClick}>
                <FaWhatsapp/>
              </a>
              <a style={{cursor: 'pointer'}} onClick={handleInstaClick}>
                <FaInstagram/>
              </a>
              <a style={{cursor: 'pointer'}} onClick={handleMailClick}>
                <MdOutlineEmail/>
              </a>
            </div>
          </div>
          <div className={'option-container-1'}>
            <a onClick={handleLinkClick} style={{cursor: 'pointer'}}>Tenho prescrição</a>
            <Link to={'faq'} smooth={true} duration={1000}>
              <a style={{cursor: 'pointer'}}>Perguntas frequentes</a>
            </Link>
            <a>Blog</a>
          </div>
          <div className={'option-container-2'}>
            <a style={{cursor: 'pointer'}} onClick={handleModalClick}>Agendamento de consulta</a>
            <Link to={'sobre'} smooth={true} duration={1000}>
              <a style={{cursor: 'pointer'}}>Nosso tratamento</a>
            </Link>
            <Link to={'conheca'} smooth={true} duration={1000}>
              <a style={{cursor: 'pointer'}}>Conheça nossa empresa</a>
            </Link>
            <Link to={'depoimentos'} smooth={true} duration={1000}>
              <a style={{cursor: 'pointer'}}>Depoimentos</a>
            </Link>
          </div>
          <div className={'icons-container'}>
            <a style={{cursor: 'pointer'}} onClick={handleLinkClick}>
              <FaWhatsapp/>
            </a>
            <a style={{cursor: 'pointer'}} onClick={handleInstaClick}>
              <FaInstagram/>
            </a>
            <a style={{cursor: 'pointer'}} onClick={handleMailClick}>
              <MdOutlineEmail/>
            </a>
          </div>
        </div>
        <hr className={'line'}/>
        <div className={'links-wrapper'}>
          <div style={{display: 'flex', gap: '10px'}}>
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

