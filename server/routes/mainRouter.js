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

data = readFile("./data/knives.csv"); // читаем фаил с продуктами
data = data.split("\n"); // убрали точки с запятой
// console.log(data); // -вывели массив без точек с запятой

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


//  Index page
router.get("/", (req,res) => {
    res.render("index", {
        title: "Knife Shop",
        products: products
    });
});

// Category (Brands)
router.get("/admin", (req,res) => {
    res.render("admin", {
        title: "Admin"
    })
});

// Spyderco
router.get("/products", (req, res) => {
    res.render("Category", {
        title: "All knives"
    });
});

router.get("/spyderco", (req, res) => {
    res.render("Category", {
        title: "Spyderco"
    });
});

module.exports = router;