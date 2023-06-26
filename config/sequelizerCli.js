/*este arquivo vai conectar com o banco de dados*/

module.exports = {
    development:{
        dialect:'postgres',
        host: 'localhost',
        port : 5432,
        database:'onebitflix_development',
        username: 'matos',
        password:'1234'
    }
}
