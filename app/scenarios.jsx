"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Blocks, BrickWall, ChevronRight, Droplets, X } from "lucide-react";

const scenarios = [
  {
    title: "Concreto fresco",
    image: "fresco",
    icon: Droplets,
    summary: "Mistura que sobrou após a concretagem.",
    heading: "Recuperar areia e brita",
    explanation: "Enquanto a mistura ainda está fresca, uma recicladora pode separar a areia e a brita da pasta de cimento.",
    decision: "A central avalia as características dos materiais recuperados antes de definir em qual mistura poderão ser usados.",
    source: "Pesquisa sobre concreto retornado · Poli-USP",
    url: "https://teses.usp.br/teses/disponiveis/3/3146/tde-07042022-134106/pt-br.html",
  },
  {
    title: "Peça rejeitada",
    image: "peca",
    icon: BrickWall,
    summary: "Pré-moldado com avaria ou fora de especificação.",
    heading: "Avaliar a peça antes do destino",
    explanation: "A fábrica separa a peça e registra o defeito. Essa identificação permite que o responsável técnico avalie a possibilidade de reparo.",
    decision: "A decisão depende do defeito e da função prevista. Se a peça for descartada, o concreto pode seguir para reciclagem.",
    source: "Critérios de avaliação de fábricas · ABCIC",
    url: "https://abcic.org.br/pdf/N.02%20-%20%20SELO%20ABCIC%20Norma%20N2%20-%20rev%204A%20%28mar07%29%202.pdf",
  },
  {
    title: "Entulho endurecido",
    image: "entulho",
    icon: Blocks,
    summary: "Fragmentos de concreto de perdas ou demolições.",
    heading: "Transformar fragmentos em agregado",
    explanation: "Após a separação dos demais resíduos, o concreto pode ser britado e peneirado para obter grãos de diferentes tamanhos.",
    decision: "Ensaios ajudam a definir se o agregado reciclado pode substituir parte da areia ou da brita na fabricação de novos blocos.",
    source: "Estudo sobre blocos com agregado reciclado · IBRACON",
    url: "https://www.scielo.br/j/riem/a/dQWNJzXhYBZQJpMjmzCP3Yq/?lang=pt",
  },
];

export default function Scenarios() {
  const dialog = useRef(null);
  const [selected, setSelected] = useState(scenarios[0]);

  function openScenario(scenario) {
    setSelected(scenario);
    dialog.current.showModal();
  }

  return (
    <>
      <div className="scenario-grid">
        {scenarios.map(scenario => (
          <button className="card" key={scenario.image} onClick={() => openScenario(scenario)} aria-haspopup="dialog" aria-label={'Explorar cenário: ' + scenario.title}>
            <span className="card-picture">
              <Image src={'/imagens/' + scenario.image + '.webp'} alt="" fill sizes="(max-width: 760px) 92vw, 30vw" />
              <span className="card-icon"><scenario.icon size={20} aria-hidden="true" /></span>
            </span>
            <span className="card-body">
              <strong>{scenario.title}</strong>
              <span>{scenario.summary}</span>
              <span className="card-action">Ver destinos <ChevronRight size={16} aria-hidden="true" /></span>
            </span>
          </button>
        ))}
      </div>
      <dialog ref={dialog} aria-labelledby="dialog-title" onClick={event => {
        if (event.target === dialog.current) dialog.current.close();
      }}>
        <article className="detail">
          <div className="detail-picture">
            <Image src={'/imagens/' + selected.image + '.webp'} alt="" fill sizes="520px" />
            <button className="close" aria-label="Fechar cenário" onClick={() => dialog.current.close()}><X size={21} /></button>
          </div>
          <div className="detail-copy">
            <p className="eyebrow"><span />{selected.title}</p>
            <h2 id="dialog-title">{selected.heading}</h2>
            <p>{selected.explanation}</p>
            <p>{selected.decision}</p>
            <a className="source" href={selected.url}>{selected.source}</a>
          </div>
        </article>
      </dialog>
    </>
  );
}
