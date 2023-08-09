import React from 'react';
import './Footer.css';
import terrazLogo from '../../images/terraz-logo.png';
import faceLogo from '../../images/facebook-logo.png';
import whatsLogo from '../../images/whatsapp-logo.png';
import linkedinLogo from '../../images/linkedin-logo.png';
import instaLogo from '../../images/instagram-logo.png';

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <h1>Vamos conversar?</h1>
        <a
          href="https://www.google.com/"
          target="_blank"
          // for security
          rel="noopener noreferrer"
        >
          comercial@terraz.com.br
        </a>
      </div>

      <hr className="hr-s" />

      <div>
        <h1>Links úteis</h1>
        <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
          Política de Privacidade
        </a>
        <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
          Termos de Serviço
        </a>
      </div>

      <hr className="hr-sm" />

      <div>
        <h1>Saiba mais</h1>
        <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
          Sobre a imobiliária
        </a>
        <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
          Marketing imobiliário
        </a>
        <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
          Blog
        </a>
        <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
          Trabalhe conosco
        </a>
      </div>

      <hr className="hr-s" />

      <div>
        <h1>Imóveis</h1>
        <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
          Anunciar imóvel
        </a>
        <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
          Agende sua visita
        </a>
      </div>

      <hr className="hr-smb" />

      <div>
        <img className="terraz-logo" src={terrazLogo} alt="terraz-logo" />
      </div>
      <div>
        <p>
          A Terraz é um portal imibiliário com foco em tecnologia e agilidade, obtendo confiabilidade na qualificação de locatários de forma automatizada com objetivo de agendar visitas para a sua imobiliária
        </p>
      </div>

      <div>
        <img className="social-logo" src={faceLogo} alt="facebook-logo" />
        <img className="social-logo" src={whatsLogo} alt="whatsapp-logo" />
        <img className="social-logo" src={linkedinLogo} alt="linkedin-logo" />
        <img className="social-logo" src={instaLogo} alt="instagram-logo" />
      </div>

      <div>
        <p>© TERRAZ l 04.721.081/00001-70 • Todos os direitos reservados • CRECI 2219-J</p>
      </div>
    </div>
  );
}
