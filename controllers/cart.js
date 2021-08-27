import mysql from 'mysql'
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'shopping-cart'
});


//Get values
export const getCart = (req, res) => {

    db.getConnection((err, connection) => {
        if (err) throw err;
        console.log(`Mysql Connected..`);
        let sql = "SELECT * FROM cart";
        connection.query(sql, (err, result) => {
            connection.release();
            if (err) throw err;
            console.log(result);
            res.send(result);

        })
    })

};