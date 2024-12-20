const http = require("http");

// функція, що запускається при надходженні запиту на сервер
function requestListener(request, response) {
  console.log(request); // обʼєкт запита клієнта
  console.log(response); // обʼєкт відповіді сервера

  // посилаємо відповідь клієнту, який робив запит
  // має бути рядком і має бути обовʼязково присутнім
  response.end("Thanks for visiting!");
}

// створюємо екзеспляр сервера
const server = http.createServer(requestListener);

console.log(server);

const PORT = 3000;

// запуск сервера
server.listen(PORT);