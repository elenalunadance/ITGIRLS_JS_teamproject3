/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/application/DataFetcher.js":
/*!****************************************!*\
  !*** ./src/application/DataFetcher.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _infrastructure_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../infrastructure/api */ \"./src/infrastructure/api.js\");\n/* harmony import */ var _domain_Meat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domain/Meat */ \"./src/domain/Meat.js\");\n/* harmony import */ var _domain_Fish__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domain/Fish */ \"./src/domain/Fish.js\");\n/* harmony import */ var _domain_Vegetables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../domain/Vegetables */ \"./src/domain/Vegetables.js\");\n/* harmony import */ var _domain_Dessert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../domain/Dessert */ \"./src/domain/Dessert.js\");\n\n\n\n\n\nclass DataFetcher {\n  fetchRecipes() {\n    return _infrastructure_api__WEBPACK_IMPORTED_MODULE_0__.data.map(({\n      type,\n      ingredients,\n      body\n    }) => {\n      if (type === \"meat\") {\n        return new _domain_Meat__WEBPACK_IMPORTED_MODULE_1__.Meat(ingredients, body);\n      }\n      if (type === \"fish\") {\n        return new _domain_Fish__WEBPACK_IMPORTED_MODULE_2__.Fish(ingredients, body);\n      }\n      if (type === \"vegetables\") {\n        return new _domain_Vegetables__WEBPACK_IMPORTED_MODULE_3__.Vegetables(ingredients, body);\n      }\n      return new _domain_Dessert__WEBPACK_IMPORTED_MODULE_4__.Dessert(ingredients, body);\n    });\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new DataFetcher());\n\n//# sourceURL=webpack://week17/./src/application/DataFetcher.js?");

/***/ }),

/***/ "./src/domain/Dessert.js":
/*!*******************************!*\
  !*** ./src/domain/Dessert.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Dessert: () => (/* binding */ Dessert)\n/* harmony export */ });\n/* harmony import */ var _Food__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Food */ \"./src/domain/Food.js\");\n\nclass Dessert extends _Food__WEBPACK_IMPORTED_MODULE_0__.Food {\n  #image;\n  constructor(ingredients, body, image) {\n    super(\"dessert\", ingredients, body, image);\n  }\n  getImage() {\n    return this.#image;\n  }\n}\n\n//# sourceURL=webpack://week17/./src/domain/Dessert.js?");

/***/ }),

/***/ "./src/domain/Fish.js":
/*!****************************!*\
  !*** ./src/domain/Fish.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Fish: () => (/* binding */ Fish)\n/* harmony export */ });\n/* harmony import */ var _Food__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Food */ \"./src/domain/Food.js\");\n\nclass Fish extends _Food__WEBPACK_IMPORTED_MODULE_0__.Food {\n  #image;\n  constructor(ingredients, body, image) {\n    super(\"fish\", ingredients, body, image);\n  }\n  getImage() {\n    return this.#image;\n  }\n}\n\n//# sourceURL=webpack://week17/./src/domain/Fish.js?");

/***/ }),

/***/ "./src/domain/Food.js":
/*!****************************!*\
  !*** ./src/domain/Food.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Food: () => (/* binding */ Food)\n/* harmony export */ });\nclass Food {\n  #type;\n  #ingredients;\n  #body;\n  constructor(type, ingredients, body) {\n    this.#type = type;\n    this.#ingredients = ingredients;\n    this.#body = body;\n  }\n  getInfo() {\n    //методы \n    return {\n      type: this.#type,\n      ingredients: this.#ingredients,\n      body: this.#body\n    };\n  }\n}\n\n//# sourceURL=webpack://week17/./src/domain/Food.js?");

/***/ }),

/***/ "./src/domain/Meat.js":
/*!****************************!*\
  !*** ./src/domain/Meat.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Meat: () => (/* binding */ Meat)\n/* harmony export */ });\n/* harmony import */ var _Food__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Food */ \"./src/domain/Food.js\");\n\nclass Meat extends _Food__WEBPACK_IMPORTED_MODULE_0__.Food {\n  #image;\n  constructor(ingredients, body, image) {\n    super(\"meat\", ingredients, body, image);\n  }\n  getImage() {\n    return this.#image;\n  }\n}\n\n//# sourceURL=webpack://week17/./src/domain/Meat.js?");

/***/ }),

/***/ "./src/domain/Vegetables.js":
/*!**********************************!*\
  !*** ./src/domain/Vegetables.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Vegetables: () => (/* binding */ Vegetables)\n/* harmony export */ });\n/* harmony import */ var _Food__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Food */ \"./src/domain/Food.js\");\n\nclass Vegetables extends _Food__WEBPACK_IMPORTED_MODULE_0__.Food {\n  #image;\n  constructor(ingredients, body, image) {\n    super(\"vegetables\", ingredients, body, image);\n  }\n  getImage() {\n    return this.#image;\n  }\n}\n\n//# sourceURL=webpack://week17/./src/domain/Vegetables.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _presentation_list_listView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./presentation/list/listView */ \"./src/presentation/list/listView.js\");\n\ndocument.body.appendChild((0,_presentation_list_listView__WEBPACK_IMPORTED_MODULE_0__.listView)());\n\n//# sourceURL=webpack://week17/./src/index.js?");

/***/ }),

/***/ "./src/infrastructure/api.js":
/*!***********************************!*\
  !*** ./src/infrastructure/api.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   data: () => (/* binding */ data)\n/* harmony export */ });\nconst data = [{\n  id: 1,\n  title: \"Жаркое по-деревенски\",\n  type: \"meat\",\n  ingredients: \"Продукты: свинная корейка - 1 кг, сало свиное свежее - 50 гр, масло сливочное - 50 гр., картофель - 1 кг.',- перец болгарский – 1 шт., морковь – 2 шт., лук репчатый – 2 шт., чеснок – 2 зубчика, зелень свежая – по вкусу, зелень сушёная – по вкусу, перец чёрный горошком – по вкусу, перец чёрный молотый – по вкусу, соль – по вкусу\",\n  body: \"В сотейнике растопить сало, нарезанное мелкими кубиками. Добавить мясо, нарезанное небольшими кусочками. Обжарить до румяной корочки. Затем добавить морковь, нарезанную кружочками. Обжаривать 5 минут. Лук, нарезанный полукольцами. Обжаривать 5 минут. Болгарский перец, нарезанный дольками. Ещё 5 минут. Добавить крупно нарезанный картофель, кусочек сливочного масла, 200 мл воды, специи, сушёную петрушку и соль. Не перемешивать. Накрыть крышкой, убавить огонь и тушить на медленном огне 40 минут. В конце приготовления добавить нарезанную свежую зелень, измельчённый чеснок. Перемешать и снять с огня. Приятного аппетита!\",\n  image: \"https://img1.russianfood.com/dycontent/images_upl/465/big_464858.jpg\"\n}, {\n  id: 2,\n  title: \"Мясо по-тайски\",\n  type: \"meat\",\n  ingredients: \"Продукты: свинина - 700 гр., перец болгарский - 1 шт., морковь - 1 шт., лук репчатый - 1 шт., чеснок - 1 зубчик, соус соевый - 5 ст. ложек, лимон (сок) - 1 шт., мед - 3 ст. ложки\",\n  body: \"Мясо нарезать тонкими продолговатыми полосками. Приготовить маринад. Для этого перемешать соевый соус, сок одного лимона и мед. Залить маринадом мясо. Добавить мелко рубленный чеснок и дать промариноваться около 30 минут. Тем временем нарезать лук полукольцами. Морковь нарезать брусочками. Перец - соломкой. Выложить мясо на разогретую сковороду с маслом (маринад пока что в сковороду не выливать). Обжарить мясо почти до готовности (для тонких кусочков свинины достаточно 10 минут). Обжаренное мясо выложить на тарелку. В этой же сковороде слегка обжарить все нарезанные овощи (минут 7). Затем добавить мясо и влить маринад. Протушить мясо с овощами еще около 7 минут. По желанию досолить и добавить молотый перец. К такому мясу по-тайски на гарнир отлично подойдет рассыпчатый рис. Приятного аппетита!\",\n  image: \"https://media.ovkuse.ru/images/recipes/6426cd60-dbf1-41ea-904c-4e158fb2ba0e/6426cd60-dbf1-41ea-904c-4e158fb2ba0e_420_420.webp\"\n}, {\n  id: 3,\n  title: \"Минтай, тушеный в сметане\",\n  type: \"fish\",\n  ingredients: \"Продукты: Продукты: филе минтая – 600-700 гр.,  сметана 20% - 200 мл., морковь – 1 шт., лук репчатый – 1 шт.,  масло растительное – 2 ст. л., мука пшеничная – 1 ст. л.,  мускатный орех молотый – 1 ч. л., соль – по вкусу, перец чёрный молотый – по вкусу\",\n  body: \"Филе минтая хорошо промываем, обсушиваем бумажным полотенцем и нарезаем на порционные кусочки. Перекладываем рыбу в миску. Солим, перчим по вкусу и оставляем на 15-20 минут. Лук мелко нарезаем. Морковь трем на крупной терке. В сковороде на растительном масле обжариваем лук с морковью 4-5 минут. Снимаем сковороду с нагрева. Посыпаем морковь с луком мукой и быстро перемешиваем, чтобы не образовались комки. Туда же вливаем воду и тщательно перемешиваем. Возвращаем сковороду на нагрев, доводим содержимое до кипения и добавляем сметану. Солим, перчим, всыпаем мускатный орех и перемешиваем. В получившийся соус выкладываем куски минтая. Накрываем сковороду крышкой. Тушим рыбу в сметане до готовности (20-25 минут). Приятного аппетита!\",\n  image: \"https://img1.russianfood.com/dycontent/images_upl/313/big_312941.jpg\"\n}, {\n  id: 4,\n  title: \"Овощное рагу с рыбой и маслинами\",\n  type: \"fish\",\n  ingredients: \"Продукты (на 3 порции):филе белой рыбы (например, хек) – 300 гр., картофель – 300 гр., помидоры – 100 гр., перец болгарский – 1 шт., лук репчатый – 1 шт., чеснок – 2 зубчика,  маслины – 50 гр., томатный сок – 200 мл., сок лимона – 2 ст. л.,  масло растительное – 2 ст. л., соль – по вкусу, перец чёрный молотый – по вкусу, зелень свежая – для сервировки\",\n  body: \"Очистите лук. Сладкий перец очистите от семян. Нарежьте перец и лук некрупными кусочками. Картофель очистите и нарежьте небольшими кусочками. Помидоры нарежьте некрупно. Сковороду разогрейте и влейте растительное масло. Выложите в сковороду лук и сладкий перец, обжарьте 3-4 минуты. Добавьте в сковороду картофель. Влейте 150 мл воды, накройте сковороду крышкой и тушите 15 минут. Спустя время добавьте в сковороду помидоры, измельченный чеснок, соль и молотый перец. Добавьте томатный сок и тушите овощи 10-15 минут. Рыбу нарежьте небольшими кусочками и выложите поверх овощей. Сбрызните лимонным соком. Добавьте маслины. Накройте сковороду крышкой и готовьте 10 минут. Посыпьте зеленью. Овощное рагу с рыбой и маслинами готово к подаче. Приятного аппетита!\",\n  image: \"https://img1.russianfood.com/dycontent/images_upl/713/big_712162.jpg\"\n}, {\n  id: 5,\n  title: \"Котлеты из гречки и фасоли\",\n  type: \"cereals\",\n  ingredients: \"Продукты: фасоль (в сухом виде) – 200 гр., крупа гречневая – 100 гр., лук репчатый – 160 гр., масло растительное – 3 ст. л., перец чёрный молотый – по вкусу, соль – по вкусу\",\n  body: \"Можно использовать и консервированную фасоль, тогда время приготовления значительно сократится. Фасоль предварительно замачиваем: заливаем в кастрюле водой и оставляем на 4 часа (или на ночь). После воду сливаем. Фасоль заливаем чистой водой (около 1 л). Варим после закипания 40-90 минут, до мягкости (зависит от сорта). Пока варится фасоль, гречневую крупу промываем, заливаем в кастрюле водой (200-250 мл). Доводим воду до закипания и варим гречку на маленьком огне под крышкой 15-20 минут, до готовности и полного впитывания жидкости. Готовую гречку оставляем полностью остыть. Готовую фасоль откидываем на дуршлаг, чтобы стекла вся жидкость. Даём полностью остыть. Затем перекладываем в миску. Репчатый лук очищаем и нарезаем некрупными кубиками. В сковороде разогреваем 1-2 ст. ложки растительного масла и обжариваем лук до мягкости и подрумянивания, около 7 минут. Гречку перекладываем в миску с фасолью. Туда же - обжаренный лук, соль, перец и сушёный чеснок. Превращаем всё в пюре погружным блендером до однородности. Смоченными водой руками формируем котлеты. Выкладываем котлеты на сковороду с разогретым растительным маслом (1-2 ст. ложки). Обжариваем на среднем огне по 2-3 минуты с каждой стороны без крышки, до подрумянивания. Готовые котлеты перекладываем на бумажное полотенце для впитывания масла, а затем - на тарелку. Горячие котлеты очень мягкие, перекладывать их нужно осторожно. После небольшого остывания котлеты хорошо держат форму. Котлеты из гречки и фасоли можно подавать как отдельное блюдо, а также дополнять различными соусами или салатами. Приятного аппетита!\",\n  image: \"https://img1.russianfood.com/dycontent/images_upl/716/big_715372.jpg\"\n}, {\n  id: 6,\n  title: \"Рис с грибами и соевым соусом\",\n  type: \"cereals\",\n  ingredients: \"Продукты: рис круглозёрный – 200 гр., шампиньоны – 200 гр., лук репчатый – 1 шт., морковь – 1 шт., кетчуп – 2 ст. л.,  хмели-сунели – по вкусу, масло растительное – 4 ст. л., соль – по вкусу, перец чёрный молотый – по вкусу\",\n  body: \"Подготовьте необходимые ингредиенты. Ещё понадобится 450 мл крутого кипятка. Со шляпок шампиньонов снимите кожицу, с ножек счистите загрязнения. Нарежьте грибы тонкими пластинками. В сковороде разогрейте растительное масло, выложите грибы и обжарьте на сильном огне, помешивая, 5 минут. Лук и морковь очистите. Лук нарежьте тонкими четверть-кольцами или полукольцами (в зависимости от размера лука), а морковь – соломкой. Выложите лук с морковью и грибами, обжарьте всё вместе ещё 5 минут. Рис промойте, несколько раз меняя воду. Отправьте рис в сковороду. Добавьте кетчуп, соевый соус, соль, чёрный молотый перец и хмели-сунели. Содержимое сковороды перемешайте. Влейте крутой кипяток (450 мл). Доведите жидкость до кипения, убавьте огонь до минимума. Готовьте содержимое сковороды под крышкой до выпаривания жидкости и готовности риса (мне понадобилось 25 минут). Рис с грибами и соевым соусом, приготовленный на сковороде, готов. Подавайте в горячем виде в качестве самостоятельного блюда или как гарнир. Приятного аппетита!\",\n  image: \"https://img1.russianfood.com/dycontent/images_upl/632/big_631284.jpg\"\n}, {\n  id: 7,\n  title: \"Пирожное 'Картошка'\",\n  type: \"dessert\",\n  ingredients: \"Продукты: печенье – 250 гр., молоко – 75 мл., масло сливочное – 50 гр., сахар – 50 гр., какао-порошок – 3 ст. л.\",\n  body: \"Измельчаем печенье в крошку с помощью блендера. В глубоком сотейнике смешиваем сахар и какао, одну столовую ложку какао оставляем для посыпания пирожных. Добавляем молоко. Перемешиваем все до однородного состояния. Добавляем сливочное масло. Ставим сотейник на плиту. На среднем огне, при постоянном помешивании, доводим смесь до кипения. Снимаем сотейник с огня и даем остыть. К оставшемуся какао добавляем 1 ст. ложку измельченного печенья. К измельченному печенью добавляем остывшую смесь. Перемешиваем все до однородности. Из полученной массы формируем круглые или овальные пирожные. Обваливаем пирожные в смеси из одной столовой ложки какао и одной столовой ложки измельченного печенья. Отправляем пирожные 'Картошка' в холодильник минимум на один час. За это время они пропитаются и будут хорошо держать форму. Пирожное 'Картошка' готово. Приятного аппетита!\",\n  image: \"https://vsedoma-family.ru/sites/default/files/styles/product/public/product/4bdd067b25e8d44a09b70e4f2ccf1aec.jpg?itok=D4Pk8k-6\"\n}, {\n  id: 8,\n  title: \"Банановый чизкейк\",\n  type: \"dessert\",\n  ingredients: \"Продукты: бананы спелые – 200 гр., вода – 100 мл., желатин – 10 гр. (1 ст. л.), йогурт натуральный несладкий – 150 мл.,   масло сливочное – 100 гр., печенье песочное – 200 гр., сахар – 50 гр. (3 ст. л.), творог жирный – 400 гр.\",\n  body: \"Желатин лучше взять быстрорастворимый, с ним приготовление пройдет еще быстрее. Песочное печенье измельчите скалкой или блендером. Влейте в крошки растопленное сливочное масло, перемешайте. Уложите масляную крошку в разьемную форму диаметром 19 см, утрамбуйте пальцами, тыльной стороной ложки или картофелемялкой, например. Поставьте форму в холодильник, пока готовится начинка. Желатин залейте водой и оставьте набухать. В блендере измельчите бананы, йогурт, сахар и творог. У меня блендер маленький, поэтому я разбила продукты на две части и соединила их в миске. Желатин нагрейте немного на водяной бане до полного растворения зерен. Объедините с начинкой, перемешайте. Залейте начинку в форму и поставьте блюдо в холодильник минимум на три часа. Спустя время освободите аккуратно от формы чизкейк из бананов и творога, украсьте свежей мятой и нарезанными бананами, ягодами. Нарежьте чизкейк на порционные кусочки и подавайте к столу. Приятного аппетита!\",\n  image: \"https://img1.russianfood.com/dycontent/images_upl/260/big_259463.jpg\"\n}];\n\n//# sourceURL=webpack://week17/./src/infrastructure/api.js?");

/***/ }),

/***/ "./src/presentation/list/listView.js":
/*!*******************************************!*\
  !*** ./src/presentation/list/listView.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   listView: () => (/* binding */ listView)\n/* harmony export */ });\n/* harmony import */ var _application_DataFetcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../application/DataFetcher */ \"./src/application/DataFetcher.js\");\n/* harmony import */ var _styles_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.sass */ \"./src/presentation/list/styles.sass\");\n\n\nfunction listView() {\n  const recipes = _application_DataFetcher__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetchRecipes();\n  const list = document.createElement(\"ul\");\n  list.className = \"list-view\";\n  return recipes.reduce((acc, item) => {\n    const el = document.createElement(\"li\");\n    const {\n      type,\n      ingredients,\n      body\n    } = item.getInfo();\n    el.innerText = `${type}, ${ingredients},${body}`;\n    list.appendChild(el);\n    return list;\n  }, recipes);\n}\n\n//# sourceURL=webpack://week17/./src/presentation/list/listView.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/presentation/list/styles.sass":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/presentation/list/styles.sass ***!
  \************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.list-view {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.list-view > li {\n  font-family: \"Raleway\", \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://week17/./src/presentation/list/styles.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://week17/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://week17/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/presentation/list/styles.sass":
/*!*******************************************!*\
  !*** ./src/presentation/list/styles.sass ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./styles.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/presentation/list/styles.sass\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_sass__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_sass__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_sass__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_sass__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://week17/./src/presentation/list/styles.sass?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://week17/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://week17/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://week17/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://week17/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://week17/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://week17/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;