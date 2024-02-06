const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '192.168.100.169',
    user: 'admin',
    password: 'admin123',
    database: 'veterinary',
    port: '3306',
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Conectado a la base de datos!');
});

module.exports = connection;
