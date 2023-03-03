import React, { useEffect, useRef } from 'react';

interface Props {
  onClose: () => void;
}

const RDStationForm: React.FC<Props> = ({ onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js';
    script.onload = () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const form = new window.RDStationForms('cbfarma-2bdf4b4f83698a82beaf', 'UA-215767176-1').createForm();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      formRef.current = form;
    };
    document.body.appendChild(script);

    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
        formRef.current?.remove();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.body.removeChild(script);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div ref={modalRef} style={{ width: '450px', height: '90%' }}>
        <button onClick={() => { onClose(); formRef.current?.remove(); }}>Fechar</button>
        <div role="main" id="cbfarma-2bdf4b4f83698a82beaf"></div>
      </div>
    </div>
  );
};

export default RDStationForm;
