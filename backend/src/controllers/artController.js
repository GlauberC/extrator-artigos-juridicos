const fetch = require("node-fetch");

module.exports = {
  async check(req, res) {
    const data = req.body;

    const response = await fetch("http://127.0.0.1:5000/artigos", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const arts = await response.json();

    let nArts = 0;
    let listaArtigos = [];
    for (let keys in arts) {
      nArts += Number(arts[keys]);
      listaArtigos.push({ nome: keys, ocorrencia: arts[keys], frequencia: 0 });
    }
    listaArtigos.sort(function(a, b) {
      return b.ocorrencia - a.ocorrencia;
    });

    for (art in listaArtigos) {
      listaArtigos[art].frequencia = Math.round(
        (100 * listaArtigos[art].ocorrencia) / nArts
      );
    }
    return res.json(listaArtigos);
  }
};
