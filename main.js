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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dom_manipulation */ \"./src/modules/dom_manipulation.js\");\n/* harmony import */ var _modules_display_inbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display_inbox */ \"./src/modules/display_inbox.js\");\n/* harmony import */ var _modules_display_today__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/display_today */ \"./src/modules/display_today.js\");\n/* harmony import */ var _modules_display_thisWeek__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/display_thisWeek */ \"./src/modules/display_thisWeek.js\");\n/* harmony import */ var _modules_input_logic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/input_logic */ \"./src/modules/input_logic.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction homePage() {\r\n    const inbox = document.querySelector(\"#inbox\")\r\n    const today = document.querySelector(\"#today\")\r\n    const thisWeek = document.querySelector('#thisWeek')\r\n    const links = document.querySelectorAll('.nav_link')\r\n\r\n    ;(0,_modules_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.showMenu)('header-toggle', 'navbar')\r\n    ;(0,_modules_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.addTaskDisplay)()\r\n    ;(0,_modules_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.addProjectDisplay)()\r\n    ;(0,_modules_input_logic__WEBPACK_IMPORTED_MODULE_4__.submitForm)()\r\n    ;(0,_modules_input_logic__WEBPACK_IMPORTED_MODULE_4__.clearLocalStorage)()\r\n    ;(0,_modules_display_inbox__WEBPACK_IMPORTED_MODULE_1__.displayInbox)()\r\n    ;(0,_modules_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.setActive)(inbox, links)\r\n\r\n    inbox.addEventListener('click', (e) => {\r\n        e.preventDefault()\r\n        ;(0,_modules_display_inbox__WEBPACK_IMPORTED_MODULE_1__.displayInbox)()\r\n        ;(0,_modules_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.setActive)(inbox, links)\r\n    })\r\n\r\n    today.addEventListener('click', (e) => {\r\n        e.preventDefault()\r\n        ;(0,_modules_display_today__WEBPACK_IMPORTED_MODULE_2__.displayToday)()\r\n        ;(0,_modules_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.setActive)(today, links)\r\n    })\r\n\r\n    thisWeek.addEventListener('click', (e) => {\r\n        e.preventDefault()\r\n        ;(0,_modules_display_thisWeek__WEBPACK_IMPORTED_MODULE_3__.displayThisWeek)()\r\n        ;(0,_modules_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.setActive)(thisWeek, links)\r\n    })\r\n}\r\n\r\nhomePage()\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/modules/display_inbox.js":
/*!**************************************!*\
  !*** ./src/modules/display_inbox.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayInbox\": () => (/* binding */ displayInbox)\n/* harmony export */ });\n/* harmony import */ var _input_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input_logic */ \"./src/modules/input_logic.js\");\n\r\n\r\nfunction displayInbox() {\r\n    const logo = document.querySelector(\".header_logo\")\r\n    logo.innerHTML = \"Inbox\"\r\n\r\n    const toDosContainer = document.querySelector(\".todos_container\")\r\n    toDosContainer.innerHTML = \"\"\r\n\r\n\r\n    if (localStorage.getItem(\"todos\") == null) {\r\n        toDosContainer.innerHTML = \"No tasks yet...\"\r\n    } else {\r\n        let todos = JSON.parse(localStorage.getItem(\"todos\"))\r\n        todos.forEach((el, idx) => {\r\n            const todoItem = document.createElement(\"div\")\r\n            todoItem.classList.add(\"todo_item\")\r\n\r\n            const todoItemShowcase = document.createElement(\"div\")\r\n            todoItemShowcase.classList.add(\"todo_item_showcase\")\r\n\r\n            const todoItemCheck = document.createElement(\"i\")\r\n            todoItemCheck.classList.add(\"far\")\r\n            todoItemCheck.classList.add(\"fa-square\")\r\n            todoItemCheck.classList.add(\"todo_item_check\")\r\n            todoItemCheck.id = idx\r\n            todoItemCheck.onclick = () => {\r\n                ;(0,_input_logic__WEBPACK_IMPORTED_MODULE_0__.removeLocalTodos)(todoItemCheck.id)\r\n            }\r\n            const todoItemTitle = document.createElement(\"span\")\r\n            todoItemTitle.classList.add(\"todo_item_title\")\r\n            todoItemTitle.innerHTML = el.title\r\n\r\n            const todoItemPriority = document.createElement(\"span\")\r\n            todoItemPriority.classList.add(\"todo_item_priority\")\r\n            todoItemPriority.innerHTML = el.priority\r\n\r\n            const todoItemDate = document.createElement(\"span\")\r\n            todoItemDate.classList.add(\"todo_item_date\")\r\n            todoItemDate.innerHTML = el.dueDate\r\n\r\n            const todoItemIcon = document.createElement(\"i\")\r\n            todoItemIcon.classList.add(\"fas\")\r\n            todoItemIcon.classList.add(\"fa-chevron-down\")\r\n            todoItemIcon.classList.add(\"todo_item_icon\")\r\n\r\n            const todoDropdownCollapse = document.createElement(\"div\")\r\n            todoDropdownCollapse.classList.add(\"todo_dropdown_collapse\")\r\n\r\n            const todoDropdownContent = document.createElement(\"div\")\r\n            todoDropdownContent.classList.add(\"todo_dropdown_content\")\r\n\r\n            const todoItemDesc = document.createElement(\"p\")\r\n            todoItemDesc.classList.add(\"todo_item_desc\")\r\n            todoItemDesc.innerHTML = el.description\r\n\r\n            toDosContainer.appendChild(todoItem)\r\n\r\n            todoItem.appendChild(todoItemShowcase)\r\n\r\n            todoItemShowcase.appendChild(todoItemCheck)\r\n            todoItemShowcase.appendChild(todoItemTitle)\r\n            todoItemShowcase.appendChild(todoItemPriority)\r\n            todoItemShowcase.appendChild(todoItemDate)\r\n            todoItemShowcase.appendChild(todoItemIcon)\r\n\r\n            todoItem.appendChild(todoDropdownCollapse)\r\n\r\n            todoDropdownCollapse.appendChild(todoDropdownContent)\r\n            todoDropdownCollapse.appendChild(todoItemDesc)\r\n        })\r\n    }\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/modules/display_inbox.js?");

/***/ }),

/***/ "./src/modules/display_thisWeek.js":
/*!*****************************************!*\
  !*** ./src/modules/display_thisWeek.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayThisWeek\": () => (/* binding */ displayThisWeek)\n/* harmony export */ });\nfunction displayThisWeek() {\r\n    const logo = document.querySelector(\".header_logo\")\r\n    logo.innerHTML = \"This Week\"\r\n\r\n    const toDosContainer = document.querySelector(\".todos_container\")\r\n    toDosContainer.innerHTML = \"\"\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/modules/display_thisWeek.js?");

/***/ }),

/***/ "./src/modules/display_today.js":
/*!**************************************!*\
  !*** ./src/modules/display_today.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayToday\": () => (/* binding */ displayToday)\n/* harmony export */ });\nfunction displayToday() {\r\n    const logo = document.querySelector(\".header_logo\")\r\n    logo.innerHTML = \"Today\"\r\n\r\n    const toDosContainer = document.querySelector(\".todos_container\")\r\n    toDosContainer.innerHTML = \"\"\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/modules/display_today.js?");

/***/ }),

/***/ "./src/modules/dom_manipulation.js":
/*!*****************************************!*\
  !*** ./src/modules/dom_manipulation.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showMenu\": () => (/* binding */ showMenu),\n/* harmony export */   \"addTaskDisplay\": () => (/* binding */ addTaskDisplay),\n/* harmony export */   \"addProjectDisplay\": () => (/* binding */ addProjectDisplay),\n/* harmony export */   \"setActive\": () => (/* binding */ setActive)\n/* harmony export */ });\nfunction showMenu(headerToggle, navbarId) {\r\n    const toggleBtn = document.getElementById(headerToggle)\r\n    const nav = document.getElementById(navbarId)\r\n\r\n    if (headerToggle && navbarId) {\r\n        toggleBtn.addEventListener('click', () => {\r\n            nav.classList.toggle('show_menu')\r\n\r\n            toggleBtn.classList.toggle('fa-times')\r\n        })\r\n    }\r\n}\r\n\r\nfunction addTaskDisplay() {\r\n    const actionButton = document.querySelector(\".todo_item_add\")\r\n    const popUpForm = document.querySelector(\".popup\")\r\n    const blocker = document.querySelector(\".blocker\")\r\n\r\n    actionButton.addEventListener('click', () => {\r\n        popUpForm.classList.toggle(\"hidden\")\r\n    })\r\n\r\n    blocker.addEventListener('click', () => {\r\n        popUpForm.classList.toggle(\"hidden\")\r\n    })\r\n}\r\n\r\nfunction addProjectDisplay() {\r\n    const actionButton = document.querySelector(\"#todo_project_add\")\r\n    const popUpForm = document.querySelector(\".form_dropdown\")\r\n\r\n    actionButton.addEventListener('click', () => {\r\n        popUpForm.classList.toggle(\"hidden\")\r\n\r\n    })\r\n}\r\n\r\n\r\nfunction setActive(link, listOfLinks) {\r\n    listOfLinks.forEach(el => {\r\n        el.classList.remove('active')\r\n    })\r\n\r\n    link.classList.toggle('active')\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/modules/dom_manipulation.js?");

/***/ }),

/***/ "./src/modules/input_logic.js":
/*!************************************!*\
  !*** ./src/modules/input_logic.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"submitForm\": () => (/* binding */ submitForm),\n/* harmony export */   \"removeLocalTodos\": () => (/* binding */ removeLocalTodos),\n/* harmony export */   \"clearLocalStorage\": () => (/* binding */ clearLocalStorage)\n/* harmony export */ });\nclass Task {\r\n\r\n    constructor(title, description, dueDate, priority) {\r\n        this.title = title\r\n        this.description = description\r\n        this.dueDate = dueDate\r\n        this.priority = priority\r\n        this.checked = false\r\n    }\r\n\r\n}\r\n\r\nfunction submitForm() {\r\n    const title = document.querySelector('#task_title')\r\n    const description = document.querySelector('#task_description')\r\n    const dueDate = document.querySelector('#task_dueDate')\r\n    const priority = document.querySelector('#task_priority')\r\n    const submit = document.querySelector('#task_submit')\r\n\r\n    submit.addEventListener('click', () => {\r\n        if (title.value && description.value && dueDate.value && priority.value) {\r\n            console.log(title.value)\r\n            console.log(description.value)\r\n            console.log(dueDate.value)\r\n            console.log(priority.value)\r\n            let task = new Task(title.value, description.value, dueDate.value, priority.value)\r\n            saveLocalTodos(task)\r\n            window.location.reload(true)\r\n        }\r\n    })\r\n}\r\n\r\nfunction saveLocalTodos(todo) {\r\n    let todos\r\n\r\n    if (localStorage.getItem(\"todos\") == null) {\r\n        todos = []\r\n    } else {\r\n        todos = JSON.parse(localStorage.getItem(\"todos\"))\r\n    }\r\n\r\n    todos.push(todo)\r\n    localStorage.setItem(\"todos\", JSON.stringify(todos))\r\n\r\n}\r\n\r\nfunction removeLocalTodos(idx) {\r\n    let todos\r\n\r\n    if (localStorage.getItem(\"todos\") == null) {\r\n        todos = []\r\n    } else {\r\n        todos = JSON.parse(localStorage.getItem(\"todos\"))\r\n    }\r\n\r\n    todos.splice(idx, 1)\r\n    localStorage.setItem(\"todos\", JSON.stringify(todos))\r\n    window.location.reload()\r\n}\r\n\r\n\r\nfunction clearLocalStorage() {\r\n    const clear = document.querySelector(\".todo_item_clear\")\r\n\r\n    clear.addEventListener('click', () => {\r\n        localStorage.clear()\r\n        window.location.reload()\r\n    })\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/modules/input_logic.js?");

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