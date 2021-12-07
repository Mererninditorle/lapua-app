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