const form = document.querySelector(".radio");
const todosList = document.querySelector(".todos");
const clear = document.querySelector(".clear");
const tasks = document.querySelector(".task-list");

loadEventListener();

function loadEventListener() {
  // Add task event
  form.addEventListener("click", addTask);
  // remove task event
  todosList.addEventListener("click", removeTask);
  // Clear event task
  clear.addEventListener("click", clearTask);
}

// Get Task from LS
// function getTask() {
//   let lists;
//   if (localStorage.getItem("lists") === null) {
//     lists = [];
//   } else {
//     lists = JSON.parse(localStorage.getItem("lists"));
//   }
// }

lists.forEach(function(list){
  const li = document.createElement("li");
    li.className = "todos-li";
    const radio = document.createElement("button");
    radio.className = "radio";
    let crossImg = document.createElement("img");
    crossImg.src = "./images/icon-cross.svg";
    crossImg.className = "cross";
    li.appendChild(radio);
    li.appendChild(document.createTextNode(list));
    li.appendChild(crossImg);

    todosList.appendChild(li);
})
// Add List
function addTask(e) {
  if (tasks.value === "") {
    alert("Add a task");
  } else {
    const li = document.createElement("li");
    li.className = "todos-li";
    const radio = document.createElement("button");
    radio.className = "radio";
    let crossImg = document.createElement("img");
    crossImg.src = "./images/icon-cross.svg";
    crossImg.className = "cross";
    li.appendChild(radio);
    li.appendChild(document.createTextNode(tasks.value));
    li.appendChild(crossImg);
    todosList.appendChild(li);

    // Clear input
    tasks.value = "";
  }

  e.preventDefault();
}

// Store Task
function storeTaskInLocalStorage(list) {
  let lists;
  if(localStorage.getItem('lists') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('lists'));
  }

  tasks.push(list);

  localStorage.setItem('tasks', JSON.stringify(lists));
}


// Remove List
function removeTask(e) {
  if (e.target.classList.contains("cross")) {
    e.target.parentElement.remove();

    removeTaskFromLocalStorage(e.target.parentElement);
  }
}

// Remove from LS
function removeTaskFromLocalStorage(taskItem) {
  let lists;
  if(localStorage.getItem('lists') === null){
    lists = [];
  } else {
    lists = JSON.parse(localStorage.getItem('lists'));
  }

  lists.forEach(function(task, index){
    if(taskItem.textContent === list){
      lists.splice(index, 1);
    }
  });

  localStorage.setItem('lists', JSON.stringify(lists));
}
// Clear List
function clearTask() {
  todosList.innerHTML = "";

}
