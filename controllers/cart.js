import mysql from 'mysql'
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'shop_cart'
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
        const body = req.body.product;
        let sql = "INSERT INTO cart (`product_name`, `product_id`, `qty`, `price`, `image`) VALUES (?)";
        var values = [body.product_name, body.product_id, 1, body.price, body.image];
        connection.query(sql, [values], (err, result) => {
            connection.release();
            if (err) throw err;
            console.log(`Cart added..`);
            res.send(result);

        })
    })

};

//Delete cart Items
export const deleteCart = (req, res) => {

    db.getConnection((err, connection) => {
        if (err) throw err;
        console.log(`Mysql Connected..`);

        const getId = req.params.id;
        console.log(req.params);
        let sql = "DELETE FROM cart WHERE cart_id = ?";
        connection.query(sql, getId, (err, result) => {
            connection.release();
            if (err) throw err;
            console.log(`Cart with id : ${getId} Deleted..`);
            res.send(result);

        })
    })

};