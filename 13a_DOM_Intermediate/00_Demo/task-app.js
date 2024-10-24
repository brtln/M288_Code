'use strict'

//get task list as JSON-object format
let tasks = getSavedTasks();

//set initial filter of empty
const filters = {
    searchText: '',
    hideCompleted: false
}

//show task list
renderTasks(tasks, filters);

document.querySelector('#search-text')
    .addEventListener('input', (e) =>{
        //set search filter
        filters.searchText = e.target.value;
        //show tasks
        renderTasks(tasks,filters);
    });

document.querySelector('#new-task')
    .addEventListener('submit', (e) =>{
        e.preventDefault();

        //add new task with push-method into JSON-object
        tasks.push({
            id: uuidv4(),
            text: e.target.elements.text.value,
            completed: false
        });
        //save tasks
        saveTasks(tasks);
        //show tasks
        renderTasks(tasks,filters);
        e.target.elements.text.value = '';
    })

document.querySelector('#hide-completed')
    .addEventListener('change', (e) =>{
        //en- or disable completed tasks
        filters.hideCompleted = e.target.checked;
        //show tasks
        renderTasks(tasks, filters);
    })
