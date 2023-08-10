import React from 'react';
import './Footer.css';
import terrazLogo from '../../images/terraz-logo.svg';
import faceLogo from '../../images/facebook-logo.svg';
import whatsLogo from '../../images/whatsapp-logo.svg';
import linkedinLogo from '../../images/linkedin-logo.svg';
import instaLogo from '../../images/instagram-logo.svg';

export default function Footer() {
  return (
    <div className="footer">
      <div className="large-container">
        <div className="medium-container-a">
          <div className="talk-container container">
            <h1>Vamos conversar?</h1>
            <a
              href="mailto:comercial@terraz.com.br"
              target="_blank"
              // for security
              rel="noopener noreferrer"
            >
              comercial@terraz.com.br
            </a>
          </div>

          <hr className="hr-a" />

          <div className="link-container container">
            <h1>Links úteis</h1>
            <a href="https://content.woliver.com.br/public/settings/terraz/Pol%C3%ADtica_de_Privacidade__Cookies_Terraz.pdf" target="_blank" rel="noopener noreferrer">
              Política de Privacidade
            </a>
            <a href="https://www.terraz.com.br/termos-de-servico" target="_blank" rel="noopener noreferrer">
              Termos de Serviço
            </a>
          </div>
        </div>

        <hr className="hr-b" />

        <div className="medium-container-b">
          <div className="know-container container">
            <h1>Saiba mais</h1>
            <a href="https://linktr.ee/imobiliariaterraz" target="_blank" rel="noopener noreferrer">
              Sobre a imobiliária
            </a>
            <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
              Marketing imobiliário
            </a>
            <a href="https://blog.terraz.com.br/" target="_blank" rel="noopener noreferrer">
              Blog
            </a>
            <a href="https://terraz.gupy.io/" target="_blank" rel="noopener noreferrer">
              Trabalhe conosco
            </a>
          </div>

          <hr className="hr-c" />

          <div className="property-container container">
            <h1>Imóveis</h1>
            <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
              Anunciar imóvel
            </a>
            <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
              Agende sua visita
            </a>
          </div>
        </div>
      </div>

      <hr className="hr-d" />

      <div>
        <img className="terraz-logo" src={terrazLogo} alt="terraz-logo" />
      </div>
      <div>
        <p>
          A Terraz é um portal imobiliário com foco em tecnologia e agilidade, obtendo confiabilidade na qualificação de locatários de forma automatizada com objetivo de agendar visitas para a sua imobiliária
        </p>
      </div>

      <div className="social-logos">
        <a href="https://www.facebook.com/TerrazPortalImobiliario" target="_blank" rel="noopener noreferrer">
          <img className="social-logo" src={faceLogo} alt="facebook-logo" />
        </a>
        <a href="https://web.whatsapp.com/send?phone=554899612729" target="_blank" rel="noopener noreferrer">
          <img className="social-logo" src={whatsLogo} alt="whatsapp-logo" />
        </a>
        <a href="https://www.linkedin.com/company/terrazportalimobiliario/" target="_blank" rel="noopener noreferrer">
          <img className="social-logo" src={linkedinLogo} alt="linkedin-logo" />
        </a>
        <a href="https://www.instagram.com/terrazportalimobiliario/" target="_blank" rel="noopener noreferrer">
          <img className="social-logo" src={instaLogo} alt="instagram-logo" />
        </a>
      </div>

      <div>
        <p>© TERRAZ l 04.721.081/00001-70 • Todos os direitos reservados • CRECI 2219-J</p>
      </div>
    </div>
  );
}
