//MySQl Connection establish
import mysql from 'mysql'
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'shopping-cart'
});


//Get values
export const getProduct = (req, res) => {

    db.getConnection((err, connection) => {
        if (err) throw err;
        console.log(`Mysql Connected..`);
        let sql = "SELECT * FROM products";
        connection.query(sql, (err, result) => {
            connection.release();
            if (err) throw err;
            console.log(result);
            res.send(result);

        })
    })

};

//Get values
export const getProductById = (req, res) => {
    db.getConnection((err, connection) =>{
        if(err) throw err;
        console.log("MySQL Connected");
        let sql = "SELECT * FROM products WHERE id = ?";
        let id = req.params.id;
        connection.query(sql, id, (err, result) =>{
            connection.release();
            if (err) throw err;
            console.log(result);
            res.send(result);
        })
    })


};