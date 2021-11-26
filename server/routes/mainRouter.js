const router = require("express").Router();
const fs = require("fs");

// Занос продуктов и совмщение с названиями--------------------------------------------
// let products = fs.readFileSync("./data/fruit.csv", "utf-8"); // подключаем csv с продуктами
// console.log(products);
// OR
let data = "";
const readFile = (path) => {
    return fs.readFileSync(path, "utf-8");
};

data = readFile("./data/fruit.csv"); // читаем фаил с продуктами
data = data.split("\n"); // убрали точки с запятой
// console.log(data); - вывели массив без точек с запятой

const Product = function(prArr) {
    let names = data[0].split(";"); // указываем строку, где находятся названия [name;b;h;u;kcal;type]
    names.forEach((name, i) => {this[name] = prArr[i]}) // подставляем значения строк по номеру (i) к каждому названию из первой строчки
    // console.log(names);
};
// let first = new Product(data[1].split(";"));
// console.log(first); - вывели первый готовый элемент (Potato)

const products = []; // создали массив для совмещенных названий и продуктов
for (let i = 1; i < data.length; i++) {
    products.push(new Product(data[i].split(";"))); // добавляем в массив продукты
};
// console.log(products); //- вывод готового массива
// ------------------------------------------------------------------------------------------

router.post("/add", (req,res) => {
    console.log(res.body) // получить тело формы
    res.send({msg: "Succesfully added"}) // вывод успешной операции
    // Добавить в маиисв новые данные и перезаписать файл csv
})


router.get("/", (req,res) => {
    res.render("index", {
        title: "Здоровый образ жизни",
        products: products,
        tableCaptions: data[0].split(";")
    });
});



module.exports = router;