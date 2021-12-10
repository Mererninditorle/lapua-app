const router = require("express").Router();
const db = require("./db.js")
module.exports = router;

router.post("/add", (req,res) => {
    console.log(res.body); // получить тело формы
    const client = db();
    client.connect(err => {
        if (err) {
            console.log("error")
        } else {
            const table = client.db("food");
            const col = table.collection("products");
            col.insertOne(req.body, err => {
                if (err) {
                    console.log(err);
                    client.close();
                } else {
                    res.send({msg: "Succesfully added"}); // вывод успешной операции
                    // Добавить в маиисв новые данные и перезаписать файл csv
                };
                client.close();
            });
            
        };
    });
});

router.get("/vegetables", (req,res) => {
    const client = db();
    client.connect(err => {
        if (err) {
            console.log("error")
        } else {
            const table = client.db("food");
            const col = table.collection("products");
            col.insertOne(req.body, err => {
                if (err) {
                    res.send({"msg": "Connection Error"});
                } else {
                    col.find({"type": "Vegetable"}).toArray((err, data) => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log(data);
                            res.send({"data": data});
                            client.close();
                        };
                    });
                };
            });
        };
    });
});

// Удаление продукта
router.get("/del/:id", (req,res) => {
    const client = db();
    client.connect((err) => {
        if (err) {
            console.log(err);
            client.close();
        } else {
            const col = client.db("food").collection("products");
            console.log(req.params);
            col.deleteOne({"_id": ObjectId(req.params.id)});
            client.close();
            res.send({"msg": "Succesfully deleted"});
        };
    });
});