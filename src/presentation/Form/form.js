import {data} from "../App/app.js";
import {Food} from "../../domain/Food.js";
import './styles.sass';

export function Form() {

///создаём контейнер (первый div) с формой запроса и присваиваем ему class
const container = document.createElement('div');
container.className = 'container';

///создаём заголовок h1 для всего документа
const titleDoc = document.createElement('h1');
titleDoc.textContent = 'Готовые рецепты, для разнообразия Вашего рациона';

///создаём ещё один div, вложенный в контейнер (первый div), в который поместим заголовок h2; присваиваем ему class
const titleForm =  document.createElement('div');
titleForm.className = 'title';

///создаём заголовок h2
const titleFormH2 = document.createElement('h2');
titleFormH2.textContent = 'Не знаете что приготовить? Предлагаем Вам на выбор готовые рецепты!';

///помещаем заголовок h2 в div для заголовка
titleForm.appendChild(titleFormH2);

///создаём ещё один div, вложенный в контейнер (первый div), в который поместим саму форму; присваиваем ему class
const request =  document.createElement('div');
request.className = 'request';
request.id = 'request';

///создаём элементы самой формы, присваиваем им классы

///label для select
const labelFirst = document.createElement('label');
labelFirst.htmlFor = 'entity';
labelFirst.className = 'label-first';
labelFirst.textContent = 'Что вы хотите приготовить?';

///label для input
const labelSecond = document.createElement('label');
labelSecond.htmlFor = 'idNum';
labelSecond.className = 'label-second ';
labelSecond.textContent = 'Номер рецепта (от 1 до 10):';

///select
const select = document.createElement('select');
select.name = 'select';
select.id = 'entity';
select.className = 'reqItems';

///options
const options = [
    {value: '', text: 'Выберите основное меню:', disabled: true, selected: true, hidden: true},
    {value: 'meat', text: 'Блюда из мяса'},
    {value: 'fish', text: 'Блюда из рыбы'},
    {value: 'vegetarians', text: 'Вегетарианские блюда'},
    {value: 'desserts', text: 'Десерты'}
];
options.forEach(opt => {
    const option = document.createElement('option');
    option.value = opt.value;
    option.textContent = opt.text;

    if(opt.disabled) option.disabled = true;
    if(opt.selected) option.selected = true;
    if(opt.hidden) option.hidden = true;

    select.appendChild(option);
});

///input
const input = document.createElement('input');
input.type = 'number';
input.name = 'idNum';
input.id = 'idNum';
input.className = 'reqItems';
input.min = '1';
input.max =  '10';

///button
const button = document.createElement('button');
button.id = 'fetchBtn';
button.className = 'reqItems';
button.textContent = 'Вперёд!';

///помещаем все элементы формы внутрь div'а для формы
request.appendChild(labelFirst);
request.appendChild(labelSecond);
request.appendChild(select);
request.appendChild(input);
request.appendChild(button);

///создаём div для сообщения о загрузке данных с сервера
const loading = document.createElement('div');
loading.id = 'loading';
loading.className = 'reqItems';
loading.style.display = 'none';
loading.textContent = 'Идёт загрузка...';

///создаём div для ответа с сервера
const resultDiv = document.createElement('div');
resultDiv.className = 'result';
resultDiv.id = 'result';
resultDiv.textContent = '';

///создаём div для выведения ошибки запроса с сервера
const errorDiv = document.createElement('div');
errorDiv.className = 'error';
errorDiv.id = 'error';
errorDiv.textContent = '';

///помещаем все элементы формы внутрь контейнера (первый div)
container.appendChild(titleDoc);
container.appendChild(titleForm);
container.appendChild(request);
container.appendChild(loading);
container.appendChild(resultDiv);
container.appendChild(errorDiv);

///помещаем все div'ы в body 
document.body.appendChild(container);

return container;
}
