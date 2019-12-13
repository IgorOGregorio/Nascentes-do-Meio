const mysql = require('mysql');

function execSQLQuery(sqlQry, res) {
    const connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'nascentes'
    });

    connection.query(sqlQry, function(error, results, fields) {
        if (error)
            res.json(error);
        else
            res.json(results);
        connection.end();
        //console.log('executou!');
    });
}

exports.get = (req, res) => {
    let filter = '';
    if (req.params.id) filter = ` WHERE id = '${req.params.id}'`;
    execSQLQuery('SELECT * FROM ponto_coleta' + filter, res);
};

exports.byName = (req, res) => {
    const nome = req.body.nome;
    execSQLQuery(`SELECT * FROM ponto_coleta where nome = '${nome}'`, res);


};

exports.post = (req, res, next) => {
    const nome = req.body.nome;
    const endereco = req.body.endereco;
    const longitude = req.body.longitude;
    const latitude = req.body.latitude;
    execSQLQuery(`INSERT INTO ponto_coleta(nome, endereco, longitude, latitude) VALUES('${nome}','${endereco}', '${longitude}','${latitude}')`, res);
};


exports.patch = (req, res, next) => {
    const nome = req.body.nome;
    const endereco = req.body.endereco;
    const longitude = req.body.longitude;
    const latitude = req.body.latitude;
    execSQLQuery(`UPDATE ponto_coleta SET nome = '${nome}', endereco = '${endereco}', longitude = '${longitude}', latitude = '${latitude}' WHERE id = ${parseInt(req.params.id)}`, res);

};

/*
exports.delete = (req, res, next) => {
    execSQLQuery('DELETE FROM ponto_coleta WHERE id=' + parseInt(req.params.id), res);
};
*/