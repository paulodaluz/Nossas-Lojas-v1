//pagamentos.js

module.exports = function (app) {
    app.get('/criaLojas', function (req, res) {
        console.log('Recebida requisicao de teste na porta 3000.')
        res.send('OK.');
    });


    app.post("/criaLojas/criaLoja", function (req, res) {
        var criaLoja = req.body;
        console.log(criaLoja);
        res.send('ok');
    })
}