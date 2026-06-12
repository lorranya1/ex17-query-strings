const express = require('express');
const app = express();

// TODO: GET /busca → 200, JSON com os parâmetros recebidos
// Ex: /busca?q=node          → { "q": "node" }
//     /busca?q=js&pagina=2   → { "q": "js", "pagina": "2" }
//     /busca (sem parâmetros) → { "q": "" }
app.get('/busca', (req, res) => {
  res.json({
    q: req.query.q || '',
    ...(req.query.pagina && { pagina: req.query.pagina })
  });
});

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));
