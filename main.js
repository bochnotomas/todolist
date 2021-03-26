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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dom_manipulation */ \"./src/modules/dom_manipulation.js\");\n/* harmony import */ var _modules_display_inbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display_inbox */ \"./src/modules/display_inbox.js\");\n/* harmony import */ var _modules_display_today__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/display_today */ \"./src/modules/display_today.js\");\n/* harmony import */ var _modules_display_thisWeek__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/display_thisWeek */ \"./src/modules/display_thisWeek.js\");\n\r\n\r\n\r\n\r\n\r\nfunction homePage() {\r\n    const inbox = document.querySelector(\"#inbox\")\r\n    const today = document.querySelector(\"#today\")\r\n    const thisWeek = document.querySelector('#thisWeek')\r\n\r\n    ;(0,_modules_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.showMenu)('header-toggle', 'navbar')\r\n    ;(0,_modules_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.changePage)()\r\n    ;(0,_modules_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.displayForm)()\r\n\r\n    inbox.addEventListener('click', (e) => {\r\n        e.preventDefault()\r\n        ;(0,_modules_display_inbox__WEBPACK_IMPORTED_MODULE_1__.displayInbox)()\r\n    })\r\n\r\n    today.addEventListener('click', (e) => {\r\n        e.preventDefault()\r\n        ;(0,_modules_display_today__WEBPACK_IMPORTED_MODULE_2__.displayToday)()\r\n    })\r\n\r\n    thisWeek.addEventListener('click', (e) => {\r\n        e.preventDefault()\r\n        ;(0,_modules_display_thisWeek__WEBPACK_IMPORTED_MODULE_3__.displayThisWeek)()\r\n    })\r\n\r\n}\r\n\r\nhomePage()\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/modules/display_inbox.js":
/*!**************************************!*\
  !*** ./src/modules/display_inbox.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayInbox\": () => (/* binding */ displayInbox)\n/* harmony export */ });\nfunction displayInbox() {\r\n    const logo = document.querySelector(\".header_logo\")\r\n    logo.innerHTML = \"Inbox\"\r\n\r\n    const main = document.querySelector(\"main\")\r\n    main.innerHTML = \"\"\r\n    const toDosContainer = document.createElement(\"section\")\r\n    toDosContainer.classList.add(\"todos_container\")\r\n    toDosContainer.innerHTML = `<div class=\"todo_item_add\"><div class=\"todo_item_showcase\"><span class=\"todo_item_title\">Add Task</span><i class=\"fas fa-plus todo_item_add_icon\"></i></div></div>`\r\n\r\n    const todoItem = document.createElement(\"div\")\r\n    todoItem.classList.add(\"todo_item\")\r\n\r\n    const todoItemShowcase = document.createElement(\"div\")\r\n    todoItemShowcase.classList.add(\"todo_item_showcase\")\r\n\r\n    const todoItemCheck = document.createElement(\"i\")\r\n    todoItemCheck.classList.add(\"far\")\r\n    todoItemCheck.classList.add(\"fa-square\")\r\n    todoItemCheck.classList.add(\"todo_item_check\")\r\n\r\n    const todoItemTitle = document.createElement(\"span\")\r\n    todoItemTitle.classList.add(\"todo_item_title\")\r\n    todoItemTitle.innerHTML = \"Task example\"\r\n\r\n    const todoItemPriority = document.createElement(\"span\")\r\n    todoItemPriority.classList.add(\"todo_item_priority\")\r\n    todoItemPriority.innerHTML = \"normal\"\r\n\r\n    const todoItemDate = document.createElement(\"span\")\r\n    todoItemDate.classList.add(\"todo_item_date\")\r\n    todoItemDate.innerHTML = \"26/03/2020\"\r\n\r\n    const todoItemIcon = document.createElement(\"i\")\r\n    todoItemIcon.classList.add(\"fas\")\r\n    todoItemIcon.classList.add(\"fa-chevron-down\")\r\n    todoItemIcon.classList.add(\"todo_item_icon\")\r\n\r\n    const todoDropdownCollapse = document.createElement(\"div\")\r\n    todoDropdownCollapse.classList.add(\"todo_dropdown_collapse\")\r\n\r\n    const todoDropdownContent = document.createElement(\"div\")\r\n    todoDropdownContent.classList.add(\"todo_dropdown_content\")\r\n\r\n    const todoItemDesc = document.createElement(\"p\")\r\n    todoItemDesc.classList.add(\"todo_item_desc\")\r\n    todoItemDesc.innerHTML = \"Lorem\"\r\n\r\n    main.appendChild(toDosContainer)\r\n    toDosContainer.appendChild(todoItem)\r\n\r\n    todoItem.appendChild(todoItemShowcase)\r\n\r\n    todoItemShowcase.appendChild(todoItemCheck)\r\n    todoItemShowcase.appendChild(todoItemTitle)\r\n    todoItemShowcase.appendChild(todoItemPriority)\r\n    todoItemShowcase.appendChild(todoItemDate)\r\n    todoItemShowcase.appendChild(todoItemIcon)\r\n\r\n    todoItem.appendChild(todoDropdownCollapse)\r\n\r\n    todoDropdownCollapse.appendChild(todoDropdownContent)\r\n    todoDropdownCollapse.appendChild(todoItemDesc)\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/modules/display_inbox.js?");

/***/ }),

/***/ "./src/modules/display_thisWeek.js":
/*!*****************************************!*\
  !*** ./src/modules/display_thisWeek.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayThisWeek\": () => (/* binding */ displayThisWeek)\n/* harmony export */ });\nfunction displayThisWeek() {\r\n    const logo = document.querySelector(\".header_logo\")\r\n    logo.innerHTML = \"This Week\"\r\n\r\n    const main = document.querySelector(\"main\")\r\n    main.innerHTML = \"\"\r\n    const toDosContainer = document.createElement(\"section\")\r\n    toDosContainer.classList.add(\"todos_container\")\r\n    toDosContainer.innerHTML = `<div class=\"todo_item_add\"><div class=\"todo_item_showcase\"><span class=\"todo_item_title\">Add Task</span><i class=\"fas fa-plus todo_item_add_icon\"></i></div></div>`\r\n\r\n    main.appendChild(toDosContainer)\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/modules/display_thisWeek.js?");

/***/ }),

/***/ "./src/modules/display_today.js":
/*!**************************************!*\
  !*** ./src/modules/display_today.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayToday\": () => (/* binding */ displayToday)\n/* harmony export */ });\nfunction displayToday() {\r\n    const logo = document.querySelector(\".header_logo\")\r\n    logo.innerHTML = \"Today\"\r\n\r\n    const main = document.querySelector(\"main\")\r\n    main.innerHTML = \"\"\r\n    const toDosContainer = document.createElement(\"section\")\r\n    toDosContainer.classList.add(\"todos_container\")\r\n    toDosContainer.innerHTML = `<div class=\"todo_item_add\"><div class=\"todo_item_showcase\"><span class=\"todo_item_title\">Add Task</span><i class=\"fas fa-plus todo_item_add_icon\"></i></div></div>`\r\n\r\n    main.appendChild(toDosContainer)\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/modules/display_today.js?");

/***/ }),

/***/ "./src/modules/dom_manipulation.js":
/*!*****************************************!*\
  !*** ./src/modules/dom_manipulation.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showMenu\": () => (/* binding */ showMenu),\n/* harmony export */   \"changePage\": () => (/* binding */ changePage),\n/* harmony export */   \"displayForm\": () => (/* binding */ displayForm)\n/* harmony export */ });\nfunction displayForm() {\r\n    const main = document.querySelector(\"main\")\r\n    main.innerHTML = \"\"\r\n    const toDosContainer = document.createElement(\"section\")\r\n    toDosContainer.classList.add(\"todos_container\")\r\n    toDosContainer.innerHTML = `<div class=\"todo_item_add\"><div class=\"todo_item_showcase\"><span class=\"todo_item_title\">Add Task</span><i class=\"fas fa-plus todo_item_add_icon\"></i></div></div>`\r\n    main.appendChild(toDosContainer)\r\n}\r\n\r\nfunction showMenu(headerToggle, navbarId) {\r\n    const toggleBtn = document.getElementById(headerToggle)\r\n    const nav = document.getElementById(navbarId)\r\n\r\n    if (headerToggle && navbarId) {\r\n        toggleBtn.addEventListener('click', () => {\r\n            nav.classList.toggle('show_menu')\r\n\r\n            toggleBtn.classList.toggle('fa-times')\r\n        })\r\n    }\r\n}\r\n\r\n\r\nfunction changePage() {\r\n\r\n    const linkColor = document.querySelectorAll('.nav_link')\r\n    const nav = document.getElementById('navbar')\r\n    function colorLink() {\r\n        linkColor.forEach(el => el.classList.remove('active')).\r\n            this.classList.add('active')\r\n    }\r\n\r\n    linkColor.forEach(el => el.addEventListener('click', colorLink))\r\n    nav.classList.toggle('show_menu')\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/modules/dom_manipulation.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;