document.querySelector('#add-task-btn').addEventListener('click', function() {
    const taskInput = document.querySelector('#task-input');
    const taskText = taskInput.value.trim();
    
    if (taskText) {
        const taskList = document.querySelector('#task-list');
        const taskItem = document.createElement('li');
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                taskItem.classList.add('completed');
            } else {
                taskItem.classList.remove('completed');
            }
        });
        
        const taskLabel = document.createElement('span');
        taskLabel.textContent = taskText;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.addEventListener('click', function() {
            taskList.removeChild(taskItem);
        });
        
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskLabel);
        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);
        
        taskInput.value = '';
    }
});

document.querySelector('#task-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.querySelector('#add-task-btn').click();
    }
});
