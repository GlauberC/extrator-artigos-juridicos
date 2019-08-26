import React, { useState } from "react";
import api from "./services/api";
import "./styles/reset.css";
import "./styles/style.css";

// palavras_selecionadas = ["prisao", "crime", "contrato", "indenizacao", "tutela", "saude", "consumidor", "trafico", "cobranca", "reforma", "drogas", "habeas", "homicidio", "cautelar", "servidor", "constrangimento", "servico", "seguranca", "posse", "concurso", "razoabilidade", "roubo", "violacao", "vicios", "contradicao", "provimento", "militar", "probatorio", "financeira", "flagrante", "apreensao", "cargo", "administracao", "mandado", "prestacao", "cartao", "autoral", "social", "policial", "imovel", "banco", "remuneracao", "prejuizo", "carreira", "veiculo", "taxa", "legalidade", "ofensa", "natureza", "associacao", "empresa", "absolvicao", "salario", "remessa", "devedor", "participacao", "aumento", "custodia", "divida", "anulacao"]

export default App => {
  const [palavras, setPalavras] = useState("");
  const [artigos, setArtigos] = useState([]);

  const handleClick = async e => {
    e.preventDefault();
    const data = {
      palavras: palavras.replace(/\s+/gi, " ").split(" ")
    };
    const response = await api.post("/arts", data);
    setArtigos(response.data);
  };

  return (
    <div className="interface">
      <header className="header">
        <div className="container">
          <h1>ExtraJuri</h1>
          <nav>
            <a href="#">sobre</a>
          </nav>
        </div>
      </header>
      <main>
        <section className="introducao">
          <p>
            A forma mais fácil de encontrar
            <br /> artigos jurídicos
          </p>
        </section>
        <section className="palavras">
          <h2>Digite as palavras chaves</h2>
          <textarea
            value={palavras}
            onChange={e =>
              setPalavras(
                e.target.value
                  .toLowerCase()
                  .replace(/[,.]/gi, "")
                  .replace(/ç/gi, "c")
              )
            }
            placeholder="ex: banco concurso salario"
            cols="80"
            rows="5"
          />
          <button type="submit" onClick={e => handleClick(e)}>
            consultar
          </button>
        </section>
        <section className="artigos">
          <div className="container">
            <ul>
              {artigos.length !== 0 ? (
                artigos.map(artigo => <li key={artigo.nome}>{artigo.nome} <span className = "frequencia">{artigo.frequencia}%</span></li>)
              ) : (
                <li>Nenhuma consulta feita</li>
              )}
            </ul>
          </div>
        </section>
      </main>
      <footer className="rodape">
        <div className="container">
          <p>GC APPs / UFRN - Alguns direitos reservados</p>
        </div>
      </footer>
    </div>
  );
};

{
  /* <div className="container">

<form>
  <input className="palavras" value={palavras}
    onChange={(e) => setPalavras(e.target.value.toLowerCase().replace(/[,.]/ig, ''))}
    placeholder="Digite as palavras aqui" />
  <button className="btn-enviar" type="submit" onClick={e => handleClick(e)}>enviar</button>
  <div className="chips"></div>
</form>
<h2>Sugestões de artigos:</h2>
<ul>
  {artigos.map(artigo => (
    <li key={artigo.nome}>{artigo.nome}</li>
  ))}
</ul>

</div> */
}
