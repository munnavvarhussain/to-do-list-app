const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');
const feedback = document.getElementById('feedback');
const toggleTheme = document.getElementById('toggleTheme');

function updateTaskCount() {
  const total = taskList.querySelectorAll('li').length;
  taskCount.textContent = `${total} ${total === 1 ? 'task' : 'tasks'}`;
}

addTaskBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    feedback.classList.remove('hidden');
    return;
  } else {
    feedback.classList.add('hidden');
  }

  const li = document.createElement('li');
  li.textContent = taskText;

  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  const removeBtn = document.createElement('button');
  removeBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  removeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    li.remove();
    updateTaskCount();
  });

  li.appendChild(removeBtn);
  taskList.appendChild(li);
  taskInput.value = "";
  updateTaskCount();
}

// Dark Mode Toggle
toggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  toggleTheme.innerHTML = isDark
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
});

updateTaskCount();
