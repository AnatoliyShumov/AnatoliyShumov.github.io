const toDoApp = document.getElementById('todoApp');
const createModalWindow = document.querySelector('.modalWindow');
const cancelCreateTodo = document.querySelector('.cancelCreateTodo');
const saveTodo = document.querySelector('.saveTodo');
const todoTitle = document.getElementById('createTodoTitle');
const todoDescription = document.getElementById('createTodoDescription');
const todoPriority = document.querySelector('.createTodoPriority');
const btnGreateTodo = document.querySelector('.btnGreateTodo');
const todoList = document.querySelector('.todoList');
const markOfDoneList = document.querySelector('.markOfDoneList');
const todosPriorityList = document.querySelector('.todosPriority');
const searchInput = document.getElementById('inputSearch');
const createTodoContent = document.querySelector('.createTodoContent');

btnGreateTodo.addEventListener('click', createTodoModal);

function createTodoModal(event, hasEditTodo) {
    createModalWindow.classList.add('show');
    let todo = {};

    // functions for listeners
    const callChangeTodoTitle = inputEvent => todo.title = inputEvent.target.value.trim();
    const callChangeTodoDescription = inputEvent => todo.description = inputEvent.target.value.trim();
    const callTodoPriority = clickEvent => {
        let TODO_PRIORITY = '';

        if(clickEvent.target.tagName === 'BUTTON'){
            todoPriority.classList.toggle('open');
        }
        if(clickEvent.target.tagName === 'LI') {
            TODO_PRIORITY = clickEvent.target.textContent;
            todoPriority.children[1].innerText = TODO_PRIORITY;
            todo.priority = TODO_PRIORITY;
        }
    }
    const callCancelTodo = () => {
        const hasEmptyTitleMessage = document.querySelector('.emptyTitle');

        resetData();
        removeListeners();
        createModalWindow.classList.remove('show');
        hasEmptyTitleMessage ? hasEmptyTitleMessage.remove() : null;
    }
    const callSubmit = submitEvent => {
        const hasEmptyTitleMessage = document.querySelector('.emptyTitle');
        const errorText = 'Please fill this field';

        submitEvent.preventDefault();
        if(todo.title === '') {
            if(!hasEmptyTitleMessage) {
                todoTitle.insertAdjacentHTML('beforebegin', `
        <p class="emptyTitle">${errorText}</p>
      `);
            }
        } else {
            hasEditTodo ? editTodo(todo) : addTodo(todo);
            resetData();
            removeListeners();
            createModalWindow.classList.remove('show');
            hasEmptyTitleMessage ? hasEmptyTitleMessage.remove() : null;
        }
    }
    const setTitleFocus = () => todoTitle.focus();

    if(hasEditTodo) {
        todo = { ...hasEditTodo };
        todoTitle.value = todo.title;
        todoDescription.value = todo.description;
        todoPriority.children[1].innerText = todo.priority;
    } else {
        const newTodo = {
            id: Date.now(),
            done: false,
            description: '',
            title: '',
            priority: 'high'
        };
        todo = { ...newTodo };
    }

    window.setTimeout(setTitleFocus, 0);
    todoTitle.addEventListener('input', callChangeTodoTitle);
    todoDescription.addEventListener('input', callChangeTodoDescription);
    todoPriority.addEventListener('click', callTodoPriority);
    cancelCreateTodo.addEventListener('click', callCancelTodo);
    createTodoContent.addEventListener('submit', callSubmit);

    // remove Listeners and reset Data for new modal window
    function removeListeners() {
        todoTitle.removeEventListener('input', callChangeTodoTitle);
        todoDescription.removeEventListener('input', callChangeTodoDescription);
        todoPriority.removeEventListener('click', callTodoPriority);
        cancelCreateTodo.removeEventListener('click', callCancelTodo);
        createTodoContent.removeEventListener('submit', callSubmit);
    }
    function resetData () {
        todoTitle.value = '';
        todoDescription.value = '';
        todoPriority.children[1].innerText = 'high';
        todoPriority.classList.contains('open') ? null : todoPriority.classList.add('open');
    }
}

const TODOS_CONST = 'todos';
let localStoreTodos = localStorage.getItem(TODOS_CONST);
let todos = localStoreTodos
    ? JSON.parse(localStoreTodos)
        .sort((x,y) => y.done - x.done)
    : [];

if(todos.length > 0 ) renderTodos();

function renderTodo(todo) {
    let itsDoneTodo = todo.done ? 'done' : '';
    todoList.insertAdjacentHTML('afterbegin', `
  <li class="todoItem show ${itsDoneTodo}" data-key="${todo.id}">
    <h2>${todo.title}</h2>
    <p>${todo.description}</p>
    <div class="todoFotter">
      <div class="todoPriority" data-priority="${todo.id}">${todo.priority}</div>
      <div class="dropdownEditTodo">
      <button data-id="${todo.id}">...</button>
      <ul>
        <li>done</li>
        <li>edit</li>
        <li>delete</li>
      </ul>
    </div>
    </div>
  </li>
  `);
    const dropdown = document.querySelector(`[data-id='${todo.id}']`);
    const nextNode = dropdown.nextElementSibling;
    dropdown.addEventListener('click', () => {
        dropdown.parentElement.classList.toggle('open');
    });
    nextNode.addEventListener('click', () => {
        dropdown.parentElement.classList.toggle('open');
    });
}
function renderTodos() {
    todos.forEach(todo => renderTodo(todo));
}

function addTodo(todo) {
    todos.push(todo);
    localStorage.setItem(TODOS_CONST, JSON.stringify(todos));
    renderTodo(todo);
}

function deleteTodo(key) {
    const todo = document.querySelector(`[data-key='${key}']`);
    todos = todos.filter(todo => Number(todo.id) !== Number(key));
    localStorage.setItem(TODOS_CONST, JSON.stringify(todos));
    todo.remove();
}
function toggleDoneTodo(key) {
    const todo = document.querySelector(`[data-key='${key}']`);
    const findTodo = todos.find(item => Number(item.id) === Number(key));

    // reverse todoItems in DOM
    todo.remove();
    todo.classList.contains('done') ? todoList.prepend(todo) : todoList.append(todo);
    todo.classList.toggle('done');

    // change todo.done in todos
    findTodo.done = todo.classList.contains('done');
    localStorage.setItem(TODOS_CONST, JSON.stringify(todos));
}
function editTodo(item) {
    const todo = document.querySelector(`[data-key='${item.id}']`);
    const title = todo.children[0];
    const description = todo.children[1];
    const priority = todo.children[2].children[0];

    title.innerText = item.title;
    description.innerText = item.description;
    priority.innerText = item.priority;

    todos = todos.map(todoItem => {
        if(Number(todoItem.id) === Number(item.id)){
            todoItem = { ...item };
        }
        return todoItem;
    });
    localStorage.setItem(TODOS_CONST, JSON.stringify(todos));
}

function sortedRender(sortBy) {
    todos.forEach(item => {
        const itemTodo = document.querySelector(`[data-key='${item.id}']`);
        const itemPriority = document.querySelector(`[data-priority='${item.id}']`);
        const visibleTodo = itemTodo.classList.contains('show');
        const todoDone = itemTodo.classList.contains('done');

        if(sortBy.searchText !== ''){
            if(!item.title.includes(sortBy.searchText)){
                itemTodo.classList.remove('show');
            } else {
                visibleTodo ? null : itemTodo.classList.add('show');
            }
        } else {
            visibleTodo ? null : itemTodo.classList.add('show');
        }

        if(sortBy.priority !== 'all'){
            if(sortBy.priority !== itemPriority.textContent){
                itemTodo.classList.remove('show');
            }
        }

        switch(sortBy.completed) {
            case 'open': {
                if(todoDone) {
                    itemTodo.classList.remove('show');
                }
                break;
            }
            case 'done': {
                if(!todoDone) {
                    itemTodo.classList.remove('show');
                }
                break;
            }
        }
    });
}

todoList.addEventListener('click', event => {
    let itsFindNode = event.target.parentElement !== todoList;
    if(event.target.tagName === 'LI' && itsFindNode) {
        const todoItem = event.target.parentElement.parentElement.parentElement.parentElement;
        const itemKey = todoItem.dataset.key;

        switch (event.target.textContent) {
            case 'delete': {
                deleteTodo(itemKey);
                break;
            }
            case 'done': {
                toggleDoneTodo(itemKey);
                break;
            }
            case 'edit': {
                const findTodo = todos.find(item => Number(item.id) === Number(itemKey));
                createTodoModal(null, findTodo);
                break;
            }
        }
    }
});

const sortBy = {
    searchText: '',
    priority: 'all',
    completed: 'all',
};

function dropDown(elem) {
    let titleDropdownText = 'all';
    elem.addEventListener('click', (event) => {
        titleDropdownText = event.target.textContent;
        elem.children[0].innerText = titleDropdownText;

        if(elem === markOfDoneList) {
            sortBy.completed = titleDropdownText;
            sortedRender(sortBy);
        }
        if(elem === todosPriorityList) {
            sortBy.priority = titleDropdownText;
            sortedRender(sortBy);
        }
        if(event.target.tagName === 'BUTTON'){
            elem.classList.toggle('open');
        }
    });
}

function searchByTitle(elem) {
    elem.addEventListener('input', (event) => {
        sortBy.searchText = event.target.value.trim();
        sortedRender(sortBy);
    });
}

searchByTitle(searchInput);
dropDown(markOfDoneList);
dropDown(todosPriorityList);
