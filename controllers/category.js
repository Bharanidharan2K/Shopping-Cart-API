//MySQl Connection establish
import mysql from 'mysql'
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'shop_cart'
});


//Get values
export const getCategory = (req, res) => {

    db.getConnection((err, connection) => {
        if (err) throw err;
        console.log(`Mysql Connected..`);
        let sql = "SELECT * FROM category";
        connection.query(sql, (err, result) => {
            connection.release();
            if (err) throw err;
            console.log(result);
            res.send(result);

        })
    })

};