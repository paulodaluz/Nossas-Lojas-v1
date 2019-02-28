function LojaDao(connection) {
    this._connection = connection;
}

LojaDao.prototype.salva = function (loja, callback) {
    this._connection.query('INSERT INTO lojas SET ?', loja, callback);
}

LojaDao.prototype.lista = function (callback) {
    this._connection.query('select * from lojas', callback);
}

LojaDao.prototype.buscaPorId = function (id, callback) {
    this._connection.query("select * from lojas where id = ?", [id], callback);
}

module.exports = function () {
    return LojaDao;
};