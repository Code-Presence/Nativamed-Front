import React, {useState} from 'react';
import {FaChevronDown, FaChevronUp} from 'react-icons/fa';
import {Container} from './styles';

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

  return (
    <Container>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
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
