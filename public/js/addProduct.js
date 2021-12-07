const addForm = document.forms.addProduct;
// console.log(addForm); // -- Проверка 
// Добавление товара
addForm.addEventListener("submit", e => {
    e.preventDefault();
    let body = {};
    for (let i = 0; i < e.target.elements.length; i++) {
        let child = e.target.elements[i];
        // console.log(child); -- Проверка
        if (child.name) {
            body[child.name] = child.value;
        };
    };
    console.log(body); // -- вывод продукта
    sendForm(body, e.target.method, "/api/add");
});

// Отправка товара
const sendForm = async(body, method, path) => {
    let response = await fetch(path, {
        method: method,
        headers: {
            "Accept": "application/json", // Получение от клиента на сервер
            "Content-Type": "application/json" // Отправка с клиента на сервер 
        },
        body: JSON.stringify(body)
    });
    let data = await response.json();
    console.log(data);
};