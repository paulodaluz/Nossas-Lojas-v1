//pagamentos.js

module.exports = function (app) {
    app.get('/criaLojas', function (req, res) {
        console.log('Recebida requisicao de teste na porta 3000.')
        res.send('OK.');
    });


    app.post("/criaLojas/criaLoja", function (req, res) {
        var loja = req.body;
        console.log('processando aguarde...');

        var connection = app.persistencia.connectionFactory();
        var lojaDao = new app.persistencia.LojaDao(connection); 

        lojaDao.salva(loja, function (exception, result) {
            console.log('loja criada: ' + result);
            res.send(loja);
    })
}
)}