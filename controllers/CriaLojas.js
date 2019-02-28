module.exports = function (app) {
    app.post("/criaLojas/criaLoja", function (req, res) {
        var loja = req.body;
        console.log('processando aguarde...');

        var loja = req.body;

        req.assert("nome_loja", "Nome da loja é obrigatório.").notEmpty();
        req.assert("endereco", "Endereço da loja é obrigatório.").notEmpty();
        req.assert("celular", "Telefone/Celular da loja é obrigatório e deve ser um decimal.").notEmpty().len(10,12);
        req.assert("cnpj", "CNPJ da loja é obrigatório.").notEmpty().len(18);
        req.assert("horarioDeTrabalho", "Horário de trabalho é obrigatório").notEmpty();
        req.assert("cidade", "Cidade é obrigatória.").notEmpty();
        req.assert("estado", "Estado é obrigatório e deve ter 2 caracteres").notEmpty().len(2, 2);

        var errors = req.validationErrors();

        if (errors) {
            console.log("Erros de validação encontrados");
            res.status(400).send(errors);
            return;
        }
        console.log('criando loja...');



        var connection = app.persistencia.connectionFactory();
        var lojaDao = new app.persistencia.LojaDao(connection); 

        lojaDao.salva(loja, function (exception, result) {
            console.log('Loja criada: ' + result);

            res.status(201).json(loja);
    })
})

    app.put('/criaLojas/edita/:id', function (req, res) {

        var loja = req.body;
        var id = req.params.id;

        loja.id = id;

        var connection = app.persistencia.connectionFactory();
        var lojaDao = new app.persistencia.LojaDao(connection);

        lojaDao.altera(loja, function (erro) {
            if (erro) {
                res.status(500).send(erro);
                return;
            }
            console.log('Loja alterada');
            res.send(loja);
        });

    });

    app.delete('/criaLojas/deleta/:id', function (req, res) {
        var id = req.params.id;

        var connection = app.persistencia.connectionFactory();
        var lojaDao = new app.persistencia.LojaDao(connection);

        lojaDao.deleta(id, function (erro) {
            if (erro) {
                res.status(500).send(erro);
                return;
            }
            console.log('Loja deletada');
            res.status(204).send();
        });
    });


    app.get('/criaLojas/buscaId/:id', function (req, res) {
        var id = req.params.id;

        var connection = app.persistencia.connectionFactory();
        var lojaDao = new app.persistencia.LojaDao(connection);

        lojaDao.buscaPorId(id, function (erro , resultado) {
            if (erro) {
                res.status(500).send(erro);
                return;
            }
            console.log("Loja com o id" + id);
            res.json(resultado);
        });
});



    app.get('/criaLojas/buscaEstado/:estado', function (req, res) {
        var estado = req.params.estado;

        var connection = app.persistencia.connectionFactory();
        var lojaDao = new app.persistencia.LojaDao(connection);

        lojaDao.lista(estado, function (erro, resultado) {
            if (erro) {
                res.status(500).send(erro);
                return;
            }
            console.log("Lojas do estado de " + estado);
            res.json(resultado);
        });
    });
}