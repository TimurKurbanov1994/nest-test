# Тестовое задание Backend developer

В данном проекте реализован REST API регистрации и авиторизация пользователя.
### Стек:
NestJS, Postgres, TypeORM, Docker


### Поле для регистрации и валидации
**email -**  Электронная почта. \
**password -** Пароль, состоящая из букв и цифр. не менее 8 символов.

## Основные маршруты:
- GET /users — возвращает всех пользователей
- POST /auth/registration — регистрация пользователя
- POST /auth/login — авторизация пользователя


## Добавленные наработки:
- Добавлен Guards - CanActivate при запросе всех пользователей (GET /users)
- Добавлена глобальная валидация данных
- При ошибки валидации показывает причину.


## Пакеты, которые используются в сборках:
- [class-validator](https://www.npmjs.com/package/class-validator)
- [TypeORM](https://www.npmjs.com/package/typeorm)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [@nestjs/jwt](https://www.npmjs.com/package/@nestjs/jwt)


## Инструкции по запуску:
- Скачать или склонировать репозитори
- Запустить стенд `docker-compose up -d`