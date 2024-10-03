/*набросок из домашек для GET запроса, надо изменить под наш проект. 
Импортировать сюда файл form.js для получения переменных*/

import {Form} from "./form.js";
import {data} from "../../api.js";

function fetchData() {
    const entity = document.getElementById('entity').value;
    const idNum = document.getElementById('idNum').value;

    ///по идее, создавать новые переменные для загрузки, ответа и ошибки не надо

    loading.style.display = 'block';

            let errors = [];

            if (entity === '') {
                errors.push('Выберите вариант основного меню.');
            }

            if (idNum < 1 || idNum > 10) {
                errors.push('Ошибка: Номер рецепта должен быть от 1 до 10.');
            }

            if (errors.length > 0) {
                loading.style.display = 'none';
                errorDiv.textContent = errors.join(' ');
                errorDiv.style.display = 'block';
                return;
            }

            fetch(`http://3.76.204.114/recipe-api/recipes/random/{type}`) 
                .then(res => {
                    if (!res.ok) {
                        return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
                    }
                    return res.json();
                })
                .then(data => {
                    loading.style.display = 'none'; /*для каждого запроса изменить значение из нашего API, возможно надо будет добавить теги <p> для значений, типа название рецепта, продукты, сам рецепт и картинка(?)*/
                    if (entity === 'people') {
                        resultDiv.textContent = `Имя: ${data.name}`;
                    } else if (entity === 'films') {
                        resultDiv.textContent = `Название: ${data.title}`;
                    } else if (entity === 'planets') {
                        resultDiv.textContent = `Название: ${data.name}`;
                    } else if (entity === 'starships') {
                        resultDiv.textContent = `Название: ${data.name}`;
                    }
                })
                .catch(error => {
                    loading.style.display = 'none';
                    errorDiv.textContent = error;
                })
                .finally(() => {
                    loading.style.display = 'none';
                });
}
