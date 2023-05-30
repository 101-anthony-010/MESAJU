const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'mesaju'
});

app.use(cors());

app.use('/products',(req, res) => {
    const query = "SELECT * FROM product"

    connection.query(query, (err, result) => {
        if (err) {
            console.log("Error al optener los products:", err);
            res.status(500).send("Error al optener los products", err);
        } else {
            res.json(result);
        }
    });
});

app.use('/clients',(req, res) => {
    const query = "SELECT * FROM client"

    connection.query(query, (err, result) => {
        if (err) {
            console.log("Error al optener los clients:", err);
            res.status(500).send("Error al optener los clients", err);
        } else {
            res.json(result);
        }
    });
});

app.use('/purchases',(req, res) => {
    const query = "SELECT * FROM purchase"

    connection.query(query, (err, result) => {
        if (err) {
            console.log("Error al optener los clients:", err);
            res.status(500).send("Error al optener los clients", err);
        } else {
            res.json(result);
        }
    });
});

app.use('/sales',(req, res) => {
    const query = "SELECT * FROM sale"

    connection.query(query, (err, result) => {
        if (err) {
            console.log("Error al optener los clients:", err);
            res.status(500).send("Error al optener los clients", err);
        } else {
            res.json(result);
        }
    });
});

app.use('/invoices',(req, res) => {
    const query = "SELECT * FROM invoice"

    connection.query(query, (err, result) => {
        if (err) {
            console.log("Error al optener los clients:", err);
            res.status(500).send("Error al optener los clients", err);
        } else {
            res.json(result);
        }
    });
});

app.listen(port, () => {
    console.log("El servidor esta funcionando")
})