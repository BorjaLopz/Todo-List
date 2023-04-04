"use strict";

const task = document.querySelector("#textTask");
console.log(task);

const addTaskButton = document.querySelector("#addTaskButton");
console.log(addTaskButton);

const sortTaskButton = document.querySelector("#sortTask");
console.log(sortTaskButton);

const ulSection = document.querySelector("section ul");
console.log(ulSection);

const months = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
];

const days = [
    "Domingo", 
    "Lunes", 
    "Martes", 
    "Miercoles", 
    "Jueves", 
    "Viernes", 
    "Sabado"
]

let allTask = document.querySelectorAll("li");

function addTaskToList() {

    if(task.value !== "")
    {
        generateTask();
    }

}

function generateTask() {
    ulSection.innerHTML += loadInformation()
    task.value = "";
    updateTaskArray();
}

function updateTaskArray() {
    allTask = document.querySelectorAll("li").forEach(element => 
        {
            element.addEventListener("click", handleSelectTask);
        });
}

function loadInformation() {
    return `<li class="task">
                <p>${task.value}</p>
                <button><img src="./Iconos/Basura_Cerrada.svg" alt="" /></button>
            </li>`;
}

function toggleClassLi(task) {
    task.classList.toggle("done");
}

function handleSelectTask(e) {
    e.stopPropagation();
    let task = e.target.parentElement;

    toggleClassLi(task)
}

function sortTaskFunction() 
{
    console.log("hola");

    // if(allTask.length !== 0)
    // {
    //     console.log("No estamos vacios!");
    // }
    // else
    // {
    //     console.log("Estamos vacios!")
    // }
}

function getDate() {
    const d = new Date();
    const dateNumber = document.querySelector("#dateNumber");
    dateNumber.textContent = d.getDate();
    
    const month = document.querySelector("#month");
    month.textContent = months[d.getMonth()];

    const year = document.querySelector("#year");
    year.textContent = d.getFullYear();

    const dateDay = document.querySelector("#dateDay");
    dateDay.textContent = days[d.getDay()];
}

getDate();

addTaskButton.addEventListener("click", addTaskToList);

sortTaskButton.addEventListener("click", sortTaskFunction)