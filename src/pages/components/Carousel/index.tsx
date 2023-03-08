import React, {useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper';

function Carousel() {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const newSlidesPerView = window.outerWidth <= 500 ? 1 : 3;
      setSlidesPerView(newSlidesPerView);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        loop={true}
        grabCursor={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={'content-wrapper'}>
            <h1>Tratamento de Ansiedade</h1>
            <p>O resultado com o óleo está inacreditável, simplesmente a ansiedade, que era um gatilho para uma série de problemas, deixou de existir. Não foi porque estava meio dopado e por isso não estava me sentindo ansioso, como acontecia com outros medicamentos, eu estava com paz interior. A ansiedade foi desligada como se tivessem tirado da tomada. Estou muito espantado mesmo, nada foi tão efetivo, de maneira tão rápida e sem efeitos colaterais como o óleo medicinal.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={'content-wrapper'}>
            <h1>Tratamento de Autismo</h1>
            <p>A adolescência chegou e minha filha começou a se agredir muito, isso estava me matando por dentro, eu não sabia mais o que era ter uma vida sem gritos, sem convulsões e sem auto-agressões. Trocamos de medicação, não resolveu, e então resolvi trocar de médico, já tinha ouvido falar da cannabis medicinal e resolvi testar. Após 2 meses de tratamento já me sinto segura para dizer que devolvi a vida a minha filha e a mim, devolvi o sorriso a minha linda filha, ela não tem mais convulsões, está mais calma e não se agride mais.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={'content-wrapper'}>
            <h1>Tratamento de Epilepsia</h1>
            <p>Minha filha tinha crises convulsivas todos os dias, uma atrás da outra, totalmente sem controle. Utilizava 6 medicações diárias, muitos efeitos colaterais e poucos resultados. Com 30 dias de uso do óleo, ela teve apenas 3 crises, e melhor ainda, sem nenhum efeito colateral. No retorno da consulta, ao relatar a melhora toda eufórica, achando que o Dr nem iria acreditar na melhora milagrosa dela, para nosso espanto o Dr disse não era surpresa nenhuma, pois tinha toda certeza que o óleo viria para mudar nossas vidas.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={'content-wrapper'}>
            <h1>Tratamento de Ansiedade</h1>
            <p>O resultado com o óleo está inacreditável, simplesmente a ansiedade, que era um gatilho para uma série de problemas, deixou de existir. Não foi porque estava meio dopado e por isso não estava me sentindo ansioso, como acontecia com outros medicamentos, eu estava com paz interior. A ansiedade foi desligada como se tivessem tirado da tomada. Estou muito espantado mesmo, nada foi tão efetivo, de maneira tão rápida e sem efeitos colaterais como o óleo medicinal.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={'content-wrapper'}>
            <h1>Tratamento de Autismo</h1>
            <p>A adolescência chegou e minha filha começou a se agredir muito, isso estava me matando por dentro, eu não sabia mais o que era ter uma vida sem gritos, sem convulsões e sem auto-agressões. Trocamos de medicação, não resolveu, e então resolvi trocar de médico, já tinha ouvido falar da cannabis medicinal e resolvi testar. Após 2 meses de tratamento já me sinto segura para dizer que devolvi a vida a minha filha e a mim, devolvi o sorriso a minha linda filha, ela não tem mais convulsões, está mais calma e não se agride mais.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={'content-wrapper'}>
            <h1>Tratamento de Epilepsia</h1>
            <p>Minha filha tinha crises convulsivas todos os dias, uma atrás da outra, totalmente sem controle. Utilizava 6 medicações diárias, muitos efeitos colaterais e poucos resultados. Com 30 dias de uso do óleo, ela teve apenas 3 crises, e melhor ainda, sem nenhum efeito colateral. No retorno da consulta, ao relatar a melhora toda eufórica, achando que o Dr nem iria acreditar na melhora milagrosa dela, para nosso espanto o Dr disse não era surpresa nenhuma, pois tinha toda certeza que o óleo viria para mudar nossas vidas.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export { Carousel };
