//  Получить данные из базы данных засчёт AJAX запроса
let container = document.querySelector(".products");
// Immediate Implemecation Functioanl E
async function deleteProduct(el) {
    let id = el.getAttribute("data-key");
    let res = await fetch(`/api/del/${id}`);
    let msg = await response.json();
    if (msg) {
        el.remove();
    };
};
(async () => {
    const res = await fetch("/api/vegetables");
    const data = await res.json();
    // container.innerHTML = JSON.stringify(data.data);
    // Вывод карточек с продуктами
    data.data.forEach((obj) => {
        container.innerHTML += `<div onclick = "deleteProduct(this)" class = "products__item" data-key = "${obj._id}">${obj.name}</div>`;
    });
})();