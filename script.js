const task_button = document.getElementById('add_button');
const tasks_to_do_list = document.querySelector('#tasks-to-do');

complete_all_button = document.getElementById('completar');
function remove(event)
{
    event.preventDefault();
    this.parentElement.parentElement.remove();
}

function add_task(event)
{
    event.preventDefault();

    const current_task = document.querySelector('#task').value;
    if (current_task == '') 
        return;

    const li = document.createElement('li');
    const div = document.createElement('div');
    div.className = 'task';
    div.appendChild(document.createTextNode(current_task));

    const btn = document.createElement('a');
    btn.href = '#';
    btn.className = 'delete_button';
    btn.id = 'delete_button';
    btn.innerText = '✖';
    btn.addEventListener("click", remove);
    div.appendChild(btn);

    li.appendChild(div);
    tasks_to_do_list.appendChild(li);
    document.querySelector('#task').value = '';
}

tasks_to_do_list.addEventListener('click', function(e)
{
    if (e.target.tagName === 'LI')
    {
        e.target.classList.toggle('checked');
    }
}, false)

function complete_all_tasks(event)
{
    event.preventDefault();
    const tasks = tasks_to_do_list.querySelectorAll('li');
    tasks.forEach(task =>
        {
            if (task.className != 'checked')
                task.classList.toggle('checked');
    });
}


task_button.addEventListener("click", add_task);
complete_all_button.addEventListener("click", complete_all_tasks);