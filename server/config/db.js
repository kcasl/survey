const mysql = require('mysql');

const db = mysql.createPool({
    host: 'surveydb.crufonzdw3il.ap-northeast-2.rds.amazonaws.com',
    user: 'admin',
    password: 'casl21331!!',
    database: 'survey_DB',
    port: '3306',
});

module.exports = db;
