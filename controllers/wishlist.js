import mysql from 'mysql'
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'shopping-cart'
});


//Get values
export const getWishlist = (req, res) => {

    db.getConnection((err, connection) => {
        if (err) throw err;
        console.log(`Mysql Connected..`);
        let sql = "SELECT * FROM wishlist";
        connection.query(sql, (err, result) => {
            connection.release();
            if (err) throw err;
            console.log(result);
            res.send(result);

        })
    })

};


export const createWishlist = (req, res) => {

    db.getConnection((err, connection) => {
        if (err) throw err;
        console.log(`Mysql Connected..`);

        const jsonBody = req.body;
        let sql = "INSERT INTO wishlist SET ?";
        connection.query(sql, jsonBody, (err, result) => {
            connection.release();
            if (err) throw err;
            console.log(`Wishlist with id : ${jsonBody.id} added..`);
            res.send(result);

        })
    })

};

//Delete wishlist
export const deleteWishlist = (req, res) => {

    db.getConnection((err, connection) => {
        if (err) throw err;
        console.log(`Mysql Connected..`);

        const getId = req.params.id;
        let sql = "DELETE FROM wishlist WHERE id = ?";
        connection.query(sql, getId, (err, result) => {
            connection.release();
            if (err) throw err;
            console.log(`Wishlist with id : ${getId} Deleted..`);
            res.send(result);

        })
    })

};
