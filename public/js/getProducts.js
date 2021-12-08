//  Получить данные из базы данных засчёт AJAX запроса
let container = document.querySelector(".products");
// Immediate Implemecation Functioanl E
(async () => {
    const res = await fetch("/api/vegetables");
    const data = await res.json();
    container.innerHTML = JSON.stringify(data.data);
})();