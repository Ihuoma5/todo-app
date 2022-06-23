const icon = document.querySelector("#icon");
const bgImg = document.querySelector(".bg-desktop-dark");
const mobileBg = document.querySelector(".bg-mobile-dark");
const clicked = document.querySelector(".checkedLi");
const form = document.querySelector(".submit");
const todosList = document.querySelector(".todos");
const clear = document.querySelector(".clear");
const tasks = document.querySelector(".task-list");
const completed = document.querySelector(".completed");

icon.onclick = function () {
  document.body.classList.toggle("light-theme");
  if (document.body.classList.contains("light-theme")) {
    icon.src = "./images/icon-moon.svg";
    bgImg.src = "./images/bg-desktop-light.jpg";
    mobileBg.src = "./images/bg-mobile-light.jpg";
  } else {
    icon.src = "./images/icon-sun.svg";
    bgImg.src = "./images/bg-desktop-dark.jpg";
    mobileBg.src = "./images/bg-mobile-dark.jpg";
  }
};

clicked.onclick = function () {
  if (document.body.classList.contains("clicked")) {
    console.log("clicked");
  }
  // console.log('clicked')
};

loadEventListener();

function loadEventListener() {
  // Add task event
  form.addEventListener("click", addTask);
  // remove task event
  todosList.addEventListener("click", removeTask);
  // Checked task event
  todosList.addEventListener("click", checkTask);
  // Clear event task
  clear.addEventListener("click", clearTask);
  // Selected event task
  clicked.addEventListener("click", selectedTask);
  // Complete task
  completed.addEventListener("click", completeTask);
}

// Get Task from LS
function getTask() {
  let lists;
  if (localStorage.getItem("lists") === null) {
    lists = [];
  } else {
    lists = JSON.parse(localStorage.getItem("lists"));
  }
}

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
    li.classList = "todos-li";
    const radio = document.createElement("button");
    radio.classList = "radio";
    radio.classList.add('completed')
    let crossImg = document.createElement("img");
    crossImg.src = "./images/icon-cross.svg";
    crossImg.classList = "cross";
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
  if (localStorage.getItem("lists") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("lists"));
  }

  tasks.push(list);

  localStorage.setItem("tasks", JSON.stringify(lists));
}

// Remove List
function removeTask(e) {
  if (e.target.classList.contains("cross")) {
    e.target.parentElement.remove();

    removeTaskFromLocalStorage(e.target.parentElement);
  }
}

// Checked List
function checkTask(e) {
  if (e.target.tagName === "li") {
    e.target.classList.toggle("checked");
  } else {
    false;
  }
}
function completeTask(e) {
  console.log("complete");
  completed.parentElement.classList.add("checkedLi");
}
// filter List

// Remove from LS
function removeTaskFromLocalStorage(taskItem) {
  let lists;
  if (localStorage.getItem("lists") === null) {
    lists = [];
  } else {
    lists = JSON.parse(localStorage.getItem("lists"));
  }

  lists.forEach(function (task, index) {
    if (taskItem.textContent === list) {
      lists.splice(index, 1);
    }
  });

  localStorage.setItem("lists", JSON.stringify(lists));
}
// Clear List
function clearTask() {
  if (confirm("are you sure you want to clear task")) {
    todosList.innerHTML = "";
  } else {
  }
}

function selectedTask() {
  console.log("clicked");
}
