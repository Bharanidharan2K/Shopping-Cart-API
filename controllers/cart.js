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

export const createCart = (req, res) => {

    db.getConnection((err, connection) => {
        if (err) throw err;
        console.log(`Mysql Connected..`);
        const id = req.body.id;
        const products = req.body.product;
       
        let sql = "INSERT INTO cart (`id`,`productName`, `productId`, `qty`, `price`, `imgUrl`) VALUES (?)";
        var values = [id, products.name, products.id, 1, products.price, products.imgUrl];
        connection.query(sql, [values], (err, result) => {
            connection.release();
            if (err) throw err;
            console.log(`Cart added..`);
            res.send(result);

        })
    })

};