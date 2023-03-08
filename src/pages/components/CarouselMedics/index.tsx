import React, {useEffect, useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import {Autoplay, Navigation, Pagination} from 'swiper';
import {MedicCard} from '../MedicCard/MedicCard';

function CarouselMedics() {
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
        // centeredSlides={true}
        spaceBetween={30}
        loop={true}
        grabCursor={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}

        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

        <SwiperSlide>
          <MedicCard name={'Dr. Felipe Neris'} workType={'Medicina da Família'} CRM={'CRM 25097 - SC'}
            bio={'Médico formado em 2017 pela Univille com experiência de 5 anos em medicina da família + urgência e emergência.\n' +
                       '            Viu na medicina canabinoide a chance de atender seus pacientes de maneira individualizada, focada em "slow\n' +
                       '            medicine", reduzindo polifarmácia dos que sofrem com dor crônica e suas comorbidades associadas e fugindo do\n' +
                       '            modelo de consulta de 20 minutos que domina os consultórios atualmente.'}/>
        </SwiperSlide>

        <SwiperSlide>
          <MedicCard name={'Dr. Felipe Neris'} workType={'Medicina da Família'} CRM={'CRM 25097 - SC'}
            bio={'Médico formado em 2017 pela Univille com experiência de 5 anos em medicina da família + urgência e emergência.\n' +
                       '            Viu na medicina canabinoide a chance de atender seus pacientes de maneira individualizada, focada em "slow\n' +
                       '            medicine", reduzindo polifarmácia dos que sofrem com dor crônica e suas comorbidades associadas e fugindo do\n' +
                       '            modelo de consulta de 20 minutos que domina os consultórios atualmente.'}/>
        </SwiperSlide>

        <SwiperSlide>
          <MedicCard name={'Dr. Felipe Neris'} workType={'Medicina da Família'} CRM={'CRM 25097 - SC'}
            bio={'Médico formado em 2017 pela Univille com experiência de 5 anos em medicina da família + urgência e emergência.\n' +
                       '            Viu na medicina canabinoide a chance de atender seus pacientes de maneira individualizada, focada em "slow\n' +
                       '            medicine", reduzindo polifarmácia dos que sofrem com dor crônica e suas comorbidades associadas e fugindo do\n' +
                       '            modelo de consulta de 20 minutos que domina os consultórios atualmente.'}/>
        </SwiperSlide>

        <SwiperSlide>
          <MedicCard name={'Dr. Felipe Neris'} workType={'Medicina da Família'} CRM={'CRM 25097 - SC'}
            bio={'Médico formado em 2017 pela Univille com experiência de 5 anos em medicina da família + urgência e emergência.\n' +
                       '            Viu na medicina canabinoide a chance de atender seus pacientes de maneira individualizada, focada em "slow\n' +
                       '            medicine", reduzindo polifarmácia dos que sofrem com dor crônica e suas comorbidades associadas e fugindo do\n' +
                       '            modelo de consulta de 20 minutos que domina os consultórios atualmente.'}/>
        </SwiperSlide>

        <SwiperSlide>
          <MedicCard name={'Dr. Felipe Neris'} workType={'Medicina da Família'} CRM={'CRM 25097 - SC'}
            bio={'Médico formado em 2017 pela Univille com experiência de 5 anos em medicina da família + urgência e emergência.\n' +
                       '            Viu na medicina canabinoide a chance de atender seus pacientes de maneira individualizada, focada em "slow\n' +
                       '            medicine", reduzindo polifarmácia dos que sofrem com dor crônica e suas comorbidades associadas e fugindo do\n' +
                       '            modelo de consulta de 20 minutos que domina os consultórios atualmente.'}/>
        </SwiperSlide>

        <SwiperSlide>
          <MedicCard name={'Dr. Felipe Neris'} workType={'Medicina da Família'} CRM={'CRM 25097 - SC'}
            bio={'Médico formado em 2017 pela Univille com experiência de 5 anos em medicina da família + urgência e emergência.\n' +
                       '            Viu na medicina canabinoide a chance de atender seus pacientes de maneira individualizada, focada em "slow\n' +
                       '            medicine", reduzindo polifarmácia dos que sofrem com dor crônica e suas comorbidades associadas e fugindo do\n' +
                       '            modelo de consulta de 20 minutos que domina os consultórios atualmente.'}/>
        </SwiperSlide>

        <SwiperSlide>
          <MedicCard name={'Dr. Felipe Neris'} workType={'Medicina da Família'} CRM={'CRM 25097 - SC'}
            bio={'Médico formado em 2017 pela Univille com experiência de 5 anos em medicina da família + urgência e emergência.\n' +
                       '            Viu na medicina canabinoide a chance de atender seus pacientes de maneira individualizada, focada em "slow\n' +
                       '            medicine", reduzindo polifarmácia dos que sofrem com dor crônica e suas comorbidades associadas e fugindo do\n' +
                       '            modelo de consulta de 20 minutos que domina os consultórios atualmente.'}/>
        </SwiperSlide>

        <SwiperSlide>
          <MedicCard name={'Dr. Felipe Neris'} workType={'Medicina da Família'} CRM={'CRM 25097 - SC'}
            bio={'Médico formado em 2017 pela Univille com experiência de 5 anos em medicina da família + urgência e emergência.\n' +
                       '            Viu na medicina canabinoide a chance de atender seus pacientes de maneira individualizada, focada em "slow\n' +
                       '            medicine", reduzindo polifarmácia dos que sofrem com dor crônica e suas comorbidades associadas e fugindo do\n' +
                       '            modelo de consulta de 20 minutos que domina os consultórios atualmente.'}/>
        </SwiperSlide>

        <SwiperSlide>
          <MedicCard name={'Dr. Felipe Neris'} workType={'Medicina da Família'} CRM={'CRM 25097 - SC'}
            bio={'Médico formado em 2017 pela Univille com experiência de 5 anos em medicina da família + urgência e emergência.\n' +
                       '            Viu na medicina canabinoide a chance de atender seus pacientes de maneira individualizada, focada em "slow\n' +
                       '            medicine", reduzindo polifarmácia dos que sofrem com dor crônica e suas comorbidades associadas e fugindo do\n' +
                       '            modelo de consulta de 20 minutos que domina os consultórios atualmente.'}/>
        </SwiperSlide>


      </Swiper>
    </>
  );
}

export {CarouselMedics};
