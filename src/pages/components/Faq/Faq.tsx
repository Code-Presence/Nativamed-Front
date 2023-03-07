import React, {useEffect, useState} from 'react';
import {FaChevronDown, FaChevronUp} from 'react-icons/fa';
import {Container} from './styles';

import Aos from 'aos';
import 'aos/dist/aos.css';
interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  faqs: FaqItem[];
}

const Faq: React.FC<FaqProps> = ({faqs}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleActiveIndex = (index: number) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  return (
    <Container >
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item" data-aos="fade-up">
          <div className="faq-question" onClick={() => toggleActiveIndex(index)}>
            <h1>
              {faq.question}
            </h1>
            {activeIndex === index ? <FaChevronUp/> : <FaChevronDown/>}
          </div>
          {activeIndex === index && <div className="faq-answer">
            <p>
              {faq.answer}
            </p>
          </div>}
        </div>
      ))}
    </Container>
  );
};

export {Faq};
