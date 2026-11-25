import Image from "next/image";
import { Box, Github, Layers3, ScanLine } from "lucide-react";
import Scenarios from "./scenarios";

const members = ["Bruno Henrique da Silva", "Marcos Sergio Garcia Filho", "Paulo Cesar Viana"];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#principal">Pular para o conteúdo</a>
      <header className="header">
        <div className="wrap header-inner">
          <a href="#inicio" className="brand" aria-label="Sustentabilidade360, início">
            <Layers3 aria-hidden="true" />
            <span>Sustentabilidade<b>360</b></span>
          </a>
          <nav aria-label="Navegação principal">
            <a href="#cenarios">Cenários</a>
            <a href="#projeto">O projeto</a>
            <a href="#equipe">Equipe</a>
          </nav>
        </div>
      </header>
      <main id="principal">
        <section className="hero" id="inicio" aria-labelledby="titulo">
          <div className="wrap hero-layout">
            <div className="hero-copy">
              <p className="eyebrow"><span />Projeto de extensão SENAI</p>
              <h1 id="titulo">Para onde vai a<br />sobra de <em>concreto?</em></h1>
              <p className="intro">Da mistura fresca ao entulho de obra, descubra quais caminhos o concreto pode seguir depois que sobra.</p>
              <a className="primary" href="#cenarios"><ScanLine size={19} aria-hidden="true" />Explorar cenários</a>
            </div>
            <figure className="hero-figure">
              <Image src="/imagens/viga-i-pre-moldada.webp" alt="Viga de concreto apoiada em calços de madeira, com a extremidade em forma de I em primeiro plano." fill preload sizes="(max-width: 760px) 92vw, 49vw" />
              <figcaption><Box size={16} aria-hidden="true" />Viga I de concreto pré-moldado</figcaption>
            </figure>
          </div>
        </section>
        <section id="cenarios" className="scenarios-section" aria-labelledby="titulo-cenarios">
          <div className="wrap">
            <div className="section-heading">
              <div><p className="eyebrow"><span />Guia interativo</p><h2 id="titulo-cenarios">O que sobrou?</h2></div>
              <p>Escolha um cenário para conhecer os destinos possíveis.</p>
            </div>
            <Scenarios />
          </div>
        </section>
      </main>
      <footer className="wrap credits">
        <div>
          <h2 id="projeto">O projeto</h2>
          <p>O Sustentabilidade360 nasceu no projeto de Extensão 2 do curso superior de Mecatrônica do SENAI. O tema vem do nosso dia a dia na Mtech Premoldados e de uma pergunta comum na fábrica e na obra: o que fazer com o concreto que sobra?</p>
          <a className="repository-link" href="https://github.com/Marrkin/Senai-Sustentabilidade360">
            <Github size={17} aria-hidden="true" /> Ver projeto no GitHub
          </a>
        </div>
        <div>
          <h2 id="equipe">Equipe</h2>
          <ul>{members.map(member => <li key={member}>{member}</li>)}</ul>
        </div>
      </footer>
    </>
  );
}
