<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css"
    />
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <header class="position-sticky border border-bottom border-orange">
        <nav class="navbar navbar-expand-lg ">
            <div class="container py-2">
              <img src="./images/logo.png" alt="Логотип" style="width: 48px;">
              <h2 class="ps-2 text-warning fw-bold">MLP</h2>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                    <a class="nav-link"  href="#">О курсе</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Проект</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Технологии</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Контакты</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <main>
          <section class="container-fluid text-bg-light-gray">
          <div class="container py-5">
            <div class="row">
              <div class="col-md-6 text-center text-lg-start px-5 pb-5 pb-lg-0">
                <h1 class="fw-bold">Веб-ресурс </h1>
                <p>
                    fds.</p>
                <p>
                    sdfs.
                </p>
                <a href="#stack" class="btn btn-light">Подробнее</a>
                <a href="#feedback" class="btn btn-dark">Написать нам</a>
              </div>
              <div class="col-md-6 text-center">
                <img class="w-100" src="images/fanstola2123.png">
              </div>
            </div>
          </div>
          </section>
          <section class="bg-dark ">
            <div class="container text-white py-5 px-5">
                <div class="text-center mt-3">
                    <h2 class="fw-bold">Инвестируйте в наш проект</h2>
                </div>
                <div class="text-center">
                    <p>dfs.</p>
                </div>
                <div class="text-center">
                    <button type="button" class="btn headline fs-5">Записаться на курс</button>
                </div>
            </div>
          </section>
         <section id='stack' class="technology container-fluid">
            <div class="py-5 text-bg-light-gray">
              <h2 class="fw-bold text-center">
                Наш стек
              </h2>
            </div>
            <div class="row">
                  <div class="col-md-6 col-lg-3 p-0">
                      <img src="./images/django.jpg" class="img-fluid">
                  </div>
                  <div class="col-md-6 col-lg-3 bg-black text-white d-flex justify-content-center align-items-center h-300">
                      <p class="modal_text">Django</p>
                  </div>
                  <div  class="col-md-6 col-lg-3 p-0">
                    <img src="./images/drf.jpg" class="img-fluid">
                  </div>
                  <div  class="col-md-6 col-lg-3 bg-black text-white d-flex justify-content-center align-items-center  h-300">
                      <p class="modal_text">Django rest framework</p>
                  </div>
                  <div  class="col-md-6 col-lg-3 bg-black text-white d-flex justify-content-center align-items-center  h-300">
                      <p class="modal_text">React</p>
                  </div>
                  <div  class="col-md-6 col-lg-3 p-0">
                      <img src="./images/react.jpg" class="img-fluid">
                  </div>
                  <div class="col-md-6 col-lg-3 bg-black text-white d-flex justify-content-center align-items-center h-300">
                      <p class="modal_text">PostgreSQL</p>
                  </div>
                  <div  class="col-md-6 col-lg-3 p-0">
                      <img src="./images/postgresql.jpg" class="img-fluid">
                  </div>
          </div>
        </section>
        <section id='feedback'>
          <div class="py-5">
            <h2 class="fw-bold text-center">
              Написать нам
            </h2>
          </div>
            <div class="container py-5">
                <div class="text-start pt-5 pt-md-0">
                  <form>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Электронная почта</label>
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" wfd-id="id0" placeholder="Введите адрес электронной почты">
                      <div id="emailHelp" class="form-text">Мы не передаем введенные данные третьим лицам.</div>
                    </div>
                    <div class="mb-3">
                      <label for="InputName" class="form-label">Имя</label>
                      <input type="password" class="form-control" id="exampleInputName1" wfd-id="id1" placeholder="Введите имя" >
                    </div>
                    <div class="mb-3">
                      <label for="textarea" class="form-label">Сообщение</label>
                      <textarea class='form-control' name="massage" id="floatingTextarea" cols="10" rows="10" placeholder="Введите сообщение"></textarea>
                    </div>
                    <div class="text-center">
                      <button type="submit" class="w-25 btn btn-primary bg-light text-black border-black fs-5">Отправить</button>
                    </div>
                  </form>
                </div>
              </div>
            </section>
        </main>
        <footer class="bg-black">
            <div class="text-center py-5">
                sashajjjoy 2023
            </div>
        </footer>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
  </body>
</html>
