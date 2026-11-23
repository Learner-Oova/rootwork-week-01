const input = document.getElementById('input');
const inputerror = document.getElementById('inputerror');
const addbtn = document.getElementById('addbtn');
const deletebtn = document.getElementById('deletebtn');
const statusActivebtn = document.getElementById('statusActivebtn');
const statusCompletebtn = document.getElementById('statusCompletebtn');
const submitbtn = document.getElementById('submitbtn');
const submitAlert = document.getElementById('submitAlert');
const allbtn = document.getElementById('allbtn');
const activebtn = document.getElementById('activebtn');
const completedbtn = document.getElementById('completedbtn');
const namevalid = document.getElementById('namevalid');
const active = document.getElementById('active');
const all = document.getElementById('all');
const completed = document.getElementById('completed');

let taskadded = false;
let group;
let group1;
let group2;

let timer;
let task;

let tasks = [];
addbtn.addEventListener('click', () => {
    const value = input.value;
    if(value === ''){
        taskadded = false;
        namevalid.textContent = '';
        inputerror.textContent = 'Task name cannot be empty !';
        clearTimeout(timer);
        timer = setTimeout(() => { inputerror.textContent = '';
        }, 1000);
    }
    else {
        namevalid.textContent = `Task added \u2713`;
        taskadded = true;
        clearTimeout(timer);
        timer = setTimeout(() => { namevalid.textContent = '';
        }, 1000);
    }
});

submitbtn.addEventListener('click', () => {
    if(taskadded){
        if(!statusActivebtn.checked && !statusCompletebtn.checked){
            statuserror.textContent = 'Both status cannot be unchecked !';
            clearTimeout(timer);
            timer = setTimeout(() => {statuserror.textContent = '';}, 1000);
        }
        else {
            submitAlert.textContent = 'Your task has been added !';
            clearTimeout(timer);
            timer = setTimeout(() => {submitAlert.textContent = '';}, 1000);
            task = input.value;
            if(statusActivebtn.checked){
                tasks.push({
                    taskName: task,
                    Status: 'Active'});
            }
            if(statusCompletebtn.checked) {
                tasks.push({
                taskName: task,
                Status: 'Completed'});
            }
            
        }
    }
    else {
        inputerror.textContent = 'Task name cannot be empty !';
        clearTimeout(timer);
        timer = setTimeout(() => { inputerror.textContent = '';
        }, 1000);
    }
});

allbtn.addEventListener('click', () => {
    group = tasks.map(p => ` Task Name: ${p.taskName}, Status: ${p.Status}`).join('\n');
    if(group == ''){
        all.textContent = 'No task added yet';
    }
    else {
    all.textContent = group;
    }
    active.textContent = `Total number of tasks = ${tasks.length}`;
    completed.textContent = '';
    });

activebtn.addEventListener('click', () => {
    let num = tasks.filter(t => t.Status == 'Active');
    group1 = num.map(a => ` Task Name: ${a.taskName}`).join('\n');
    if(group1 == ''){
        active.textContent = 'No active task';
    }
    else {
    active.textContent = group1;
    }
    all.textContent = `Number of active/incompleted task = ${num.length}`;
    completed.textContent = '';
});

completedbtn.addEventListener('click', () => {
    let num = tasks.filter(t => t.Status == 'Completed');
    group2 = num.map(b => ` Task Name: ${b.taskName}`).join('\n');
    if(group2 == ''){
        completed.textContent = 'No completed task';
    }
    else {
    completed.textContent = group2;
    }
    all.textContent = `Number of completed task = ${num.length}`;
    active.textContent = '';
});

deletebtn.addEventListener('click', () => {
    const name = input.value.trim();
    clearTimeout(timer)

    const exist = tasks.some(t=> t.taskName === name);

    if(name === ''|| exist === false){
        inputerror.textContent = 'No task with this name';
        timer = setTimeout(() => {
            inputerror.textContent = '';
        }, 2000)
    }
    else {
        namevalid.textContent = 'Task deleted !';
        timer = setTimeout(() => {
            namevalid.textContent = '';
        }, 2000);
    }
    tasks = tasks.filter(t=> t.taskName!== name);
});