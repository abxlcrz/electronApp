const mysql=require('promise-mysql');
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'electronApp'
});

const getConnnecton=()=>{
    return connection;
}

module.exports={
    getConnnecton
}