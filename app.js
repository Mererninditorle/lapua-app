const express = require("express");
const serverRouter = require("./server/routes/mainRouter");
const dbRouter = require("./server/routes/dbRouter");
const stylus = require("stylus"); // подключаем библиотеку stylus

// const router = require("./");

const app = express();
const port = process.env.PORT || 1911;

app.use(express.json());
app.use(stylus.middleware({
    src: "./public/",
    dest: "./public"
}));

// app.use(stylus.middleware({
//     src: "./public/", - откуда берем файлы stylus
//     dest: "./public" -  куда отправляем файлы stylus
// })); 

app.set("views", "./server/views"); // подключаем препроцессор
app.set("view engine", "pug"); // подключаем движок pug

app.use(express.static("./public")); // указываем расположение шаблонов

app.use("/", serverRouter); 
app.use("/api", dbRouter); 

app.listen(port); // запускаем сервер