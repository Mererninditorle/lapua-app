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
            const table = client.db("knives");
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


router.get("/products", (req,res) => {
    const client = db();
    client.connect(err => {
        if (err) {
            console.log("error")
        } else {
            const table = client.db("knives");
            const col = table.collection("products");
            col.insertOne(req.body, err => {
                if (err) {
                    res.send({"msg": "Connection Error"});
                } else {
                    col.find({"type" : "knife"}).toArray((err, data) => {
                        if (err) {
                            console.log(err);
                            client.close();
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

//Spyderco
router.get("/spyderco", (req,res) => {
    const client = db();
    client.connect(err => {
        if (err) {
            console.log("error")
        } else {
            const table = client.db("knives");
            const col = table.collection("products");
            col.insertOne(req.body, err => {
                if (err) {
                    res.send({"msg": "Connection Error"});
                } else {
                    col.find({"brand": "Spyderco"}).toArray((err, data) => {
                        if (err) {
                            console.log(err);
                            client.close();
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