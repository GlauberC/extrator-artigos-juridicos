import React, { useState } from 'react';
import api from './services/api'
import './app.css'

// palavras_selecionadas = ["prisao", "crime", "contrato", "indenizacao", "tutela", "saude", "consumidor", "trafico", "cobranca", "reforma", "drogas", "habeas", "homicidio", "cautelar", "servidor", "constrangimento", "servico", "seguranca", "posse", "concurso", "razoabilidade", "roubo", "violacao", "vicios", "contradicao", "provimento", "militar", "probatorio", "financeira", "flagrante", "apreensao", "cargo", "administracao", "mandado", "prestacao", "cartao", "autoral", "social", "policial", "imovel", "banco", "remuneracao", "prejuizo", "carreira", "veiculo", "taxa", "legalidade", "ofensa", "natureza", "associacao", "empresa", "absolvicao", "salario", "remessa", "devedor", "participacao", "aumento", "custodia", "divida", "anulacao"]

export default App => {
  const [palavras, setPalavras] = useState('')
  const [artigos, setArtigos] = useState([])

  const handleClick = async (e) => {
    e.preventDefault()
    const data = {
      "palavras": palavras.replace(/\s+/ig, ' ').split(' ')
    }
    const response = await api.post('/artigos',
      data
    )
    let listaArtigos = []
    for (let keys in response.data) {
      listaArtigos.push({ nome: keys, ocorrencia: response.data[keys] })
    }
    listaArtigos.sort(function (a, b) {
      return b.ocorrencia - a.ocorrencia;
    })
    setArtigos(listaArtigos)
  }

  return (
    <div className="App">
      <div className="container">

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

      </div>
    </div>
  );
}
